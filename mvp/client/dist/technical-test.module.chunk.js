webpackJsonp(["technical-test.module"],{

/***/ "./src/app/radio-group/radio-group/radio-group.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/radio-group/radio-group/radio-group.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ number + ') ' + question.question }}</h2>\n<div [class]=\"question.style\">\n</div>\n<app-radio *ngFor=\"let option of question.options\" [option]=\"option\" (selected)=\"selectedChanged($event)\" class=\"d-block\"></app-radio>"

/***/ }),

/***/ "./src/app/radio-group/radio-group/radio-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_question__ = __webpack_require__("./src/app/core/question.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RadioGroupComponent = /** @class */ (function () {
    function RadioGroupComponent(route, api, title) {
        this.route = route;
        this.api = api;
        this.title = title;
        this.loading = true;
    }
    RadioGroupComponent.prototype.getImgStyle = function (url) {
        return "url(" + url + ")";
    };
    RadioGroupComponent.prototype.selectedChanged = function (event) {
        this.question.selectionedOption = event;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__core_question__["a" /* Question */])
    ], RadioGroupComponent.prototype, "question", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], RadioGroupComponent.prototype, "number", void 0);
    RadioGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-radio-group',
            template: __webpack_require__("./src/app/radio-group/radio-group/radio-group.component.html"),
            styles: [__webpack_require__("./src/app/radio-group/radio-group/radio-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]])
    ], RadioGroupComponent);
    return RadioGroupComponent;
}());



/***/ }),

/***/ "./src/app/radio/radio/radio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/radio/radio/radio.component.html":
/***/ (function(module, exports) {

module.exports = "<label>\n        <input type='radio' \n            #myRadio\n            [name]=\"option.group\"  \n            [value]=\"option.value\"\n            (click)=\"onRadioClicked(myRadio)\">\n    {{option.text}}\n</label>"

/***/ }),

/***/ "./src/app/radio/radio/radio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_option__ = __webpack_require__("./src/app/core/option.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RadioComponent = /** @class */ (function () {
    function RadioComponent(route, api, title) {
        this.route = route;
        this.api = api;
        this.title = title;
        this.loading = true;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    RadioComponent.prototype.getImgStyle = function (url) {
        return "url(" + url + ")";
    };
    RadioComponent.prototype.onRadioClicked = function (radio) {
        this.selected.emit(radio.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__core_option__["a" /* Option */])
    ], RadioComponent.prototype, "option", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], RadioComponent.prototype, "selected", void 0);
    RadioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-radio',
            template: __webpack_require__("./src/app/radio/radio/radio.component.html"),
            styles: [__webpack_require__("./src/app/radio/radio/radio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]])
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/technical-test/technical-test.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalTestModule", function() { return TechnicalTestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__technical_test_technical_test_component__ = __webpack_require__("./src/app/technical-test/technical-test/technical-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__radio_group_radio_group_radio_group_component__ = __webpack_require__("./src/app/radio-group/radio-group/radio-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radio_radio_radio_component__ = __webpack_require__("./src/app/radio/radio/radio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TECHNICALTEST_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__technical_test_technical_test_component__["a" /* TechnicalTestComponent */]
    }
];
var TechnicalTestModule = /** @class */ (function () {
    function TechnicalTestModule() {
    }
    TechnicalTestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(TECHNICALTEST_ROUTES)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__technical_test_technical_test_component__["a" /* TechnicalTestComponent */],
                __WEBPACK_IMPORTED_MODULE_5__radio_group_radio_group_radio_group_component__["a" /* RadioGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__radio_radio_radio_component__["a" /* RadioComponent */]
            ]
        })
    ], TechnicalTestModule);
    return TechnicalTestModule;
}());



/***/ }),

/***/ "./src/app/technical-test/technical-test/technical-test.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/technical-test/technical-test/technical-test.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Technical Test</h1>\r\n<form (submit)=\"submiteTechnicalTest()\">\r\n<app-radio-group *ngFor=\"let question of questionList.questions; let i = index\" [question]=\"question\"  [number]=\"i+1\"></app-radio-group>\r\n<button type=\"submit\" class=\"btn btn-sucess\">Enviar</button>\r\n</form>"

/***/ }),

/***/ "./src/app/technical-test/technical-test/technical-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_api_service__ = __webpack_require__("./src/app/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TechnicalTestComponent = /** @class */ (function () {
    function TechnicalTestComponent(route, api, title) {
        this.route = route;
        this.api = api;
        this.title = title;
        this.loading = true;
    }
    TechnicalTestComponent.prototype.ngOnInit = function () {
        this.questionList = this.api.getQuestions$();
    };
    TechnicalTestComponent.prototype._onNext = function (val) {
        this.loading = false;
    };
    TechnicalTestComponent.prototype._onError = function (err, caught) {
        this.loading = false;
        this.error = true;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('An error occurred fetching detail data for this dog.');
    };
    TechnicalTestComponent.prototype.getPageTitle = function (question) {
        //const pageTitle = `#${question.question}: ${question.answer}`;
        //this.title.setTitle(pageTitle);
        //return pageTitle;
        return this.title.getTitle();
    };
    TechnicalTestComponent.prototype.getImgStyle = function (url) {
        return "url(" + url + ")";
    };
    TechnicalTestComponent.prototype.submiteTechnicalTest = function () {
        var valid = true;
        this.questionList.questions.forEach(function (q) {
            if (q.selectionedOption == -1) {
                q.style = 'required';
                valid = false;
            }
            else
                q.style = '';
        });
        if (valid) {
            var score = this.questionList.calculateScore();
            alert(score.message);
            this.api.saveQuestions();
        }
    };
    TechnicalTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-technical-test',
            template: __webpack_require__("./src/app/technical-test/technical-test/technical-test.component.html"),
            styles: [__webpack_require__("./src/app/technical-test/technical-test/technical-test.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__core_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]])
    ], TechnicalTestComponent);
    return TechnicalTestComponent;
}());



/***/ })

});
//# sourceMappingURL=technical-test.module.chunk.js.map