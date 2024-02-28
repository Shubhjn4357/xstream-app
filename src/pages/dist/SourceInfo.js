"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var movieApi_1 = require("../utils/movieApi");
var core_1 = require("@mantine/core");
var useProxy_1 = require("../hooks/useProxy");
var component_1 = require("../component");
var PaginationHandler_1 = require("../component/PaginationHandler");
var animeApi_1 = require("../utils/animeApi");
var SourceInfo = function () {
    var _a = react_router_dom_1.useParams(), id = _a.id, type = _a.type;
    var _b = react_1.useState(null), source = _b[0], setSource = _b[1];
    var _c = useProxy_1["default"](source === null || source === void 0 ? void 0 : source.cover), loading = _c.loading, response = _c.response, error = _c.error;
    react_1.useEffect(function () {
        if (type === "anime") {
            animeApi_1["default"].getAnimeInfo(id).then(function (data) { return setSource(data.data); });
        }
        else {
            movieApi_1["default"].getInfo(type + "/" + id).then(function (data) { return setSource(data.data); });
        }
    }, [id, type]);
    return (React.createElement(core_1.Paper, { className: 'movie' },
        React.createElement("span", { className: "source-poster", style: { backgroundImage: "linear-gradient(45deg,30% rgba(255, 255, 255, 0.048),70% rgb(0, 0, 0)),url(" + (error ? "https://picsum.photos/800" : loading ? "https://placehold.co/1200x800?text=Loading..." : response ? response : "https://placehold.co/600x400") + ")" } },
            React.createElement(core_1.Paper, { p: 4, className: "movie-details glassmorphism" },
                React.createElement(core_1.Title, { order: 2 }, source === null || source === void 0 ? void 0 : source.title),
                (source === null || source === void 0 ? void 0 : source.rating) && React.createElement(core_1.Text, { my: 4 },
                    "Rating: ", source === null || source === void 0 ? void 0 :
                    source.rating),
                (source === null || source === void 0 ? void 0 : source.releaseDate) && React.createElement(core_1.Text, { my: 4 },
                    "Rating: ", source === null || source === void 0 ? void 0 :
                    source.releaseDate),
                (source === null || source === void 0 ? void 0 : source.description) && React.createElement(core_1.Text, { my: 4 }, source === null || source === void 0 ? void 0 : source.description),
                (source === null || source === void 0 ? void 0 : source.genres) && React.createElement(core_1.Text, { my: 4 },
                    "Genres: ", source === null || source === void 0 ? void 0 :
                    source.genres.join(', ')),
                (source === null || source === void 0 ? void 0 : source.status) && React.createElement(core_1.Text, { my: 4 },
                    "Status: ", source === null || source === void 0 ? void 0 :
                    source.status),
                (source === null || source === void 0 ? void 0 : source.duration) && React.createElement(core_1.Text, { my: 4 },
                    "Duration: ", source === null || source === void 0 ? void 0 :
                    source.duration),
                (source === null || source === void 0 ? void 0 : source.production) && React.createElement(core_1.Text, { my: 4 },
                    "Production: ", source === null || source === void 0 ? void 0 :
                    source.production),
                (source === null || source === void 0 ? void 0 : source.casts) && React.createElement(core_1.Text, { my: 4 },
                    "Casts: ", source === null || source === void 0 ? void 0 :
                    source.casts.join(', ')),
                (source === null || source === void 0 ? void 0 : source.tags) && React.createElement(core_1.Text, { my: 4 },
                    "Tags: ", source === null || source === void 0 ? void 0 :
                    source.tags.join(' ')),
                (source === null || source === void 0 ? void 0 : source.totalEpisodes) && React.createElement(core_1.Text, { my: 4 },
                    "Total Episodes: ", source === null || source === void 0 ? void 0 :
                    source.totalEpisodes)),
            (source === null || source === void 0 ? void 0 : source.seasons) && (source === null || source === void 0 ? void 0 : source.seasons.map(function (season, index) { return (React.createElement(core_1.Paper, { key: index, className: "season bg-transparent my-4" },
                React.createElement("h3", null,
                    "Season ",
                    season.season),
                season.image && React.createElement("img", { src: season.image, alt: "Season " + season.season }),
                React.createElement(PaginationHandler_1["default"], { source: source }))); })),
            (source === null || source === void 0 ? void 0 : source.episodes) ? React.createElement(PaginationHandler_1["default"], { source: source }) : null,
            React.createElement(core_1.Title, { order: 3 }, "Recomendation"),
            (source === null || source === void 0 ? void 0 : source.recommendations) ? React.createElement(component_1.Slider, { slide: 3, space: 5, content: source.recommendations }) : "")));
};
exports["default"] = SourceInfo;
