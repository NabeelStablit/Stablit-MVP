from fastapi import FastAPI, Request
import ccxt
import pandas as pd
import numpy as np

app = FastAPI()

@app.get("/")
async def prices_sETH(request: Request):
    try:
        ex = ccxt.binanceus()
        ohlcv = ex.fetch_ohlcv('ETH/USDT', '1m', limit=1000)
        price = np.around(np.mean([entry[4] for entry in ohlcv]), decimals=2).astype(str)
        return {"price": price}
    except ccxt.NetworkError as ne:
        print(f"NetworkError: {ne}")
        return {"error": "A network error occurred. Check network connectivity."}
    except ccxt.BaseError as be:
        print(f"CCXT BaseError: {be}")
        return {"error": "An error occurred in the CCXT library."}
    except Exception as e:
        print(f"Error: {e}")
        return {"error": "An unexpected error occurred."}