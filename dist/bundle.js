/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/card/card.ts":
/*!*************************************!*\
  !*** ./src/Components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes\": () => (/* binding */ Attributes),\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\nvar Attributes;\n(function (Attributes) {\n    Attributes[\"username\"] = \"username\";\n    Attributes[\"userpfp\"] = \"userpfp\";\n    Attributes[\"posttext\"] = \"posttext\";\n    Attributes[\"postimage\"] = \"postimage\";\n})(Attributes || (Attributes = {}));\nclass Card extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            username: null,\n            userpfp: null,\n            posttext: null,\n            postimage: null\n        };\n        return Object.keys(attrs);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `<div class=\"post\">\r\n        <link rel=\"stylesheet\" href=\"../src/Components/card/card.css\">\r\n        <link rel=\"stylesheet\" href=\"./index.css\">\r\n\r\n        <div class=\"userPost\">\r\n            <img class=\"pf\" src=\"${this.userpfp}\">\r\n            <h3>${this.username}</h3>\r\n        </div>\r\n            <p>${this.posttext}</p>\r\n            <img class=\"pst\" src=\"${this.postimage}\">\r\n            <section class=\"posticonos\">\r\n                <img src=\"./imagenes/like.png\">\r\n                <img src=\"./imagenes/comentario.png\">\r\n                <img src=\"./imagenes/actualizar.png\">\r\n                <img src=\"./imagenes/avion.png\">\r\n            </section>\r\n        </div>`;\n        // const css = this.ownerDocument.createElement(\"style\");\n        // css.innerHTML = styles;\n        // this.shadowRoot?.appendChild(css);\n    }\n}\ncustomElements.define('app-card', Card);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/card/card.ts?");

/***/ }),

/***/ "./src/Components/createPost/createpost.ts":
/*!*************************************************!*\
  !*** ./src/Components/createPost/createpost.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreatePost)\n/* harmony export */ });\nclass CreatePost extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/Components/createPost/createpost.css\">\r\n        <link rel=\"stylesheet\" href=\"./index.css\">\r\n\r\n        <div class=\"creted\">\r\n        <section class=\"create\">\r\n            <img id=\"perfil\" src=\"./imagenes/perfil.png\">\r\n            <input id=\"navv\" placeholder=\"create...\">\r\n        </section>\r\n            <section class=\"iconos\">\r\n                <img src=\"./imagenes/imagen.png\">\r\n                <img src=\"./imagenes/youtube.png\">\r\n                <img src=\"./imagenes/calendario.png\">\r\n                <img src=\"./imagenes/menu.png\">\r\n            </section>\r\n    </div>`;\n    }\n}\ncustomElements.define('create-post', CreatePost);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/createPost/createpost.ts?");

/***/ }),

/***/ "./src/Components/export.ts":
/*!**********************************!*\
  !*** ./src/Components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"CreatePost\": () => (/* reexport safe */ _createPost_createpost__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"FollowRecomI\": () => (/* reexport safe */ _followRecomI_followRecomI__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"FollowRecoms\": () => (/* reexport safe */ _followRecoms_followRecoms__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"LogCard\": () => (/* reexport safe */ _logCard_logCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"Nav\": () => (/* reexport safe */ _nav_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Reset\": () => (/* reexport safe */ _reset_reset__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"ResetPassword\": () => (/* reexport safe */ _resetPassword_resetPassword__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   \"export\": () => (/* reexport safe */ _sidebarIcons_sidebarIcons__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav */ \"./src/Components/nav/nav.ts\");\n/* harmony import */ var _sidebarIcons_sidebarIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarIcons/sidebarIcons */ \"./src/Components/sidebarIcons/sidebarIcons.ts\");\n/* harmony import */ var _createPost_createpost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPost/createpost */ \"./src/Components/createPost/createpost.ts\");\n/* harmony import */ var _followRecomI_followRecomI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./followRecomI/followRecomI */ \"./src/Components/followRecomI/followRecomI.ts\");\n/* harmony import */ var _followRecoms_followRecoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./followRecoms/followRecoms */ \"./src/Components/followRecoms/followRecoms.ts\");\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card */ \"./src/Components/card/card.ts\");\n/* harmony import */ var _logCard_logCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logCard/logCard */ \"./src/Components/logCard/logCard.ts\");\n/* harmony import */ var _reset_reset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset/reset */ \"./src/Components/reset/reset.ts\");\n/* harmony import */ var _resetPassword_resetPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resetPassword/resetPassword */ \"./src/Components/resetPassword/resetPassword.ts\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://linkedin/./src/Components/export.ts?");

