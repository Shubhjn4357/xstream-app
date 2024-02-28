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
exports.EpisodesListComponent = void 0;
var react_1 = require("react");
var core_1 = require("@mantine/core");
var react_router_dom_1 = require("react-router-dom");
var movieApi_1 = require("../utils/movieApi");
exports.EpisodesListComponent = function (_a) {
    var currentEpisode = _a.currentEpisode, source = _a.source, hasEpisodes = _a.hasEpisodes;
    var _b = react_1.useState(), server = _b[0], setServer = _b[1];
    var GetServer = function (episode, media) { return __awaiter(void 0, void 0, void 0, function () {
        var server, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    server = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, movieApi_1["default"].getServer(episode, media)];
                case 2:
                    response = _a.sent();
                    server = response === null || response === void 0 ? void 0 : response.data;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, server];
            }
        });
    }); };
    react_1.useEffect(function () {
        var fetchServer = function () { return __awaiter(void 0, void 0, void 0, function () {
            var serverData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(currentEpisode && (source === null || source === void 0 ? void 0 : source.id))) return [3 /*break*/, 2];
                        return [4 /*yield*/, GetServer(currentEpisode.id, source.id)];
                    case 1:
                        serverData = _a.sent();
                        setServer(serverData);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        fetchServer();
    }, [currentEpisode, source === null || source === void 0 ? void 0 : source.id]);
    return (React.createElement(React.Fragment, null, currentEpisode ?
        React.createElement(core_1.Grid.Col, { span: hasEpisodes ? { xs: 12, sm: 6, md: 3 } : 12, key: currentEpisode === null || currentEpisode === void 0 ? void 0 : currentEpisode.id, className: "episode bg-transparent my-4" },
            React.createElement(core_1.Tooltip, { label: currentEpisode === null || currentEpisode === void 0 ? void 0 : currentEpisode.title },
                React.createElement(core_1.Text, { w: hasEpisodes ? 150 : "auto", p: 10, truncate: true }, currentEpisode === null || currentEpisode === void 0 ? void 0 : currentEpisode.title)),
            server ? (Object.entries(server).map(function (_a) {
                var key = _a[0], serve = _a[1];
                return React.createElement(react_router_dom_1.NavLink, { key: key, className: "p-1", to: "/watch/" + (source === null || source === void 0 ? void 0 : source.id) + "/" + (serve === null || serve === void 0 ? void 0 : serve.name) + "/" + (currentEpisode === null || currentEpisode === void 0 ? void 0 : currentEpisode.id) },
                    React.createElement(core_1.Button, { variant: 'filled' }, serve.name));
            })) : null) : null));
};
