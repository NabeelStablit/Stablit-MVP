"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mipd";
exports.ids = ["vendor-chunks/mipd"];
exports.modules = {

/***/ "(ssr)/./node_modules/mipd/dist/esm/store.js":
/*!*********************************************!*\
  !*** ./node_modules/mipd/dist/esm/store.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/mipd/dist/esm/utils.js\");\n\nfunction createStore() {\n    const listeners = new Set();\n    let providerDetails = [];\n    const request = ()=>(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.requestProviders)((providerDetail)=>{\n            if (providerDetails.some(({ info })=>info.uuid === providerDetail.info.uuid)) return;\n            providerDetails = [\n                ...providerDetails,\n                providerDetail\n            ];\n            listeners.forEach((listener)=>listener(providerDetails, {\n                    added: [\n                        providerDetail\n                    ]\n                }));\n        });\n    let unwatch = request();\n    return {\n        _listeners () {\n            return listeners;\n        },\n        clear () {\n            listeners.forEach((listener)=>listener([], {\n                    removed: [\n                        ...providerDetails\n                    ]\n                }));\n            providerDetails = [];\n        },\n        destroy () {\n            this.clear();\n            listeners.clear();\n            unwatch();\n        },\n        findProvider ({ rdns }) {\n            return providerDetails.find((providerDetail)=>providerDetail.info.rdns === rdns);\n        },\n        getProviders () {\n            return providerDetails;\n        },\n        reset () {\n            this.clear();\n            unwatch();\n            unwatch = request();\n        },\n        subscribe (listener, { emitImmediately } = {}) {\n            listeners.add(listener);\n            if (emitImmediately) listener(providerDetails, {\n                added: providerDetails\n            });\n            return ()=>listeners.delete(listener);\n        }\n    };\n} //# sourceMappingURL=store.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QyxTQUFTQztJQUNaLE1BQU1DLFlBQVksSUFBSUM7SUFDdEIsSUFBSUMsa0JBQWtCLEVBQUU7SUFDeEIsTUFBTUMsVUFBVSxJQUFNTCwyREFBZ0JBLENBQUMsQ0FBQ007WUFDcEMsSUFBSUYsZ0JBQWdCRyxJQUFJLENBQUMsQ0FBQyxFQUFFQyxJQUFJLEVBQUUsR0FBS0EsS0FBS0MsSUFBSSxLQUFLSCxlQUFlRSxJQUFJLENBQUNDLElBQUksR0FDekU7WUFDSkwsa0JBQWtCO21CQUFJQTtnQkFBaUJFO2FBQWU7WUFDdERKLFVBQVVRLE9BQU8sQ0FBQyxDQUFDQyxXQUFhQSxTQUFTUCxpQkFBaUI7b0JBQUVRLE9BQU87d0JBQUNOO3FCQUFlO2dCQUFDO1FBQ3hGO0lBQ0EsSUFBSU8sVUFBVVI7SUFDZCxPQUFPO1FBQ0hTO1lBQ0ksT0FBT1o7UUFDWDtRQUNBYTtZQUNJYixVQUFVUSxPQUFPLENBQUMsQ0FBQ0MsV0FBYUEsU0FBUyxFQUFFLEVBQUU7b0JBQUVLLFNBQVM7MkJBQUlaO3FCQUFnQjtnQkFBQztZQUM3RUEsa0JBQWtCLEVBQUU7UUFDeEI7UUFDQWE7WUFDSSxJQUFJLENBQUNGLEtBQUs7WUFDVmIsVUFBVWEsS0FBSztZQUNmRjtRQUNKO1FBQ0FLLGNBQWEsRUFBRUMsSUFBSSxFQUFFO1lBQ2pCLE9BQU9mLGdCQUFnQmdCLElBQUksQ0FBQyxDQUFDZCxpQkFBbUJBLGVBQWVFLElBQUksQ0FBQ1csSUFBSSxLQUFLQTtRQUNqRjtRQUNBRTtZQUNJLE9BQU9qQjtRQUNYO1FBQ0FrQjtZQUNJLElBQUksQ0FBQ1AsS0FBSztZQUNWRjtZQUNBQSxVQUFVUjtRQUNkO1FBQ0FrQixXQUFVWixRQUFRLEVBQUUsRUFBRWEsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDdEIsVUFBVXVCLEdBQUcsQ0FBQ2Q7WUFDZCxJQUFJYSxpQkFDQWIsU0FBU1AsaUJBQWlCO2dCQUFFUSxPQUFPUjtZQUFnQjtZQUN2RCxPQUFPLElBQU1GLFVBQVV3QixNQUFNLENBQUNmO1FBQ2xDO0lBQ0o7QUFDSixFQUNBLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jpc2tvLy4vbm9kZV9tb2R1bGVzL21pcGQvZGlzdC9lc20vc3RvcmUuanM/M2JmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0UHJvdmlkZXJzIH0gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUoKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIGxldCBwcm92aWRlckRldGFpbHMgPSBbXTtcbiAgICBjb25zdCByZXF1ZXN0ID0gKCkgPT4gcmVxdWVzdFByb3ZpZGVycygocHJvdmlkZXJEZXRhaWwpID0+IHtcbiAgICAgICAgaWYgKHByb3ZpZGVyRGV0YWlscy5zb21lKCh7IGluZm8gfSkgPT4gaW5mby51dWlkID09PSBwcm92aWRlckRldGFpbC5pbmZvLnV1aWQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBwcm92aWRlckRldGFpbHMgPSBbLi4ucHJvdmlkZXJEZXRhaWxzLCBwcm92aWRlckRldGFpbF07XG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIocHJvdmlkZXJEZXRhaWxzLCB7IGFkZGVkOiBbcHJvdmlkZXJEZXRhaWxdIH0pKTtcbiAgICB9KTtcbiAgICBsZXQgdW53YXRjaCA9IHJlcXVlc3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBfbGlzdGVuZXJzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXIoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKFtdLCB7IHJlbW92ZWQ6IFsuLi5wcm92aWRlckRldGFpbHNdIH0pKTtcbiAgICAgICAgICAgIHByb3ZpZGVyRGV0YWlscyA9IFtdO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgICAgICB1bndhdGNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmRQcm92aWRlcih7IHJkbnMgfSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyRGV0YWlscy5maW5kKChwcm92aWRlckRldGFpbCkgPT4gcHJvdmlkZXJEZXRhaWwuaW5mby5yZG5zID09PSByZG5zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvdmlkZXJzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyRGV0YWlscztcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB1bndhdGNoKCk7XG4gICAgICAgICAgICB1bndhdGNoID0gcmVxdWVzdCgpO1xuICAgICAgICB9LFxuICAgICAgICBzdWJzY3JpYmUobGlzdGVuZXIsIHsgZW1pdEltbWVkaWF0ZWx5IH0gPSB7fSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgICAgICBpZiAoZW1pdEltbWVkaWF0ZWx5KVxuICAgICAgICAgICAgICAgIGxpc3RlbmVyKHByb3ZpZGVyRGV0YWlscywgeyBhZGRlZDogcHJvdmlkZXJEZXRhaWxzIH0pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9LFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdG9yZS5qcy5tYXAiXSwibmFtZXMiOlsicmVxdWVzdFByb3ZpZGVycyIsImNyZWF0ZVN0b3JlIiwibGlzdGVuZXJzIiwiU2V0IiwicHJvdmlkZXJEZXRhaWxzIiwicmVxdWVzdCIsInByb3ZpZGVyRGV0YWlsIiwic29tZSIsImluZm8iLCJ1dWlkIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwiYWRkZWQiLCJ1bndhdGNoIiwiX2xpc3RlbmVycyIsImNsZWFyIiwicmVtb3ZlZCIsImRlc3Ryb3kiLCJmaW5kUHJvdmlkZXIiLCJyZG5zIiwiZmluZCIsImdldFByb3ZpZGVycyIsInJlc2V0Iiwic3Vic2NyaWJlIiwiZW1pdEltbWVkaWF0ZWx5IiwiYWRkIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mipd/dist/esm/store.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mipd/dist/esm/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/mipd/dist/esm/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   announceProvider: () => (/* binding */ announceProvider),\n/* harmony export */   requestProviders: () => (/* binding */ requestProviders)\n/* harmony export */ });\n/**\n * Announces an EIP-1193 Provider.\n */ function announceProvider(detail) {\n    const event = new CustomEvent(\"eip6963:announceProvider\", {\n        detail: Object.freeze(detail)\n    });\n    window.dispatchEvent(event);\n    const handler = ()=>window.dispatchEvent(event);\n    window.addEventListener(\"eip6963:requestProvider\", handler);\n    return ()=>window.removeEventListener(\"eip6963:requestProvider\", handler);\n}\n/**\n * Watches for EIP-1193 Providers to be announced.\n */ function requestProviders(listener) {\n    const handler = (event)=>listener(event.detail);\n    window.addEventListener(\"eip6963:announceProvider\", handler);\n    window.dispatchEvent(new CustomEvent(\"eip6963:requestProvider\"));\n    return ()=>window.removeEventListener(\"eip6963:announceProvider\", handler);\n} //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWlwZC9kaXN0L2VzbS91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztDQUVDLEdBQ00sU0FBU0EsaUJBQWlCQyxNQUFNO0lBQ25DLE1BQU1DLFFBQVEsSUFBSUMsWUFBWSw0QkFBNEI7UUFBRUYsUUFBUUcsT0FBT0MsTUFBTSxDQUFDSjtJQUFRO0lBQzFGSyxPQUFPQyxhQUFhLENBQUNMO0lBQ3JCLE1BQU1NLFVBQVUsSUFBTUYsT0FBT0MsYUFBYSxDQUFDTDtJQUMzQ0ksT0FBT0csZ0JBQWdCLENBQUMsMkJBQTJCRDtJQUNuRCxPQUFPLElBQU1GLE9BQU9JLG1CQUFtQixDQUFDLDJCQUEyQkY7QUFDdkU7QUFDQTs7Q0FFQyxHQUNNLFNBQVNHLGlCQUFpQkMsUUFBUTtJQUNyQyxNQUFNSixVQUFVLENBQUNOLFFBQVVVLFNBQVNWLE1BQU1ELE1BQU07SUFDaERLLE9BQU9HLGdCQUFnQixDQUFDLDRCQUE0QkQ7SUFDcERGLE9BQU9DLGFBQWEsQ0FBQyxJQUFJSixZQUFZO0lBQ3JDLE9BQU8sSUFBTUcsT0FBT0ksbUJBQW1CLENBQUMsNEJBQTRCRjtBQUN4RSxFQUNBLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jpc2tvLy4vbm9kZV9tb2R1bGVzL21pcGQvZGlzdC9lc20vdXRpbHMuanM/MmYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFubm91bmNlcyBhbiBFSVAtMTE5MyBQcm92aWRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFubm91bmNlUHJvdmlkZXIoZGV0YWlsKSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2VpcDY5NjM6YW5ub3VuY2VQcm92aWRlcicsIHsgZGV0YWlsOiBPYmplY3QuZnJlZXplKGRldGFpbCkgfSk7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2VpcDY5NjM6cmVxdWVzdFByb3ZpZGVyJywgaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlaXA2OTYzOnJlcXVlc3RQcm92aWRlcicsIGhhbmRsZXIpO1xufVxuLyoqXG4gKiBXYXRjaGVzIGZvciBFSVAtMTE5MyBQcm92aWRlcnMgdG8gYmUgYW5ub3VuY2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdFByb3ZpZGVycyhsaXN0ZW5lcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IGxpc3RlbmVyKGV2ZW50LmRldGFpbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2VpcDY5NjM6YW5ub3VuY2VQcm92aWRlcicsIGhhbmRsZXIpO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnZWlwNjk2MzpyZXF1ZXN0UHJvdmlkZXInKSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlaXA2OTYzOmFubm91bmNlUHJvdmlkZXInLCBoYW5kbGVyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6WyJhbm5vdW5jZVByb3ZpZGVyIiwiZGV0YWlsIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsIk9iamVjdCIsImZyZWV6ZSIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0UHJvdmlkZXJzIiwibGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mipd/dist/esm/utils.js\n");

/***/ })

};
;