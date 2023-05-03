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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes\": () => (/* binding */ Attributes),\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\nvar Attributes;\n(function (Attributes) {\n    Attributes[\"username\"] = \"username\";\n    Attributes[\"userpfp\"] = \"userpfp\";\n    Attributes[\"posttext\"] = \"posttext\";\n    Attributes[\"postimage\"] = \"postimage\";\n})(Attributes || (Attributes = {}));\nclass Card extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            username: null,\n            userpfp: null,\n            posttext: null,\n            postimage: null\n        };\n        return Object.keys(attrs);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `<div class=\"post\">\r\n        <div class=\"userPost\">\r\n            <img class=\"pf\" src=\"${this.userpfp}\">\r\n            <h3>${this.username}</h3>\r\n        </div>\r\n        <p>${this.posttext}</p>\r\n        <img class=\"pst\" src=\"${this.postimage}\">\r\n        <section class=\"posticonos\">\r\n        <img src=\"./imagenes/like.png\">\r\n        <img src=\"./imagenes/comentario.png\">\r\n        <img src=\"./imagenes/actualizar.png\">\r\n        <img src=\"./imagenes/avion.png\">\r\n    </section>\r\n\r\n        </div>`;\n        // const css = this.ownerDocument.createElement(\"style\");\n        // css.innerHTML = styles;\n        // this.shadowRoot?.appendChild(css);\n    }\n}\ncustomElements.define('app-card', Card);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/card/card.ts?");

/***/ }),

/***/ "./src/Components/createPost/createpost.ts":
/*!*************************************************!*\
  !*** ./src/Components/createPost/createpost.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreatePost)\n/* harmony export */ });\nclass CreatePost extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <div class=\"creted\">\r\n        <section class=\"create\">\r\n            <img id=\"perfil\" src=\"./imagenes/perfil.png\">\r\n            <input id=\"navv\" placeholder=\"create...\">\r\n        </section>\r\n            <section class=\"iconos\">\r\n                <img src=\"./imagenes/imagen.png\">\r\n                <img src=\"./imagenes/youtube.png\">\r\n                <img src=\"./imagenes/calendario.png\">\r\n                <img src=\"./imagenes/menu.png\">\r\n            </section>\r\n    </div>`;\n    }\n}\ncustomElements.define('create-post', CreatePost);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/createPost/createpost.ts?");

/***/ }),

/***/ "./src/Components/export.ts":
/*!**********************************!*\
  !*** ./src/Components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"CreatePost\": () => (/* reexport safe */ _createPost_createpost__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"FollowRecoms\": () => (/* reexport safe */ _followRecoms_followRecoms__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"LogCard\": () => (/* reexport safe */ _logCard_logCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"Nav\": () => (/* reexport safe */ _nav_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Reset\": () => (/* reexport safe */ _reset_reset__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"ResetPassword\": () => (/* reexport safe */ _resetPassword_resetPassword__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"export\": () => (/* reexport safe */ _sidebarIcons_sidebarIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav */ \"./src/Components/nav/nav.ts\");\n/* harmony import */ var _sidebarIcons_sidebarIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarIcons/sidebarIcon */ \"./src/Components/sidebarIcons/sidebarIcon.ts\");\n/* harmony import */ var _createPost_createpost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPost/createpost */ \"./src/Components/createPost/createpost.ts\");\n/* harmony import */ var _followRecoms_followRecoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./followRecoms/followRecoms */ \"./src/Components/followRecoms/followRecoms.ts\");\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card */ \"./src/Components/card/card.ts\");\n/* harmony import */ var _logCard_logCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logCard/logCard */ \"./src/Components/logCard/logCard.ts\");\n/* harmony import */ var _reset_reset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset/reset */ \"./src/Components/reset/reset.ts\");\n/* harmony import */ var _resetPassword_resetPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resetPassword/resetPassword */ \"./src/Components/resetPassword/resetPassword.ts\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://linkedin/./src/Components/export.ts?");

/***/ }),

/***/ "./src/Components/followRecoms/followRecoms.ts":
/*!*****************************************************!*\
  !*** ./src/Components/followRecoms/followRecoms.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (/* binding */ FollowRecoms)\n/* harmony export */ });\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"username\"] = \"username\";\n    Attribute[\"userpfp\"] = \"userpfp\";\n})(Attribute || (Attribute = {}));\nclass FollowRecoms extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            username: null,\n            userpfp: null,\n        };\n        return Object.keys(attrs);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <img class=\"pfr\" src=\"${this.userpfp}\">\r\n        <section class=\"userRecom\">\r\n            <label>${this.username}</label>\r\n            <button>+ Seguir</button>\r\n        </section>`;\n    }\n}\ncustomElements.define('follow-recoms', FollowRecoms);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/followRecoms/followRecoms.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nav)\n/* harmony export */ });\nclass Nav extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n            <section class=\"buscador\">\r\n            <img id=\"in\" src=\"./imagenes/in.png\">\r\n            <input id=\"navv\" placeholder=\"search...\">\r\n            </section>`;\n    }\n}\ncustomElements.define('app-nav', Nav);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/nav/nav.ts?");

