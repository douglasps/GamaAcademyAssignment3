webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login.module"
	],
	"./technical-test/technical-test.module": [
		"./src/app/technical-test/technical-test.module.ts",
		"technical-test.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: '',
        loadChildren: './technical-test/technical-test.module#TechnicalTestModule',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__auth_auth_module__["a" /* AuthModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_token__ = __webpack_require__("./src/app/auth/auth.token.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, api, token) {
        this.router = router;
        this.api = api;
        this.token = token;
    }
    Object.defineProperty(AuthGuard.prototype, "loggedIn", {
        get: function () {
            return this.token.token != null;
        },
        enumerable: true,
        configurable: true
    });
    AuthGuard.prototype.logout = function () {
        this.token.token = null;
        this.router.navigateByUrl('login');
    };
    AuthGuard.prototype.autenticate = function (email, password) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.autenticate(email, password)
                .then(function (autenticated) {
                if (autenticated) {
                    _this.token.token = { email: email };
                    _this.router.navigateByUrl('/');
                }
                resolve(autenticated);
            });
        });
    };
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.loggedIn) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_token__["a" /* AuthToken */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function () {
        return {
            ngModule: AuthModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */]
            ]
        };
    };
    AuthModule = AuthModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ]
        })
    ], AuthModule);
    return AuthModule;
    var AuthModule_1;
}());



/***/ }),

/***/ "./src/app/auth/auth.token.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthToken; });
var AuthToken = /** @class */ (function () {
    function AuthToken() {
    }
    Object.defineProperty(AuthToken.prototype, "token", {
        get: function () {
            var token = localStorage.getItem('token');
            return token != null ? JSON.parse(token) : null;
        },
        set: function (token) {
            localStorage.setItem('token', JSON.stringify(token));
        },
        enumerable: true,
        configurable: true
    });
    return AuthToken;
}());



/***/ }),

