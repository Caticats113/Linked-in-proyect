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

/***/ "./src/Components/createPost/createPost.js":
/*!*************************************************!*\
  !*** ./src/Components/createPost/createPost.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CreatePost extends HTMLElement{\r\n\r\n    constructor() {\r\n        super();\r\n        this.attachShadow({ mode: \"open\" });\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render();\r\n    }\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue) {\r\n        this[propName] = newValue;\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n        this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"./styles.css\">\r\n        <div class=\"creted\">\r\n        <section class=\"create\">\r\n        <img id=\"perfil\" src=\"./imagenes/perfil.png\">\r\n        <input id=\"navv\" placeholder=\"create...\">\r\n        </section>\r\n        <section class=\"iconos\">\r\n        <img src=\"./imagenes/imagen.png\">\r\n        <img src=\"./imagenes/youtube.png\">\r\n        <img src=\"./imagenes/calendario.png\">\r\n        <img src=\"./imagenes/menu.png\">\r\n        </section>\r\n        </div>\r\n\r\n        `;\r\n    }\r\n}\r\n\r\ncustomElements.define('create-post', CreatePost);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatePost);\n\n//# sourceURL=webpack://linkedin/./src/Components/createPost/createPost.js?");

/***/ }),

/***/ "./src/Components/dashboardPost/dashboardPost.js":
/*!*******************************************************!*\
  !*** ./src/Components/dashboardPost/dashboardPost.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DashboardPost extends HTMLElement {\r\n\r\n    static get observedAttributes() {\r\n        return [\"username\",\"userpfp\", \"posttext\", \"postimage\",\"like\",\"coment\",\"actu\",\"send\"];\r\n    }\r\n\r\n    constructor() {\r\n        super();\r\n        this.attachShadow({ mode: \"open\" });\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render();\r\n    }\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue) {\r\n        this[propName] = newValue;\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n        this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"./styles.css\">\r\n        <div class=\"post\">\r\n            <div class=\"userPost\">\r\n                <img class=\"pf\" src=\"${this.userpfp}\">\r\n                <h3>${this.username}</h3>\r\n            </div>\r\n            <p>${this.posttext}</p>\r\n            <img class=\"pst\" src=\"${this.postimage}\">\r\n            <section class=\"posticonos\">\r\n            <img src=\"./imagenes/like.png\">\r\n            <img src=\"./imagenes/comentario.png\">\r\n            <img src=\"./imagenes/actualizar.png\">\r\n            <img src=\"./imagenes/avion.png\">\r\n            </section>\r\n            </div>`;\r\n    }\r\n}\r\n\r\ncustomElements.define('dashboard-post', DashboardPost);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPost);\r\n\n\n//# sourceURL=webpack://linkedin/./src/Components/dashboardPost/dashboardPost.js?");

/***/ }),