/***/ }),

/***/ "./src/Components/resetPassword/resetPassword.ts":
/*!*******************************************************!*\
  !*** ./src/Components/resetPassword/resetPassword.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResetPassword)\n/* harmony export */ });\nclass ResetPassword extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const reset = this.ownerDocument.createElement('h1');\n        this.textContent = \"Reset password\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(reset);\n        const newPassword = this.ownerDocument.createElement('input');\n        this.innerHTML = \"Enter new password\";\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(newPassword);\n        const repeatPassword = this.ownerDocument.createElement('input');\n        this.innerHTML = \"Repeat password\";\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(repeatPassword);\n        const restButton = this.ownerDocument.createElement('button');\n        this.innerHTML = \"Reset \";\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(restButton);\n    }\n}\ncustomElements.define('reset-password', ResetPassword);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/resetPassword/resetPassword.ts?");

/***/ }),

/***/ "./src/Components/reset/reset.ts":
/*!***************************************!*\
  !*** ./src/Components/reset/reset.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Reset)\n/* harmony export */ });\nclass Reset extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const forgetPassword = this.ownerDocument.createElement('h1');\n        this.textContent = \"Did you forget your password?\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(forgetPassword);\n        const email = this.ownerDocument.createElement('input');\n        this.innerHTML = \"Email\";\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(email);\n        const resetButton = this.ownerDocument.createElement('button');\n        this.innerHTML = \"Reset password\";\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(resetButton);\n        const returnButton = this.ownerDocument.createElement('button');\n        this.innerHTML = \"return\";\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(returnButton);\n    }\n}\ncustomElements.define('reset-card', Reset);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/reset/reset.ts?");

/***/ }),

/***/ "./src/Components/sidebarIcons/sidebarIcon.ts":
/*!****************************************************!*\
  !*** ./src/Components/sidebarIcons/sidebarIcon.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sidebarIcon)\n/* harmony export */ });\nclass sidebarIcon extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"./styles.css\">\r\n        <img src=\"../dist/imagenes/hogar.png\">\r\n        <img src=\"../dist/imagenes/globo.png\">\r\n        <img src=\"../dist/imagenes/maletin.png\">\r\n        <img src=\"../dist/imagenes/campana.png\">\r\n        <img src=\"../dist/imagenes/usuario.png\">\r\n        `;\n    }\n}\ncustomElements.define('sidebar-icon', sidebarIcon);\n\n\n//# sourceURL=webpack://linkedin/./src/Components/sidebarIcons/sidebarIcon.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/export */ \"./src/Components/export.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const dashboard = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(dashboard);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://linkedin/./src/index.ts?");

/***/ }),