/***/ "./src/app/core/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_token__ = __webpack_require__("./src/app/auth/auth.token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_lead__ = __webpack_require__("./src/app/core/lead.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_question__ = __webpack_require__("./src/app/core/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_questionList__ = __webpack_require__("./src/app/core/questionList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_option__ = __webpack_require__("./src/app/core/option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_dal_service__ = __webpack_require__("./src/app/core/base-dal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ApiService = /** @class */ (function () {
    function ApiService(http, token) {
        this.http = http;
        this.token = token;
        this._API = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiRoot + "api";
        this._dal = new __WEBPACK_IMPORTED_MODULE_9__base_dal_service__["a" /* BaseDal */]('mvp-questions', __WEBPACK_IMPORTED_MODULE_7__core_questionList__["a" /* QuestionList */], 'email', 'questions');
        this._dalLead = new __WEBPACK_IMPORTED_MODULE_9__base_dal_service__["a" /* BaseDal */]('leads', __WEBPACK_IMPORTED_MODULE_5__core_lead__["a" /* Lead */], 'fullName', 'email', 'datetime', 'phone', 'password');
        this._generateQuestionList();
    }
    ApiService.prototype.autenticate = function (email, password) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._dalLead.getAll()
                .then(function (leads) {
                if (leads == null) {
                    resolve(false);
                    return;
                }
                var logins = leads.filter(function (l) { return l.email == email && l.password == password; });
                resolve(logins.length > 0);
            });
        });
    };
    ApiService.prototype.saveQuestions = function () {
        this._dal.save(this._questionList);
    };
    ApiService.prototype.getQuestions$ = function () {
        return this._questionList;
    };
    ApiService.prototype._generateQuestionList = function () {
        var group = 0;
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('Lead são as pessoas e empresas interessadas em um determinado produto ou serviço?', 0, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Certo', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Errado', 1, "" + group)
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('Qual da opções com estágios de vendas a seguir estão na ordem correta?', 1, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Conexão -> qualificação -> proposta -> demo -> fechamento', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Conexão -> qualificação -> demo -> propostas -> fechamento', 1, "" + group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Conexão -> proposta -> demo -> qualificação -> fechamento', 2, "" + group)
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('A cadência high touch é ligada às pesquisas breves e interações leves?', 1, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Certo', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Errado', 1, "" + group)
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('Qual das alternativas abaixo fazem parte da cadência de atividades?', 0, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Pesquisa e prospecção', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Pesquisa e conexão', 1, "" + group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Conexão e Solução ideal', 2, "" + group),
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('Qual a cadência equivalente ao quadrante abaixo?', 2, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Medium touch', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Low touch', 1, "" + group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('High touch', 2, "" + group),
            ], 'img-cadencia'),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('Quanto aos leads, o segmento que diz respeito aos seeds é:', 1, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Ações de marketing, uso das redes sociais', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Orgânicos, com indicações', 1, "" + group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Outbound, perfil de cliente ideal', 2, "" + group),
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('A sigla ICP significa Ideal Costumer Profile?', 0, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Certo', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Errado', 1, "" + group)
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('Quais são os três principais tipos de vendedores?', 2, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Carismático, sistemático e de processos', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Sistemático, ativista e motivador', 1, "" + group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Carismático, ativista e de processos', 2, "" + group),
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('Hunters são profissionais que prospectam, entram em contato e realizam parte da qualificação de leads?', 0, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Certo', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Errado', 1, "" + group)
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('Buyer Personas é o público alvo que se deseja atingir.', 1, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Certo', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Errado', 1, "" + group)
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('O Elevator Pitch é poder criar um discurso de convencimento que funcione e seja breve.', 0, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Certo', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Errado', 1, "" + group)
            ]),
            new __WEBPACK_IMPORTED_MODULE_6__core_question__["a" /* Question */]('Os passo a passo de uma call plan é organização da agenda, definição de objetivos e definição do sucesso.', 0, [
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Certo', 0, "" + ++group),
                new __WEBPACK_IMPORTED_MODULE_8__core_option__["a" /* Option */]('Errado', 1, "" + group)
            ]),
        ];
        var token = this.token.token;
        var email;
        if (token)
            email = token.email;
        this._questionList = new __WEBPACK_IMPORTED_MODULE_7__core_questionList__["a" /* QuestionList */](email, questions);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_token__["a" /* AuthToken */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/base-dal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_auth__ = __webpack_require__("./node_modules/firebase/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_database__ = __webpack_require__("./node_modules/firebase/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_database__);



var BaseDal = /** @class */ (function () {
    function BaseDal(strReference, typeofModel) {
        var fields = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            fields[_i - 2] = arguments[_i];
        }
        var config = {
            apiKey: "AIzaSyCHQ0WOTYQWjZqHqp47yQt9Vc1Qh_bXdaY",
            authDomain: "hustler-s-league.firebaseapp.com",
            databaseURL: "https://hustler-s-league.firebaseio.com",
            projectId: "hustler-s-league",
            storageBucket: "hustler-s-league.appspot.com",
            messagingSenderId: "725127233905"
        };
        if (!__WEBPACK_IMPORTED_MODULE_0_firebase_app__["apps"].length)
            __WEBPACK_IMPORTED_MODULE_0_firebase_app__["initializeApp"](config);
        this._reference = __WEBPACK_IMPORTED_MODULE_0_firebase_app__["database"]().ref(strReference);
        this._typeofModel = typeofModel;
        this._fields = fields;
    }
    BaseDal.prototype.save = function (model) {
        var obj = {};
        this._fields.forEach(function (prop) { return obj[prop] = JSON.stringify(model[prop]); }, this);
        return this._reference.push(obj).key;
    };
    BaseDal.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._reference.once("value", function (data) { return resolve(_this._convertData(data)); });
        });
    };
    BaseDal.prototype._factoryObjects = function (class_, args) {
        return new (class_.bind.apply(class_, [void 0].concat(args)))();
    };
    BaseDal.prototype._convertData = function (data) {
        var _this = this;
        if (!data || !data.val())
            return;
        var models = data.val();
        var keys = Object.keys(models);
        var list = [];
        keys.forEach(function (key) {
            var item = models[key];
            var args = _this._fields.map(function (f) { return JSON.parse(item[f]); });
            list.push(_this._factoryObjects(_this._typeofModel, args));
        }, this);
        return list;
    };
    return BaseDal;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loading_component__ = __webpack_require__("./src/app/core/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_component__ = __webpack_require__("./src/app/core/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_token__ = __webpack_require__("./src/app/auth/auth.token.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_7__api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_10__auth_auth_token__["a" /* AuthToken */]
            ]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__error_component__["a" /* ErrorComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__error_component__["a" /* ErrorComponent */]
            ]
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: "\n    <p class=\"alert alert-danger\">\n      <strong>Error:</strong> There was an error retrieving data.\n    </p>\n  "
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav justify-content-between mt-2 mx-2 mb-3\">\r\n  <div class=\"d-flex align-items-center\">\r\n  </div>\r\n  <div class=\"ml-3\">\r\n    <ng-template [ngIf]=\"token.token\">\r\n      <small>{{ token.token.email }}</small>\r\n      <button\r\n      class=\"btn btn-danger btn-sm\"\r\n      (click)=\"logout()\">Log Out</button>\r\n    </ng-template>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_token__ = __webpack_require__("./src/app/auth/auth.token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(token, guard) {
        this.token = token;
        this.guard = guard;
    }
    HeaderComponent.prototype.logout = function () {
        this.guard.logout();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/header/header.component.html"),
            styles: ["\n    img {\n      border-radius: 100px;\n      width: 30px;\n    }\n    .loading { line-height: 31px; }\n    .home-link { color: #212529; }\n    .home-link:hover { text-decoration: none; }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_token__["a" /* AuthToken */], __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/lead.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lead; });
var Lead = /** @class */ (function () {
    function Lead(fullName, email, datetime, phone, password) {
        this._fullName = fullName;
        this._email = email;
        this._datetime = datetime;
        this._phone = phone;
        this._password = password;
        Object.freeze(this);
    }
    Object.defineProperty(Lead.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lead.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lead.prototype, "datetime", {
        get: function () {
            return new Date(this._datetime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lead.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lead.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    return Lead;
}());



/***/ }),

/***/ "./src/app/core/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "inline", void 0);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: "\n    <div [ngClass]=\"{'inline': inline, 'text-center': !inline, 'py-2': !inline }\">\n      <img src=\"/assets/images/loading.svg\">\n    </div>\n  ",
            styles: ["\n    .inline {\n      display: inline-block;\n    }\n    img {\n      height: 80px;\n      width: 80px;\n    }\n    .inline img {\n      height: 24px;\n      width: 24px;\n    }\n  "]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/core/option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = /** @class */ (function () {
    function Option(text, value, group) {
        this.text = text;
        this.value = value;
        this.group = group;
    }
    return Option;
}());



/***/ }),

/***/ "./src/app/core/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(question, rightOption, options, style) {
        if (style === void 0) { style = null; }
        this.selectionedOption = -1;
        this.question = question;
        this.rightOption = rightOption;
        this.options = options;
        this.style = style;
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/core/questionList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionList; });
/* unused harmony export Score */
var QuestionList = /** @class */ (function () {
    function QuestionList(email, questions) {
        this.email = email;
        this.questions = questions;
    }
    QuestionList.prototype.calculateScore = function () {
        var score = this.questions.reduce(function (count, question) {
            return count += question.rightOption == question.selectionedOption ? 1 : 0;
        }, 0);
        return new Score(score, this.questions.length);
    };
    return QuestionList;
}());

