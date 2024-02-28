"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var movieApi_1 = require("../utils/movieApi");
var Watch = function () {
    var _a = react_router_dom_1.useParams(), type = _a.type, id = _a.id, server = _a.server, epid = _a.epid;
    var _b = react_1.useState(null), StreamingData = _b[0], setData = _b[1];
    console.log(StreamingData);
    react_1.useEffect(function () {
        movieApi_1["default"].getWatch(epid, type + "/" + id, server).then(function (data) { return setData(data.data); });
    }, [type, id, server, epid]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, type)));
};
exports["default"] = Watch;