/***/ }),

/***/ "./src/Components/followRecomI/followRecomI.ts":
/*!*****************************************************!*\
  !*** ./src/Components/followRecomI/followRecomI.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (/* binding */ FollowRecomI)\n/* harmony export */ });\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"username\"] = \"username\";\n    Attribute[\"userpfp\"] = \"userpfp\";\n})(Attribute || (Attribute = {}));\nclass FollowRecomI extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            username: null,\n            userpfp: null,\n        };\n        return Object.keys(attrs);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/Components/followRecomI/followRecomI.css\">\r\n        <link rel=\"stylesheet\" href=\"./index.css\">\r\n\r\n        <img class=\"pfr\" src=\"${this.userpfp}\">\r\n        <section class=\"userRecom\">\r\n            <label>${this.username}</label>\r\n            <button>+ Seguir</button>\r\n        </section>`;\n    }\n}\ncustomElements.define('follow-recomi', FollowRecomI);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/followRecomI/followRecomI.ts?");

/***/ }),

/***/ "./src/Components/followRecoms/followRecoms.ts":
/*!*****************************************************!*\
  !*** ./src/Components/followRecoms/followRecoms.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FollowRecoms)\n/* harmony export */ });\n/* harmony import */ var _followRecomI_followRecomI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../followRecomI/followRecomI */ \"./src/Components/followRecomI/followRecomI.ts\");\n/* harmony import */ var _mocks_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mocks/getData */ \"./src/mocks/getData.ts\");\n\n\nclass FollowRecoms extends HTMLElement {\n    constructor() {\n        super();\n        this.datarr = [];\n        this.attachShadow({ mode: \"open\" });\n    }\n    async connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            <link rel=\"stylesheet\" href=\"../src/Components/followRecoms/followRecoms.css\">\r\n            <link rel=\"stylesheet\" href=\"./index.css\">\r\n    `;\n        }\n        ;\n        _mocks_getData__WEBPACK_IMPORTED_MODULE_1__.dataRI === null || _mocks_getData__WEBPACK_IMPORTED_MODULE_1__.dataRI === void 0 ? void 0 : _mocks_getData__WEBPACK_IMPORTED_MODULE_1__.dataRI.forEach((a) => {\n            var _a;\n            const pruf = this.ownerDocument.createElement(\"follow-recomi\");\n            pruf.setAttribute(_followRecomI_followRecomI__WEBPACK_IMPORTED_MODULE_0__.Attribute.username, a.username);\n            pruf.setAttribute(_followRecomI_followRecomI__WEBPACK_IMPORTED_MODULE_0__.Attribute.userpfp, a.userpfp);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(pruf);\n        });\n    }\n}\ncustomElements.define('follow-recoms', FollowRecoms);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/followRecoms/followRecoms.ts?");

/***/ }),

/***/ "./src/Components/logCard/logCard.ts":
/*!*******************************************!*\
  !*** ./src/Components/logCard/logCard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LogCard)\n/* harmony export */ });\nclass LogCard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d, _e;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const login = this.ownerDocument.createElement('h1');\n        login.textContent = \"Log in\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(login);\n        const email = this.ownerDocument.createElement('input');\n        email.textContent = \"Email\";\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(email);\n        const password = this.ownerDocument.createElement('input');\n        password.textContent = \"Password\";\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(password);\n        const forgetPassword = this.ownerDocument.createElement('h3');\n        forgetPassword.textContent = \"Did you forget your password?\";\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(forgetPassword);\n        const logButton = this.ownerDocument.createElement('button');\n        logButton.textContent = \"Sing Up\";\n        (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(logButton);\n    }\n}\ncustomElements.define('log-card', LogCard);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/logCard/logCard.ts?");

/***/ }),

/***/ "./src/Components/nav/nav.ts":
/*!***********************************!*\
  !*** ./src/Components/nav/nav.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nav)\n/* harmony export */ });\nclass Nav extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/Components/nav/nav.css\">\r\n        <link rel=\"stylesheet\" href=\"./index.css\">\r\n\r\n            <section class=\"buscador\">\r\n            <img id=\"in\" src=\"./imagenes/in.png\">\r\n            <input id=\"navv\" placeholder=\"search...\">\r\n            </section>`;\n    }\n}\ncustomElements.define('app-nav', Nav);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/nav/nav.ts?");

