//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";


interface BaseContract {
    function formulaUpdation() external;
}

contract WeightRebalanceAPI is FunctionsClient, ConfirmedOwner {

    BaseContract public baseContract;

    constructor(address _addressbaseContract) FunctionsClient(router) ConfirmedOwner(msg.sender) {
        baseContract = BaseContract(_addressbaseContract);
    }

    event APICallCompleted(bytes32 requestId, string result);

    using FunctionsRequest for FunctionsRequest.Request;

    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;

    bool public isFullfilled;

    error UnexpectedRequestID(bytes32 requestId);

    // sepolia
    address router = 0xb83E47C2bC239B3bf370bc41e1459A34b41238D0;
    uint64 subscriptionId = 1068;
    bytes32 donID =
        0x66756e2d657468657265756d2d7365706f6c69612d3100000000000000000000;

    uint32 gasLimit = 300000;
    string public result;

    string priceAPI =
        "const apiResponse = await Functions.makeHttpRequest({"
        "url: `https://adgen.pythonanywhere.com/generate-ad-poster/`"
        "});"
        "if (apiResponse.error) {"
        "throw Error('Request failed');"
        "}"
        "const { data } = apiResponse;"
        "return Functions.encodeString(data[0].price);";

    function callAPI(
        string[] calldata args
    ) public {
        isFullfilled = false;
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(priceAPI);
        
        if (args.length > 0) req.setArgs(args);
        s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );
    }

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override{
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestID(requestId);
        }
        result = string(response);
        // 
        baseContract.formulaUpdation();
        // 
        s_lastResponse = response;
        s_lastError = err;
        isFullfilled = true;
        emit APICallCompleted(requestId, result);
    }
}