/***/ "./src/mocks/getData.ts":
/*!******************************!*\
  !*** ./src/mocks/getData.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataR\": () => (/* binding */ dataR),\n/* harmony export */   \"datas\": () => (/* binding */ datas)\n/* harmony export */ });\nconst datas = [\n    {\n        username: \"Universidad Icesi\",\n        userpfp: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrArH4hofnrsMENI9rR9It6xc59aoMDzTRw&usqp=CAU\",\n        posttext: \"#HoyEnIcesi Icecomex invita hoy a las 5:00 p.m., al foro ¿Cómo aperturar mercados internacionales efectivamente?, que tendrá como invitado especial a John Edinson Jiménez, jefe de Exportaciones y Dirección de Negocios Internacionales en Lubristone, quien hablará de la experiencia, los aciertos y desaciertos que han tenido en la apertura de nuevos mercados y la forma en la que han logrado un relacionamiento a largo plazo con sus aliados en el exterior. Conéctate aquí https://lnkd.in/eUVuht9w\",\n        postimage: \"https://media.licdn.com/dms/image/D4E22AQG3F1QEGGthAQ/feedshare-shrink_800/0/1682520526765?e=1685577600&v=beta&t=onEH8tFrOYoecODyW7Ob6-RLzLKtU1yz-NYn3w_HwoE\",\n    },\n    {\n        username: \"Epson LatinoAmerica\",\n        userpfp: \"https://yt3.googleusercontent.com/ytc/AL5GRJUpjbYn2nRTs6pKoZsmN1wr8vu1KtvcA1_xsPqW9w=s900-c-k-c0x00ffffff-no-rj\",\n        posttext: \"Nuevas impresoras y multifuncionales para actualizar a tu empresa.\",\n        postimage: \"https://media.licdn.com/dms/image/D4E10AQEY7vD-qP54uw/image-shrink_800/0/1680290074343?e=1683068400&v=beta&t=oquNOgQVzX_PVIt0onlplkoxo75uJ6ZD12Drmd1BWN8\",\n    },\n    {\n        username: \"MIU City University Miami\",\n        userpfp: \"https://media.licdn.com/dms/image/C4D0BAQEMPn6fmWMXSg/company-logo_200_200/0/1667926786276?e=1690416000&v=beta&t=Mu9fj_9yAQeFUELCkkpKGkwnbcHHkolqgmo9VU2ynhQ\",\n        posttext: \"Continuamos con el ciclo de ponencias enfocadas a la empleabilidad de la mano del Dr. Pablo Cardona. En esta ocasión descubriremos cuáles son las habilidades y competencias que debe tener un buen líder en la actualidad.\",\n        postimage: \"https://media.licdn.com/dms/image/sync/C4D22AQHHqH8AMjkCNQ/feedshare-shrink_800/0/1667813828778?e=1685577600&v=beta&t=zTNYSpfrUcvvevCkcRzrlatSVduBAFNW8Y4cU53OV1A\",\n    },\n    {\n        username: \"SUSE\",\n        userpfp: \"https://www.ecured.cu/images/f/f0/Suse.png\",\n        posttext: \"Tomorrow, Wednesday, April 26th, join #SUSE and other leading #cloud and microservices experts at #DevOps SKILup Day: CI/CD, organized by DevOps Institute.\",\n        postimage: \"https://media.licdn.com/dms/image/sync/D4E10AQGjLGcBc-YbSw/image-shrink_800/0/1682424015620?e=1683201600&v=beta&t=-iLtvoF3ky0NR9zisCwXgIZsjWED9pka_yLrCCRy6-o\",\n    },\n    {\n        username: \"Deel\",\n        userpfp: \"https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/3dbec57c-8f53-4fc0-bfba-242bf48bd3de.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50\",\n        posttext: \"Este jueves 20 y viernes 21 de abril se llevará a cabo esta conferencia que reúne empresarios, inversores e innovadores tecnológicos del mundo y muestra los últimos avances en tecnología.\",\n        postimage: \"https://media.licdn.com/dms/image/D4D22AQFzPm7QDiN0dg/feedshare-shrink_800/0/1682008285105?e=1685577600&v=beta&t=icXmKypVW9rUIqyYUUbDdwnxGI0-3mMavcunBC2zEgg\",\n    },\n];\nconst dataR = [\n    {\n        userpfp: \"../../dist/imagenes/dian.png\",\n        username: \"DIAN\",\n    },\n    {\n        userpfp: \"../../dist/imagenes/coomeva.png\",\n        username: \"Coomeva\",\n    },\n    {\n        userpfp: \"../../dist/imagenes/logo-bancolombia.jpg\",\n        username: \"Bancolombia\",\n    },\n];\n\n\n//# sourceURL=webpack://linkedin/./src/mocks/getData.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mocks_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mocks/getData */ \"./src/mocks/getData.ts\");\n/* harmony import */ var _Components_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/card/card */ \"./src/Components/card/card.ts\");\n/* harmony import */ var _Components_followRecoms_followRecoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/followRecoms/followRecoms */ \"./src/Components/followRecoms/followRecoms.ts\");\n\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.datass = [];\n        this.datarr = [];\n        this.attachShadow({ mode: \"open\" });\n        _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.datas === null || _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.datas === void 0 ? void 0 : _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.datas.forEach((e) => {\n            const prof = this.ownerDocument.createElement(\"app-card\");\n            prof.setAttribute(_Components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributes.username, e.username);\n            prof.setAttribute(_Components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributes.userpfp, e.userpfp);\n            prof.setAttribute(_Components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributes.posttext, e.posttext);\n            prof.setAttribute(_Components_card_card__WEBPACK_IMPORTED_MODULE_1__.Attributes.postimage, e.postimage);\n            this.datass.push(prof);\n        });\n        _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.dataR === null || _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.dataR === void 0 ? void 0 : _mocks_getData__WEBPACK_IMPORTED_MODULE_0__.dataR.forEach((a) => {\n            const pruf = this.ownerDocument.createElement(\"follow-recoms\");\n            pruf.setAttribute(_Components_followRecoms_followRecoms__WEBPACK_IMPORTED_MODULE_2__.Attribute.username, a.username);\n            pruf.setAttribute(_Components_followRecoms_followRecoms__WEBPACK_IMPORTED_MODULE_2__.Attribute.userpfp, a.userpfp);\n            this.datarr.push(pruf);\n        });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d, _e;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const sidebarIcon = this.ownerDocument.createElement('sidebar-icon');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sidebarIcon);\n        const nav = this.ownerDocument.createElement('app-nav');\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(nav);\n        const createPost = this.ownerDocument.createElement('create-post');\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(createPost);\n        const card = this.ownerDocument.createElement(\"section\");\n        card.className = \"card\";\n        for (let index = 0; index < this.datass.length; index++) {\n            card.appendChild(this.datass[index]);\n        }\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(card);\n        const followrecoms = this.ownerDocument.createElement(\"section\");\n        followrecoms.className = \"followrecoms\";\n        for (let index = 0; index < this.datarr.length; index++) {\n            followrecoms.appendChild(this.datarr[index]);\n        }\n        (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(followrecoms);\n    }\n}\ncustomElements.define('app-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://linkedin/./src/screens/dashboard.ts?");

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