/***/ }),

/***/ "./src/Components/resetPassword/resetPassword.ts":
/*!*******************************************************!*\
  !*** ./src/Components/resetPassword/resetPassword.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResetPassword)\n/* harmony export */ });\nclass ResetPassword extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const reset = this.ownerDocument.createElement('h1');\n        reset.textContent = \"Reset password\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(reset);\n        const newPassword = this.ownerDocument.createElement('input');\n        newPassword.textContent = \"Enter new password\";\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(newPassword);\n        const repeatPassword = this.ownerDocument.createElement('input');\n        repeatPassword.textContent = \"Repeat password\";\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(repeatPassword);\n        const restButton = this.ownerDocument.createElement('button');\n        restButton.textContent = \"Reset \";\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(restButton);\n    }\n}\ncustomElements.define('reset-password', ResetPassword);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/resetPassword/resetPassword.ts?");

/***/ }),

/***/ "./src/Components/reset/reset.ts":
/*!***************************************!*\
  !*** ./src/Components/reset/reset.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Reset)\n/* harmony export */ });\nclass Reset extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const forgetPassword = this.ownerDocument.createElement('h1');\n        forgetPassword.textContent = \"Did you forget your password?\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(forgetPassword);\n        const email = this.ownerDocument.createElement('input');\n        email.textContent = \"Email\";\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(email);\n        const resetButton = this.ownerDocument.createElement('button');\n        resetButton.textContent = \"Reset password\";\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(resetButton);\n        const returnButton = this.ownerDocument.createElement('button');\n        returnButton.textContent = \"return\";\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(returnButton);\n    }\n}\ncustomElements.define('reset-card', Reset);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/reset/reset.ts?");

/***/ }),

/***/ "./src/Components/sidebarIcons/sidebarIcons.ts":
/*!*****************************************************!*\
  !*** ./src/Components/sidebarIcons/sidebarIcons.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sidebarIcon)\n/* harmony export */ });\n/* harmony import */ var _mocks_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mocks/getData */ \"./src/mocks/getData.ts\");\n\nclass sidebarIcon extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/Components/sidebarIcons/sidebarIcons.css\">\r\n        <link rel=\"stylesheet\" href=\"./index.css\">\r\n        `;\n        const container = this.ownerDocument.createElement('div');\n        container.setAttribute('id', 'sidebar');\n        _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.barDataI.map((e) => {\n            const barIcon = this.ownerDocument.createElement('img');\n            barIcon.setAttribute('src', `${e.imgSource}`);\n            barIcon.setAttribute('href', `${e.linkRef}`);\n            const linkPage = this.ownerDocument.createElement('a');\n            linkPage.appendChild(barIcon);\n            container.appendChild(linkPage);\n        });\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n    }\n}\ncustomElements.define('sidebar-icon', sidebarIcon);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/sidebarIcons/sidebarIcons.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/export */ \"./src/Components/export.ts\");\n/* harmony import */ var _screens_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard/dashboard */ \"./src/screens/dashboard/dashboard.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index */ \"./src/store/index.ts\");\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_2__.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c;\n        this.innerHTML = `\r\n            <link rel=\"stylesheet\" href=\"../src/appContainer.css\">`;\n        const sideBar = this.ownerDocument.createElement('sidebar-icon');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sideBar);\n        const dashboard = this.ownerDocument.createElement('app-dashboard');\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(dashboard);\n        dashboard.setAttribute(\"id\", \"app-dashboard\");\n        const followRecoms = this.ownerDocument.createElement('follow-recoms');\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(followRecoms);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://linkedin/./src/index.ts?");

/***/ }),