/***/ "./src/Components/data.js":
/*!********************************!*\
  !*** ./src/Components/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data =[\r\n\r\n    {\r\n        username:\"Universidad Icesi\",\r\n        userpfp:\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrArH4hofnrsMENI9rR9It6xc59aoMDzTRw&usqp=CAU\",\r\n        posttext:\"Del 14 al 17 de marzo se llevará a cabo la Feria Laboral Junior 2023, un espacio para que los estudiantes y recién graduados de Icesi puedan acceder a oportunidades laborales de empresas regionales y nacionales.\",\r\n        postimage:\"https://media.licdn.com/dms/image/C4E22AQHOOVVbuAkkug/feedshare-shrink_800/0/1678391677919?e=1682553600&v=beta&t=7aXmhiw4drIx7NTgw2XuItinvBcm8Pkam69piiL1Dsc\",\r\n        like:\"../../dist/imagenes/like.png\",\r\n        coment:\"../../dist/imagenes/comentario.png\",\r\n        actu:\"../../dist/imagenes/actualizar.png\",\r\n        send:\"../../dist/imagenes/avion\"\r\n    },\r\n    {\r\n\r\n        username:\"Epson LatinoAmerica\",\r\n        userpfp:\"https://yt3.googleusercontent.com/ytc/AL5GRJUpjbYn2nRTs6pKoZsmN1wr8vu1KtvcA1_xsPqW9w=s900-c-k-c0x00ffffff-no-rj\",\r\n        posttext:\"Descubre el nuevo programa que permitirá acondicionar tu institución educativa con equipos de proyección de última generación a un menor costo.\",\r\n        postimage:\"https://media.licdn.com/dms/image/sync/C5610AQEXHFEEr_xlSA/image-shrink_800/0/1678111310826/RENTAL_PROGRAM_PLANETS_LKDN_1080x1080pxpng?e=1680091200&v=beta&t=BuBbATww4Xe0Qxb69kSAe2zr9ej_h2hDBqBgATKL7HI\",\r\n        like:\"../../dist/imagenes/like.png\",\r\n        coment:\"../../dist/imagenes/comentario.png\",\r\n        actu:\"../../dist/imagenes/actualizar.png\",\r\n        send:\"../../dist/imagenes/avion\"\r\n    },\r\n    {\r\n        username:\"MIU City University Miami\",\r\n        userpfp:\"https://yt3.googleusercontent.com/ytc/AL5GRJWe3B88F1TDnrc10GaqBL70I5cdExgO_R_9m4hy6A=s900-c-k-c0x00ffffff-no-rj\",\r\n        posttext:\"Estudia una maestría online en MIU City Univeristy Miami. Podrás estudiar en inglés o en español, consiguiendo tu título oficial estadounidense\",\r\n        postimage:\"https://media.licdn.com/dms/image/sync/C4D10AQF5x831wSNcnA/image-shrink_800/0/1678699752061/Maestria-ES1jpg?e=1680094800&v=beta&t=vpcdqnLNpsZYA39OEFdy1V4a_0TFQGPnTGntdd0l8rQ\",\r\n        like:\"../../dist/imagenes/like.png\",\r\n        coment:\"../../dist/imagenes/comentario.png\",\r\n        actu:\"../../dist/imagenes/actualizar.png\",\r\n        send:\"../../dist/imagenes/avion\"\r\n    },\r\n    {\r\n        username:\"SUSE\",\r\n        userpfp:\"https://www.ecured.cu/images/f/f0/Suse.png\",\r\n        posttext:\"To help you make a truly informed decision, our Enterprise Linux Playbook compares the capabilities across all the leading releases.\",\r\n        postimage:\"https://media.licdn.com/dms/image/sync/D5618AQF4MMFzSxhNKg/companyUpdate-article-image-shrink_627_1200/0/1674618356938/SUSE-Modernize-Retail-Experience1200x1200-Ad-51png?e=1682553600&v=beta&t=kAcyh1-st2qCHWhFAoMiDHNSnrOAzvErdVqaF54j2ME\",\r\n        like:\"../../dist/imagenes/like.png\",\r\n        coment:\"../../dist/imagenes/comentario.png\",\r\n        actu:\"../../dist/imagenes/actualizar.png\",\r\n        send:\"../../dist/imagenes/avion\"\r\n    },\r\n    {\r\n        username:\"Deel\",\r\n        userpfp:\"https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/3dbec57c-8f53-4fc0-bfba-242bf48bd3de.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50\",\r\n        posttext:\"¿Tienes un equipo global? En Deel, tenemos la respuesta para tus desafíos de gestión, cultura y legales. En esta guía, te contamos qué es un Sistema de Información de RR.HH. (SIRH), cómo elegir el indicado y por qué es la tecnología que llevará tu negocio hacia el futuro del trabajo.\",\r\n        postimage:\"https://media.licdn.com/dms/image/sync/C4D10AQEcseWXqHbQoQ/image-shrink_800/0/1678135814031/1200x627jpg?e=1680094800&v=beta&t=7LIBH108L9G2ZikknI-931b3lS7PMcpjNLdFBEKYOU0\",\r\n        like:\"../../dist/imagenes/like.png\",\r\n        coment:\"../../dist/imagenes/comentario.png\",\r\n        actu:\"../../dist/imagenes/actualizar.png\",\r\n        send:\"../../dist/imagenes/avion\"\r\n    },\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://linkedin/./src/Components/data.js?");

/***/ }),

