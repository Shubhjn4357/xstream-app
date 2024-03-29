"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
// Assuming xstremapi is your base URL defined in the environment variables
var xstreamapi = import.meta.env.VITE_API_XSTREAM_API;
// const xtestapi="http://localhost:3000"
var AxiosFetcher = /** @class */ (function () {
    function AxiosFetcher() {
    }
    // Generic method for fetching data with Axios, managing loading and error states
    AxiosFetcher.prototype.fetchWithAxios = function (endpoint) {
        return __awaiter(this, void 0, Promise, function () {
            var response, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = {
                            data: null, loading: false, error: null
                        };
                        response.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1["default"].get(xstreamapi + "/" + endpoint)];
                    case 2:
                        result = _a.sent();
                        response.data = result.data; // Data from Axios response
                        response.loading = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        response.error = error_1; // Casting the error to an Error type
                        response.loading = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, response];
                }
            });
        });
    };
    AxiosFetcher.prototype.getProxy = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var encodedImageUrl, headers, encodedHeaders, baseUri, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        encodedImageUrl = encodeURIComponent(url);
                        headers = {};
                        encodedHeaders = encodeURIComponent(JSON.stringify(headers));
                        baseUri = "https://xstream-api.vercel.app";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1["default"].get(baseUri + "/utils/image-proxy?url=" + encodedImageUrl + "&headers=" + encodedHeaders, { responseType: 'arraybuffer' })];
                    case 2:
                        response = _a.sent();
                        if (!response) {
                            throw new Error('No response from the proxy server.');
                        }
                        return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                    case 3:
                        error_2 = _a.sent();
                        console.error('Error fetching the proxied image:', error_2);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AxiosFetcher.prototype.getM3U8Proxy = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var encodedImageUrl, headers, encodedHeaders, baseUri, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        encodedImageUrl = encodeURIComponent(url);
                        headers = {};
                        encodedHeaders = encodeURIComponent(JSON.stringify(headers));
                        baseUri = "https://xstream-api.vercel.app";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1["default"].get(baseUri + "/utils/m3u8-proxy?url=" + encodedImageUrl + "&headers=" + encodedHeaders)];
                    case 2:
                        response = _a.sent();
                        if (!response) {
                            throw new Error('No response from the proxy server.');
                        }
                        return [2 /*return*/, response === null || response === void 0 ? void 0 : response.data];
                    case 3:
                        error_3 = _a.sent();
                        console.error('Error fetching the proxied image:', error_3);
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AxiosFetcher;
}());
var axiosFetcher = new AxiosFetcher();
exports["default"] = axiosFetcher;