/***/ "./src/mocks/getData.ts":
/*!******************************!*\
  !*** ./src/mocks/getData.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"barDataI\": () => (/* binding */ barDataI),\n/* harmony export */   \"dataRI\": () => (/* binding */ dataRI),\n/* harmony export */   \"datasI\": () => (/* binding */ datasI)\n/* harmony export */ });\nconst datasI = [\n    {\n        username: \"Universidad Icesi\",\n        userpfp: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrArH4hofnrsMENI9rR9It6xc59aoMDzTRw&usqp=CAU\",\n        posttext: \"#HoyEnIcesi Icecomex invita hoy a las 5:00 p.m., al foro ¿Cómo aperturar mercados internacionales efectivamente?, que tendrá como invitado especial a John Edinson Jiménez, jefe de Exportaciones y Dirección de Negocios Internacionales en Lubristone, quien hablará de la experiencia, los aciertos y desaciertos que han tenido en la apertura de nuevos mercados y la forma en la que han logrado un relacionamiento a largo plazo con sus aliados en el exterior. Conéctate aquí https://lnkd.in/eUVuht9w\",\n        postimage: \"https://media.licdn.com/dms/image/D4E22AQG3F1QEGGthAQ/feedshare-shrink_800/0/1682520526765?e=1685577600&v=beta&t=onEH8tFrOYoecODyW7Ob6-RLzLKtU1yz-NYn3w_HwoE\"\n    },\n    {\n        username: \"Epson LatinoAmerica\",\n        userpfp: \"https://yt3.googleusercontent.com/ytc/AL5GRJUpjbYn2nRTs6pKoZsmN1wr8vu1KtvcA1_xsPqW9w=s900-c-k-c0x00ffffff-no-rj\",\n        posttext: \"Nuevas impresoras y multifuncionales para actualizar a tu empresa.\",\n        postimage: \"https://media.licdn.com/dms/image/D4E10AQEY7vD-qP54uw/image-shrink_800/0/1680290074343?e=1683068400&v=beta&t=oquNOgQVzX_PVIt0onlplkoxo75uJ6ZD12Drmd1BWN8\"\n    },\n    {\n        username: \"MIU City University Miami\",\n        userpfp: \"https://media.licdn.com/dms/image/C4D0BAQEMPn6fmWMXSg/company-logo_200_200/0/1667926786276?e=1690416000&v=beta&t=Mu9fj_9yAQeFUELCkkpKGkwnbcHHkolqgmo9VU2ynhQ\",\n        posttext: \"Continuamos con el ciclo de ponencias enfocadas a la empleabilidad de la mano del Dr. Pablo Cardona. En esta ocasión descubriremos cuáles son las habilidades y competencias que debe tener un buen líder en la actualidad.\",\n        postimage: \"https://media.licdn.com/dms/image/sync/C4D22AQHHqH8AMjkCNQ/feedshare-shrink_800/0/1667813828778?e=1685577600&v=beta&t=zTNYSpfrUcvvevCkcRzrlatSVduBAFNW8Y4cU53OV1A\"\n    },\n    {\n        username: \"SUSE\",\n        userpfp: \"https://www.ecured.cu/images/f/f0/Suse.png\",\n        posttext: \"Tomorrow, Wednesday, April 26th, join #SUSE and other leading #cloud and microservices experts at #DevOps SKILup Day: CI/CD, organized by DevOps Institute.\",\n        postimage: \"https://media.licdn.com/dms/image/sync/D4E10AQGjLGcBc-YbSw/image-shrink_800/0/1682424015620?e=1683201600&v=beta&t=-iLtvoF3ky0NR9zisCwXgIZsjWED9pka_yLrCCRy6-o\"\n    },\n    {\n        username: \"Deel\",\n        userpfp: \"https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/3dbec57c-8f53-4fc0-bfba-242bf48bd3de.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50\",\n        posttext: \"Este jueves 20 y viernes 21 de abril se llevará a cabo esta conferencia que reúne empresarios, inversores e innovadores tecnológicos del mundo y muestra los últimos avances en tecnología.\",\n        postimage: \"https://media.licdn.com/dms/image/D4D22AQFzPm7QDiN0dg/feedshare-shrink_800/0/1682008285105?e=1685577600&v=beta&t=icXmKypVW9rUIqyYUUbDdwnxGI0-3mMavcunBC2zEgg\"\n    }\n];\nconst dataRI = [\n    {\n        userpfp: \"../../dist/imagenes/dian.png\",\n        username: \"DIAN\"\n    },\n    {\n        userpfp: \"../../dist/imagenes/coomeva.png\",\n        username: \"Coomeva\"\n    },\n    {\n        userpfp: \"../../dist/imagenes/logo-bancolombia.jpg\",\n        username: \"Bancolombia\"\n    }\n];\nconst barDataI = [\n    {\n        imgSource: \"./imagenes/hogar.png\",\n        linkRef: \"\"\n    },\n    {\n        imgSource: \"./imagenes/globo.png\",\n        linkRef: \"\"\n    },\n    {\n        imgSource: \"./imagenes/maletin.png\",\n        linkRef: \"\"\n    },\n    {\n        imgSource: \"./imagenes/campana.png\",\n        linkRef: \"\"\n    },\n    {\n        imgSource: \"./imagenes/usuario.png\",\n        linkRef: \"\"\n    }\n];\n\n\n//# sourceURL=webpack://linkedin/./src/mocks/getData.ts?");