/***/ "./src/Components/data2.js":
/*!*********************************!*\
  !*** ./src/Components/data2.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data2 = [\r\n   {\r\n      pageicon:\"../../dist/imagenes/hogar.png\",\r\n      goToLink:\"\"\r\n   },\r\n   {\r\n      pageicon:\"../../dist/imagenes/globo.png\",\r\n      goToLink:\"\"\r\n   },\r\n   {\r\n      pageicon:\"../../dist/imagenes/maletin.png\",\r\n      goToLink:\"\"\r\n   },\r\n   {\r\n      pageicon:\"../../dist/imagenes/campana.png\",\r\n      goToLink:\"\"\r\n   },\r\n   {\r\n      pageicon:\"../../dist/imagenes/usuario.png\",\r\n      goToLink:\"\"\r\n   }\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data2);\n\n//# sourceURL=webpack://linkedin/./src/Components/data2.js?");

/***/ }),

/***/ "./src/Components/data3.js":
/*!*********************************!*\
  !*** ./src/Components/data3.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data3 =[\r\n\r\n    {\r\n        userpfp:\"../../dist/imagenes/dian.png\",\r\n        username:\"DIAN\",\r\n    },\r\n    {\r\n        userpfp:\"../../dist/imagenes/coomeva.png\",\r\n        username:\"Coomeva\",\r\n    },\r\n    {\r\n        userpfp:\"../../dist/imagenes/logo-bancolombia.jpg\",\r\n        username:\"Bancolombia\",\r\n    },\r\n\r\n\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data3);\n\n//# sourceURL=webpack://linkedin/./src/Components/data3.js?");

/***/ }),

/***/ "./src/Components/export.js":
/*!**********************************!*\
  !*** ./src/Components/export.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreatePost\": () => (/* reexport safe */ _createPost_createPost__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"DashboardPost\": () => (/* reexport safe */ _dashboardPost_dashboardPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"FollowRecompfp\": () => (/* reexport safe */ _followRecompfp_followRecompfp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Nav\": () => (/* reexport safe */ _nav_nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"SidebarIcon\": () => (/* reexport safe */ _sidebarIcon_sidebarIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _dashboardPost_dashboardPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboardPost/dashboardPost */ \"./src/Components/dashboardPost/dashboardPost.js\");\n/* harmony import */ var _sidebarIcon_sidebarIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarIcon/sidebarIcon */ \"./src/Components/sidebarIcon/sidebarIcon.js\");\n/* harmony import */ var _followRecompfp_followRecompfp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./followRecompfp/followRecompfp */ \"./src/Components/followRecompfp/followRecompfp.js\");\n/* harmony import */ var _createPost_createPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPost/createPost */ \"./src/Components/createPost/createPost.js\");\n/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav */ \"./src/Components/nav/nav.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://linkedin/./src/Components/export.js?");

/***/ }),

/***/ "./src/Components/followRecompfp/followRecompfp.js":
/*!*********************************************************!*\
  !*** ./src/Components/followRecompfp/followRecompfp.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FollowRecompfp extends HTMLElement {\r\n\r\n    static get observedAttributes() {\r\n        return [\"userpfp\", \"username\"];\r\n    }\r\n\r\n    constructor() {\r\n        super();\r\n        this.attachShadow({ mode: \"open\" });\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render();\r\n    }\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue) {\r\n        this[propName] = newValue;\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n        this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"./styles.css\">\r\n        <img class=\"pfr\" src=\"${this.userpfp}\">\r\n        <section class=\"userRecom\">\r\n            <label>${this.username}</label>\r\n            <button>+ Seguir</button>\r\n        </section>\r\n        `;\r\n    }\r\n}\r\n\r\ncustomElements.define('follow-recompfp', FollowRecompfp);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowRecompfp);\n\n//# sourceURL=webpack://linkedin/./src/Components/followRecompfp/followRecompfp.js?");

/***/ }),

/***/ "./src/Components/nav/nav.js":
/*!***********************************!*\
  !*** ./src/Components/nav/nav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Nav extends HTMLElement{\r\n\r\n    constructor() {\r\n        super();\r\n        this.attachShadow({ mode: \"open\" });\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render();\r\n    }\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue) {\r\n        this[propName] = newValue;\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n        this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"./styles.css\">\r\n        <section class=\"buscador\">\r\n        <img id=\"in\" src=\"./imagenes/in.png\">\r\n        <input id=\"navv\" placeholder=\"search...\">\r\n        </section>`;\r\n\r\n    }\r\n}\r\n\r\ncustomElements.define('nav-post', Nav);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n//# sourceURL=webpack://linkedin/./src/Components/nav/nav.js?");

/***/ }),

