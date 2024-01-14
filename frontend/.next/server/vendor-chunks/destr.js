"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/destr";
exports.ids = ["vendor-chunks/destr"];
exports.modules = {

/***/ "(ssr)/./node_modules/destr/dist/index.mjs":
/*!*******************************************!*\
  !*** ./node_modules/destr/dist/index.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ destr),\n/* harmony export */   destr: () => (/* binding */ destr),\n/* harmony export */   safeDestr: () => (/* binding */ safeDestr)\n/* harmony export */ });\nconst suspectProtoRx = /\"(?:_|\\\\u0{2}5[Ff]){2}(?:p|\\\\u0{2}70)(?:r|\\\\u0{2}72)(?:o|\\\\u0{2}6[Ff])(?:t|\\\\u0{2}74)(?:o|\\\\u0{2}6[Ff])(?:_|\\\\u0{2}5[Ff]){2}\"\\s*:/;\nconst suspectConstructorRx = /\"(?:c|\\\\u0063)(?:o|\\\\u006[Ff])(?:n|\\\\u006[Ee])(?:s|\\\\u0073)(?:t|\\\\u0074)(?:r|\\\\u0072)(?:u|\\\\u0075)(?:c|\\\\u0063)(?:t|\\\\u0074)(?:o|\\\\u006[Ff])(?:r|\\\\u0072)\"\\s*:/;\nconst JsonSigRx = /^\\s*[\"[{]|^\\s*-?\\d{1,16}(\\.\\d{1,17})?([Ee][+-]?\\d+)?\\s*$/;\nfunction jsonParseTransform(key, value) {\n    if (key === \"__proto__\" || key === \"constructor\" && value && typeof value === \"object\" && \"prototype\" in value) {\n        warnKeyDropped(key);\n        return;\n    }\n    return value;\n}\nfunction warnKeyDropped(key) {\n    console.warn(`[destr] Dropping \"${key}\" key to prevent prototype pollution.`);\n}\nfunction destr(value, options = {}) {\n    if (typeof value !== \"string\") {\n        return value;\n    }\n    const _value = value.trim();\n    if (// eslint-disable-next-line unicorn/prefer-at\n    value[0] === '\"' && value.at(-1) === '\"' && !value.includes(\"\\\\\")) {\n        return _value.slice(1, -1);\n    }\n    if (_value.length <= 9) {\n        const _lval = _value.toLowerCase();\n        if (_lval === \"true\") {\n            return true;\n        }\n        if (_lval === \"false\") {\n            return false;\n        }\n        if (_lval === \"undefined\") {\n            return void 0;\n        }\n        if (_lval === \"null\") {\n            return null;\n        }\n        if (_lval === \"nan\") {\n            return Number.NaN;\n        }\n        if (_lval === \"infinity\") {\n            return Number.POSITIVE_INFINITY;\n        }\n        if (_lval === \"-infinity\") {\n            return Number.NEGATIVE_INFINITY;\n        }\n    }\n    if (!JsonSigRx.test(value)) {\n        if (options.strict) {\n            throw new SyntaxError(\"[destr] Invalid JSON\");\n        }\n        return value;\n    }\n    try {\n        if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {\n            if (options.strict) {\n                throw new Error(\"[destr] Possible prototype pollution\");\n            }\n            return JSON.parse(value, jsonParseTransform);\n        }\n        return JSON.parse(value);\n    } catch (error) {\n        if (options.strict) {\n            throw error;\n        }\n        return value;\n    }\n}\nfunction safeDestr(value, options = {}) {\n    return destr(value, {\n        ...options,\n        strict: true\n    });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVzdHIvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsaUJBQWlCO0FBQ3ZCLE1BQU1DLHVCQUF1QjtBQUM3QixNQUFNQyxZQUFZO0FBQ2xCLFNBQVNDLG1CQUFtQkMsR0FBRyxFQUFFQyxLQUFLO0lBQ3BDLElBQUlELFFBQVEsZUFBZUEsUUFBUSxpQkFBaUJDLFNBQVMsT0FBT0EsVUFBVSxZQUFZLGVBQWVBLE9BQU87UUFDOUdDLGVBQWVGO1FBQ2Y7SUFDRjtJQUNBLE9BQU9DO0FBQ1Q7QUFDQSxTQUFTQyxlQUFlRixHQUFHO0lBQ3pCRyxRQUFRQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUosSUFBSSxxQ0FBcUMsQ0FBQztBQUM5RTtBQUNBLFNBQVNLLE1BQU1KLEtBQUssRUFBRUssVUFBVSxDQUFDLENBQUM7SUFDaEMsSUFBSSxPQUFPTCxVQUFVLFVBQVU7UUFDN0IsT0FBT0E7SUFDVDtJQUNBLE1BQU1NLFNBQVNOLE1BQU1PLElBQUk7SUFDekIsSUFDRSw2Q0FBNkM7SUFDN0NQLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBT0EsTUFBTVEsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUNSLE1BQU1TLFFBQVEsQ0FBQyxPQUM1RDtRQUNBLE9BQU9ILE9BQU9JLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUI7SUFDQSxJQUFJSixPQUFPSyxNQUFNLElBQUksR0FBRztRQUN0QixNQUFNQyxRQUFRTixPQUFPTyxXQUFXO1FBQ2hDLElBQUlELFVBQVUsUUFBUTtZQUNwQixPQUFPO1FBQ1Q7UUFDQSxJQUFJQSxVQUFVLFNBQVM7WUFDckIsT0FBTztRQUNUO1FBQ0EsSUFBSUEsVUFBVSxhQUFhO1lBQ3pCLE9BQU8sS0FBSztRQUNkO1FBQ0EsSUFBSUEsVUFBVSxRQUFRO1lBQ3BCLE9BQU87UUFDVDtRQUNBLElBQUlBLFVBQVUsT0FBTztZQUNuQixPQUFPRSxPQUFPQyxHQUFHO1FBQ25CO1FBQ0EsSUFBSUgsVUFBVSxZQUFZO1lBQ3hCLE9BQU9FLE9BQU9FLGlCQUFpQjtRQUNqQztRQUNBLElBQUlKLFVBQVUsYUFBYTtZQUN6QixPQUFPRSxPQUFPRyxpQkFBaUI7UUFDakM7SUFDRjtJQUNBLElBQUksQ0FBQ3BCLFVBQVVxQixJQUFJLENBQUNsQixRQUFRO1FBQzFCLElBQUlLLFFBQVFjLE1BQU0sRUFBRTtZQUNsQixNQUFNLElBQUlDLFlBQVk7UUFDeEI7UUFDQSxPQUFPcEI7SUFDVDtJQUNBLElBQUk7UUFDRixJQUFJTCxlQUFldUIsSUFBSSxDQUFDbEIsVUFBVUoscUJBQXFCc0IsSUFBSSxDQUFDbEIsUUFBUTtZQUNsRSxJQUFJSyxRQUFRYyxNQUFNLEVBQUU7Z0JBQ2xCLE1BQU0sSUFBSUUsTUFBTTtZQUNsQjtZQUNBLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ3ZCLE9BQU9GO1FBQzNCO1FBQ0EsT0FBT3dCLEtBQUtDLEtBQUssQ0FBQ3ZCO0lBQ3BCLEVBQUUsT0FBT3dCLE9BQU87UUFDZCxJQUFJbkIsUUFBUWMsTUFBTSxFQUFFO1lBQ2xCLE1BQU1LO1FBQ1I7UUFDQSxPQUFPeEI7SUFDVDtBQUNGO0FBQ0EsU0FBU3lCLFVBQVV6QixLQUFLLEVBQUVLLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLE9BQU9ELE1BQU1KLE9BQU87UUFBRSxHQUFHSyxPQUFPO1FBQUVjLFFBQVE7SUFBSztBQUNqRDtBQUU4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jpc2tvLy4vbm9kZV9tb2R1bGVzL2Rlc3RyL2Rpc3QvaW5kZXgubWpzPzhjNTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3VzcGVjdFByb3RvUnggPSAvXCIoPzpffFxcXFx1MHsyfTVbRmZdKXsyfSg/OnB8XFxcXHUwezJ9NzApKD86cnxcXFxcdTB7Mn03MikoPzpvfFxcXFx1MHsyfTZbRmZdKSg/OnR8XFxcXHUwezJ9NzQpKD86b3xcXFxcdTB7Mn02W0ZmXSkoPzpffFxcXFx1MHsyfTVbRmZdKXsyfVwiXFxzKjovO1xuY29uc3Qgc3VzcGVjdENvbnN0cnVjdG9yUnggPSAvXCIoPzpjfFxcXFx1MDA2MykoPzpvfFxcXFx1MDA2W0ZmXSkoPzpufFxcXFx1MDA2W0VlXSkoPzpzfFxcXFx1MDA3MykoPzp0fFxcXFx1MDA3NCkoPzpyfFxcXFx1MDA3MikoPzp1fFxcXFx1MDA3NSkoPzpjfFxcXFx1MDA2MykoPzp0fFxcXFx1MDA3NCkoPzpvfFxcXFx1MDA2W0ZmXSkoPzpyfFxcXFx1MDA3MilcIlxccyo6LztcbmNvbnN0IEpzb25TaWdSeCA9IC9eXFxzKltcIlt7XXxeXFxzKi0/XFxkezEsMTZ9KFxcLlxcZHsxLDE3fSk/KFtFZV1bKy1dP1xcZCspP1xccyokLztcbmZ1bmN0aW9uIGpzb25QYXJzZVRyYW5zZm9ybShrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT09IFwiX19wcm90b19fXCIgfHwga2V5ID09PSBcImNvbnN0cnVjdG9yXCIgJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIFwicHJvdG90eXBlXCIgaW4gdmFsdWUpIHtcbiAgICB3YXJuS2V5RHJvcHBlZChrZXkpO1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3YXJuS2V5RHJvcHBlZChrZXkpIHtcbiAgY29uc29sZS53YXJuKGBbZGVzdHJdIERyb3BwaW5nIFwiJHtrZXl9XCIga2V5IHRvIHByZXZlbnQgcHJvdG90eXBlIHBvbGx1dGlvbi5gKTtcbn1cbmZ1bmN0aW9uIGRlc3RyKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBjb25zdCBfdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gIGlmIChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItYXRcbiAgICB2YWx1ZVswXSA9PT0gJ1wiJyAmJiB2YWx1ZS5hdCgtMSkgPT09ICdcIicgJiYgIXZhbHVlLmluY2x1ZGVzKFwiXFxcXFwiKVxuICApIHtcbiAgICByZXR1cm4gX3ZhbHVlLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAoX3ZhbHVlLmxlbmd0aCA8PSA5KSB7XG4gICAgY29uc3QgX2x2YWwgPSBfdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoX2x2YWwgPT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKF9sdmFsID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKF9sdmFsID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoX2x2YWwgPT09IFwibnVsbFwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKF9sdmFsID09PSBcIm5hblwiKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLk5hTjtcbiAgICB9XG4gICAgaWYgKF9sdmFsID09PSBcImluZmluaXR5XCIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgfVxuICAgIGlmIChfbHZhbCA9PT0gXCItaW5maW5pdHlcIikge1xuICAgICAgcmV0dXJuIE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICB9XG4gIH1cbiAgaWYgKCFKc29uU2lnUngudGVzdCh2YWx1ZSkpIHtcbiAgICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIltkZXN0cl0gSW52YWxpZCBKU09OXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAoc3VzcGVjdFByb3RvUngudGVzdCh2YWx1ZSkgfHwgc3VzcGVjdENvbnN0cnVjdG9yUngudGVzdCh2YWx1ZSkpIHtcbiAgICAgIGlmIChvcHRpb25zLnN0cmljdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbZGVzdHJdIFBvc3NpYmxlIHByb3RvdHlwZSBwb2xsdXRpb25cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSwganNvblBhcnNlVHJhbnNmb3JtKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChvcHRpb25zLnN0cmljdCkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gc2FmZURlc3RyKHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIGRlc3RyKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHN0cmljdDogdHJ1ZSB9KTtcbn1cblxuZXhwb3J0IHsgZGVzdHIgYXMgZGVmYXVsdCwgZGVzdHIsIHNhZmVEZXN0ciB9O1xuIl0sIm5hbWVzIjpbInN1c3BlY3RQcm90b1J4Iiwic3VzcGVjdENvbnN0cnVjdG9yUngiLCJKc29uU2lnUngiLCJqc29uUGFyc2VUcmFuc2Zvcm0iLCJrZXkiLCJ2YWx1ZSIsIndhcm5LZXlEcm9wcGVkIiwiY29uc29sZSIsIndhcm4iLCJkZXN0ciIsIm9wdGlvbnMiLCJfdmFsdWUiLCJ0cmltIiwiYXQiLCJpbmNsdWRlcyIsInNsaWNlIiwibGVuZ3RoIiwiX2x2YWwiLCJ0b0xvd2VyQ2FzZSIsIk51bWJlciIsIk5hTiIsIlBPU0lUSVZFX0lORklOSVRZIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJ0ZXN0Iiwic3RyaWN0IiwiU3ludGF4RXJyb3IiLCJFcnJvciIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwic2FmZURlc3RyIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/destr/dist/index.mjs\n");

/***/ })

};
;