/***/ }),

/***/ "./src/screens/dashboard/dashboard.ts":
/*!********************************************!*\
  !*** ./src/screens/dashboard/dashboard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mocks_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mocks/getData */ \"./src/mocks/getData.ts\");\n/* harmony import */ var _Components_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/card/card */ \"./src/Components/card/card.ts\");\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.datass = [];\n        this.attachShadow({ mode: \"open\" });\n        _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.datasI === null || _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.datasI === void 0 ? void 0 : _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.datasI.forEach((e) => {\n            const prof = this.ownerDocument.createElement(\"app-card\");\n            prof.setAttribute(_Components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributes.username, e.username);\n            prof.setAttribute(_Components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributes.userpfp, e.userpfp);\n            prof.setAttribute(_Components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributes.posttext, e.posttext);\n            prof.setAttribute(_Components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributes.postimage, e.postimage);\n            this.datass.push(prof);\n        });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"./index.css\">\r\n        <link rel=\"stylesheet\" href=\"../src/screens/dashboard/dashboard.css\">\r\n        `;\n        const section = this.ownerDocument.createElement(\"section\");\n        section.setAttribute(\"id\", \"app-dashboard\");\n        const nav = this.ownerDocument.createElement('app-nav');\n        section.appendChild(nav);\n        const createPost = this.ownerDocument.createElement('create-post');\n        section.appendChild(createPost);\n        const card = this.ownerDocument.createElement(\"section\");\n        card.className = \"card\";\n        for (let index = 0; index < this.datass.length; index++) {\n            card.appendChild(this.datass[index]);\n        }\n        section.appendChild(card);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(section);\n    }\n}\ncustomElements.define('app-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://linkedin/./src/screens/dashboard/dashboard.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n/* harmony import */ var _mocks_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mocks/getData */ \"./src/mocks/getData.ts\");\n\n\n\n\nconst emptyState = {\n    screen: _types_store__WEBPACK_IMPORTED_MODULE_1__.Screens.LOGIN,\n    dataR: _mocks_getData__WEBPACK_IMPORTED_MODULE_3__.dataRI,\n    datas: _mocks_getData__WEBPACK_IMPORTED_MODULE_3__.datasI,\n    barData: _mocks_getData__WEBPACK_IMPORTED_MODULE_3__.barDataI\n};\nlet appState = _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n    key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE,\n    defaultValue: emptyState,\n});\nlet observers = [];\nconst persistStore = (state) => _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({ key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE, value: state });\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    const newState = (0,_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer)(action, clone);\n    appState = newState;\n    persistStore(newState);\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://linkedin/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    const clone = JSON.parse(JSON.stringify(currentState));\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.NavigationActions.NAVIGATE:\n            return Object.assign(Object.assign({}, clone), { screen: payload });\n        case \"NEW_POST\":\n            return Object.assign(Object.assign({}, clone), { datas: payload });\n        default:\n            return clone;\n    }\n};\n\n\n//# sourceURL=webpack://linkedin/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavigationActions\": () => (/* binding */ NavigationActions),\n/* harmony export */   \"Screens\": () => (/* binding */ Screens)\n/* harmony export */ });\nvar Screens;\n(function (Screens) {\n    Screens[\"LOGIN\"] = \"LOGIN\";\n    Screens[\"SIGNUP\"] = \"SIGNUP\";\n    Screens[\"DASHBOARD\"] = \"DASHBOARD\";\n    Screens[\"EXPLORER\"] = \"EXPLORER\";\n    Screens[\"JOBS\"] = \"JOBS\";\n    Screens[\"NOTIFICATIONS\"] = \"NOTIFICATIONS\";\n    Screens[\"RESET_PASWORD\"] = \"RESET_PASWORD\";\n    Screens[\"RESET\"] = \"RESET\";\n})(Screens || (Screens = {}));\nvar NavigationActions;\n(function (NavigationActions) {\n    NavigationActions[\"NAVIGATE\"] = \"NAVIGATE\";\n})(NavigationActions || (NavigationActions = {}));\n\n\n//# sourceURL=webpack://linkedin/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PersistanceKeys\": () => (/* binding */ PersistanceKeys),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys || (PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    get,\n    set,\n});\n\n\n//# sourceURL=webpack://linkedin/./src/utils/storage.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;