/***/ "./src/Components/sidebarIcon/sidebarIcon.js":
/*!***************************************************!*\
  !*** ./src/Components/sidebarIcon/sidebarIcon.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SidebarIcon extends HTMLElement {\r\n\r\n    static get observedAttributes() {\r\n        return [\"pageicon\", \"goToLink\"];\r\n    }\r\n\r\n    constructor() {\r\n        super();\r\n        this.attachShadow({ mode: \"open\" });\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render();\r\n    }\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue) {\r\n        this[propName] = newValue;\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n        this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"./styles.css\">\r\n        <a href=\"${this.goToLink}\"> <img id=\"icon\" src=\"${this.pageicon}\"> </a>\r\n        `;\r\n    }\r\n}\r\n\r\ncustomElements.define('sidebar-icon', SidebarIcon);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarIcon);\r\n\n\n//# sourceURL=webpack://linkedin/./src/Components/sidebarIcon/sidebarIcon.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/data */ \"./src/Components/data.js\");\n/* harmony import */ var _Components_data2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/data2 */ \"./src/Components/data2.js\");\n/* harmony import */ var _Components_data3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/data3 */ \"./src/Components/data3.js\");\n/* harmony import */ var _Components_export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/export */ \"./src/Components/export.js\");\n\r\n\r\n\r\n\r\n\r\nclass AppContainer extends HTMLElement{\r\n    constructor(){\r\n        super();\r\n        this.attachShadow({mode: \"open\"})\r\n        console.log(_Components_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    };\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    };\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue) {\r\n        this[propName] = newValue;\r\n        this.render();\r\n    };\r\n\r\n    render(){\r\n\r\n                this.shadowRoot.innerHTML +=`\r\n                <nav-post></nav-post>`\r\n\r\n                this.shadowRoot.innerHTML += `\r\n                <create-post></create-post>\r\n                `\r\n                _Components_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((lkd)=>{\r\n                this.shadowRoot.innerHTML += `\r\n                <link rel=\"stylesheet\" href=\"./styles.css\">\r\n                <dashboard-post userName=\"${lkd.username}\" userPfp=\"${lkd.userpfp}\" postText=\"${lkd.posttext}\" postImage=\"${lkd.postimage}\" like=\"${lkd.like}\" coment=\"${lkd.coment}\" actu=\"${lkd.actu}\" send=\"${lkd.send}\"></dashboard-post>`\r\n            }\r\n        )\r\n    };\r\n}\r\n\r\nclass Sidebar extends HTMLElement {\r\n\r\n    static get observedAttributes() {\r\n    }\r\n\r\n    constructor() {\r\n        super();\r\n        this.attachShadow({ mode: \"open\" });\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render();\r\n    }\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue) {\r\n        this[propName] = newValue;\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n        _Components_data2__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((sb)=>{\r\n            this.shadowRoot.innerHTML += `\r\n            <sidebar-icon goToLink=\"${sb.goToLink}\" pageIcon=\"${sb.pageicon}\"></sidebar-icon>`\r\n        })\r\n    }\r\n}\r\n\r\nclass FollowRecoms extends HTMLElement {\r\n\r\n    static get observedAttributes() {\r\n    }\r\n\r\n    constructor() {\r\n        super();\r\n        this.attachShadow({ mode: \"open\" });\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render();\r\n    }\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue) {\r\n        this[propName] = newValue;\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n\r\n        _Components_data3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((fw)=>{\r\n            this.shadowRoot.innerHTML += `\r\n            <link rel=\"stylesheet\" href=\"./styles.css\">\r\n            <follow-recompfp userpfp=\"${fw.userpfp}\" username=\"${fw.username}\"></follow-recompfp>`\r\n        })\r\n    }\r\n}\r\n\r\ncustomElements.define(\"app-container\",AppContainer);\r\ncustomElements.define('my-sidebar', Sidebar);\r\ncustomElements.define('follow-recoms', FollowRecoms);\r\n\n\n//# sourceURL=webpack://linkedin/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;