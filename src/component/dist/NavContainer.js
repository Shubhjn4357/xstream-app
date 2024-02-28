"use strict";
exports.__esModule = true;
var fireApi_1 = require("../utils/fireApi");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var core_1 = require("@mantine/core");
var icons_react_1 = require("@tabler/icons-react");
var icons_react_2 = require("@tabler/icons-react");
var _1 = require(".");
var NavFlex = function () {
    var _a = react_1.useState(false), LogOut = _a[0], setLogOut = _a[1];
    var _b = react_1.useState(false), SideBar = _b[0], setSideBar = _b[1];
    var _c = react_1.useState(false), largeScreen = _c[0], setLargeScreen = _c[1];
    var _d = react_1.useState(), UserProfile = _d[0], setUserProfile = _d[1];
    var user = fireApi_1["default"].useUser().user;
    var setColorScheme = core_1.useMantineColorScheme({
        keepTransitions: true
    }).setColorScheme;
    var computedColorScheme = core_1.useComputedColorScheme('light', { getInitialValueInEffect: true });
    var signOut = function () {
        fireApi_1["default"].useLogOut();
    };
    var SideBarFeature = [
        {
            icon: React.createElement(icons_react_1.IconHome, null),
            text: "Home",
            link: "/"
        },
        {
            icon: React.createElement(icons_react_2.IconPlayerPlayFilled, null),
            text: "Watch Anime",
            link: "/watchanime"
        },
        {
            icon: React.createElement(icons_react_1.IconSearch, null),
            text: "Search",
            link: "/search"
        },
        {
            icon: React.createElement(icons_react_1.IconDeviceFloppy, null),
            text: "Bookmark",
            link: "/bookmark"
        },
        {
            icon: React.createElement(icons_react_1.IconSettings, null),
            text: "Setting",
            link: "/setting"
        },
        {
            icon: React.createElement(icons_react_1.IconUserHexagon, null),
            text: "User",
            link: "/userprofile"
        },
        {
            icon: React.createElement(icons_react_1.IconLayoutList, null),
            text: "Anime List",
            link: "/animelist"
        },
    ];
    var ToggleTheme = react_1.useCallback(function () {
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
    }, [computedColorScheme, setColorScheme]);
    react_1.useEffect(function () {
        var ctrl1 = function (e) { return e.ctrlKey && e.key === "x"; };
        var ctrl2 = function (e) { return e.ctrlKey && e.key === "z"; };
        var handler = function (e) {
            if (ctrl1(e)) {
                setLogOut(true);
            }
            else if (ctrl2(e)) {
                ToggleTheme();
            }
        };
        var ignore = function (e) {
            if (ctrl1(e)) {
                e.preventDefault();
            }
            if (ctrl2(e)) {
                ToggleTheme();
            }
        };
        window.addEventListener("keyup", handler);
        window.addEventListener("keydown", ignore);
        return function () {
            window.removeEventListener("keyup", handler);
            window.removeEventListener("keydown", ignore);
        };
    }, [ToggleTheme]);
    react_1.useEffect(function () {
        // Function to handle screen size changes
        function handleResize() {
            var isLargeScreen = window.innerWidth > 768;
            setLargeScreen(isLargeScreen);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    react_1.useEffect(function () {
        if (user) {
            setUserProfile(user);
        }
    }, [user]);
    var SidebarToggle = function () {
        setSideBar(!SideBar);
    };
    var userProfileSection = (React.createElement(core_1.Stack, { gap: 1, align: "end", justify: "center", w: 100 },
        React.createElement(core_1.Text, { fw: "bolder", size: "md" }, UserProfile === null || UserProfile === void 0 ? void 0 : UserProfile.displayName),
        React.createElement(core_1.Box, { w: 100 },
            React.createElement(core_1.Tooltip, { label: UserProfile === null || UserProfile === void 0 ? void 0 : UserProfile.email },
                React.createElement(core_1.Text, { size: "sm", fw: "bold", truncate: "end" }, UserProfile === null || UserProfile === void 0 ? void 0 : UserProfile.email)))));
    return (React.createElement(core_1.AppShell, { className: " w-full", p: 4, px: 10 },
        React.createElement(core_1.AppShell.Header, { className: "flex sticky top-2 rounded-pill flex-shrink items-center justify-between glassmorphism px-3" },
            React.createElement(core_1.Flex, { gap: "3", align: "center" },
                React.createElement(core_1.ActionIcon, { variant: "subtle", radius: "lg", onClick: SidebarToggle, "aria-label": "Menu" }, SideBar ? React.createElement(icons_react_1.IconArrowBack, { className: "h-5 w-5" }) : React.createElement(icons_react_1.IconCategory2, { className: "h-5 w-5" })),
                React.createElement(react_router_dom_1.NavLink, { to: "/", style: { color: "inherit" }, className: "flex text-xl text-decoration-none items-center justify-center" },
                    React.createElement(icons_react_1.IconCodeCircle2, null),
                    React.createElement(core_1.Text, null, "XStream"))),
            React.createElement("div", { className: "flex items-center gap-2 justify-evenly py-2" },
                React.createElement("div", { className: "items-center gap-2  justify-evenly flex " + (!largeScreen ? "d-none" : "") },
                    React.createElement(core_1.ActionIcon, { variant: "transparent", radius: "xl", onClick: ToggleTheme, "aria-label": "Toggle color scheme" }, computedColorScheme === 'dark' ? React.createElement(icons_react_1.IconMoonFilled, null) : React.createElement(icons_react_1.IconSunFilled, null)),
                    userProfileSection),
                React.createElement(core_1.Menu, null,
                    React.createElement(core_1.Menu.Target, null,
                        React.createElement(core_1.Avatar, { src: user === null || user === void 0 ? void 0 : user.photoURL, radius: "full", alt: "no image found" })),
                    React.createElement(core_1.Menu.Dropdown, { className: "dark:bg-dark", w: 300 },
                        React.createElement(core_1.Flex, { className: "flex gap-2 p-2 sm:hidden dark:dark" },
                            React.createElement(core_1.Avatar, { src: user === null || user === void 0 ? void 0 : user.photoURL, radius: "xl", alt: "no image found" }),
                            userProfileSection),
                        React.createElement(core_1.Menu.Item, { onClick: ToggleTheme, leftSection: computedColorScheme === 'dark' ? React.createElement(icons_react_1.IconMoonFilled, null) : React.createElement(icons_react_1.IconSunFilled, null) },
                            React.createElement(core_1.Kbd, null, "CTRL"),
                            " + ",
                            React.createElement(core_1.Kbd, null, "Z"),
                            " ",
                            computedColorScheme === 'dark' ? "Dark" : "Light",
                            " Theme"),
                        React.createElement(core_1.Menu.Item, { c: "red", onClick: function () { return setLogOut(!LogOut); }, leftSection: React.createElement(icons_react_1.IconArrowBack, null) },
                            React.createElement(core_1.Flex, { gap: 5 },
                                React.createElement(core_1.Kbd, null, "CTRL"),
                                " + ",
                                React.createElement(core_1.Kbd, null, "X"),
                                " ",
                                React.createElement(core_1.Text, null, "Log Out"))))),
                React.createElement(core_1.Modal, { opened: LogOut, onClose: function () { return setLogOut(false); }, withCloseButton: false, centered: true },
                    React.createElement(core_1.Flex, { justify: "space-between", align: "center" },
                        React.createElement(core_1.Title, { order: 3 }, "Are You Sure!"),
                        React.createElement(core_1.CloseButton, { onClick: function () { return setLogOut(false); } })),
                    React.createElement(core_1.Flex, { p: 3, gap: "5", mt: "4", justify: "end" },
                        React.createElement(core_1.Button, { variant: "subtle", c: "red", onClick: signOut }, "Sign Me Out"),
                        React.createElement(core_1.Button, { variant: "light", c: "cyan", onClick: function () { return setLogOut(false); } }, "Cancel"))))),
        React.createElement(core_1.AppShell.Main, { p: 4 },
            React.createElement(core_1.Drawer, { offset: 8, radius: "lg", size: "17rem", opened: SideBar, withCloseButton: false, onClose: SidebarToggle },
                React.createElement(core_1.AppShell.Aside, { id: "nav-drawer", className: "py-4 flex flex-col justify-evenly" }, /* Nav icons */ SideBarFeature.map(function (i, k) {
                    return React.createElement(core_1.Tooltip, { key: k, label: i.text, withArrow: true, openDelay: 500 },
                        React.createElement(react_router_dom_1.NavLink, { to: i.link, className: function (_a) {
                                var isActive = _a.isActive, isPending = _a.isPending, isTransitioning = _a.isTransitioning;
                                return [
                                    isPending ? "pending" : "",
                                    isActive ? "active" : "",
                                    isTransitioning ? "transitioning" : "",
                                ].join(" ")
                                    + "pe-5";
                            } },
                            React.createElement("div", { className: "flex gap-2 px-2" },
                                i.icon,
                                i.text)));
                }))),
            React.createElement(react_router_dom_1.Outlet, null)),
        React.createElement(_1.ScrollToTop, null)));
};
exports["default"] = NavFlex;