var Score = /** @class */ (function () {
    function Score(score, total) {
        this.score = score;
        var level = score > 9 ? 'Expert'
            : score > 6 ? 'Avançado'
                : score > 3 ? 'Intermediário'
                    : 'Iniciante';
        this.message = "O seu n\u00EDvel \u00E9 \"" + level + "\" (" + score + "/" + total + ")";
    }
    return Score;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var FB_PROJECT_ID = 'hustler-s-league-dev';
var environment = {
    production: false,
    auth: {
        clientId: 'wmf8JtTLmD9pooMgM2pOlF63fnDzlB2t',
        clientDomain: 'hrtechsolutions.auth0.com',
        audience: 'http://localhost:1337/',
        redirect: 'http://localhost:4200/callback',
        scope: 'openid profile email'
    },
    firebase: {
        apiKey: "AIzaSyCHQ0WOTYQWjZqHqp47yQt9Vc1Qh_bXdaY",
        authDomain: "hustler-s-league.firebaseapp.com",
        databaseURL: "https://hustler-s-league.firebaseio.com",
        projectId: "hustler-s-league",
        storageBucket: "hustler-s-league.appspot.com",
        messagingSenderId: "725127233905"
        // apiKey: 'AIzaSyBvJXL0K2XrhG7J-IaQ9JdXl1PMCzbR_Pg',
        // authDomain: `${FB_PROJECT_ID}.firebaseapp.com`,
        // databaseURL: `https://${FB_PROJECT_ID}.firebaseio.com`,
        // projectId: FB_PROJECT_ID,
        // storageBucket: `${FB_PROJECT_ID}.appspot.com`,
        // messagingSenderId: '1075022643383'
    },
    apiRoot: 'http://localhost:1337/' // e.g., http://localhost:1337/ (include trailing slash)
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map