webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n\n  <p>\n    From: {{range.fromDate|date}} To: {{range.toDate|date}} \n  </p>\n\n  <p>\n    <ngx-drp (selectedDateRangeChanged)=\"updateRange($event)\" [options]=\"options\"></ngx-drp>\n  </p>\n\n\n</div>\n\n"

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
        this.range = { fromDate: new Date(), toDate: new Date() };
        this.presets = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var today = new Date();
        var fromMin = new Date(today.getFullYear(), today.getMonth() - 2, 1);
        var fromMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        var toMin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        var toMax = new Date(today.getFullYear(), today.getMonth() + 2, 0);
        this.setupPresets();
        this.options = {
            presets: this.presets,
            format: 'longDate',
            range: { fromDate: today, toDate: today },
        };
    };
    AppComponent.prototype.updateRange = function (range) {
        this.range = range;
    };
    AppComponent.prototype.setupPresets = function () {
        var backDate = function (numOfDays) {
            var today = new Date();
            return new Date(today.setDate(today.getDate() - numOfDays));
        };
        var today = new Date();
        var yesterday = backDate(1);
        var minus7 = backDate(7);
        var minus30 = backDate(30);
        var currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        var currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        var lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        var lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
        this.presets = [
            { presetLabel: "Yesterday", range: { fromDate: yesterday, toDate: today } },
            { presetLabel: "Last 7 Days", range: { fromDate: minus7, toDate: today } },
            { presetLabel: "Last 30 Days", range: { fromDate: minus30, toDate: today } },
            { presetLabel: "This Month", range: { fromDate: currMonthStart, toDate: currMonthEnd } },
            { presetLabel: "Last Month", range: { fromDate: lastMonthStart, toDate: lastMonthEnd } }
        ];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_drp_ngx_drp_module__ = __webpack_require__("./src/app/ngx-drp/ngx-drp.module.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_drp_ngx_drp_module__["a" /* NgxDrpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            providers: [{ provide: Date, useValue: new Date() }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ngx-drp/calendar-wrapper/calendar-wrapper.component.css":
/***/ (function(module, exports) {

module.exports = ".ngx-drp-date-label {\n    background: #fafafa;\n    margin: 15px;\n    padding: 4px 2px 4px 2px;\n    width: 100%;\n    font-size: 14px;\n    font-weight: 500;\n}\n\n.mat-drp-selected-date-label {\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n    color: rgba(0,0,0,.38);\n    padding-left: 5%;\n}\n\n/* .mat-calendar {\n    width: 296px;\n    height: 354px;\n} */\n"

/***/ }),

/***/ "./src/app/ngx-drp/calendar-wrapper/calendar-wrapper.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <!-- <mat-divider></mat-divider> -->\n  <span class=\"ngx-drp-date-label\">\n    <label>{{prefix}}</label>\n    <label class=\"mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\n  </span>\n  <!-- <mat-divider></mat-divider> -->\n\n  <mat-calendar \n    [startAt]=\"selectedDate\"\n    [selected]=\"selectedDate\"\n    [minDate]=\"minDate\"\n    [maxDate]=\"maxDate\"\n    (selectedChange)=\"onSelectedChange($event)\"\n    (yearSelected)=\"onYearSelected($event)\"\n    (_userSelection)=\"onUserSelection($event)\"\n    [dateFilter]=\"weekendFilter\">\n  </mat-calendar>\n\n</div>"

/***/ }),

/***/ "./src/app/ngx-drp/calendar-wrapper/calendar-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_store_service__ = __webpack_require__("./src/app/ngx-drp/services/config-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarWrapperComponent = /** @class */ (function () {
    function CalendarWrapperComponent(configStore) {
        this.configStore = configStore;
        this.selectedDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.weekendFilter = function (d) { return true; };
        this.dateFormat = configStore.ngxDropOptions.format;
        if (configStore.ngxDropOptions.excludeWeekends) {
            this.weekendFilter = function (d) {
                var day = d.getDay();
                return day !== 0 && day !== 6;
            };
        }
    }
    CalendarWrapperComponent.prototype.ngOnChanges = function (changes) {
        // Necessary to force view refresh
        this.matCalendar._activeDate = changes.selectedDate.currentValue;
    };
    CalendarWrapperComponent.prototype.onSelectedChange = function (date) {
        this.selectedDateChange.emit(date);
    };
    CalendarWrapperComponent.prototype.onYearSelected = function (e) { };
    CalendarWrapperComponent.prototype.onUserSelection = function (e) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_datepicker__["a" /* MatCalendar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material_datepicker__["a" /* MatCalendar */])
    ], CalendarWrapperComponent.prototype, "matCalendar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CalendarWrapperComponent.prototype, "selectedDateChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Date)
    ], CalendarWrapperComponent.prototype, "selectedDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], CalendarWrapperComponent.prototype, "prefix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Date)
    ], CalendarWrapperComponent.prototype, "minDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Date)
    ], CalendarWrapperComponent.prototype, "maxDate", void 0);
    CalendarWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'calendar-wrapper',
            template: __webpack_require__("./src/app/ngx-drp/calendar-wrapper/calendar-wrapper.component.html"),
            styles: [__webpack_require__("./src/app/ngx-drp/calendar-wrapper/calendar-wrapper.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_config_store_service__["a" /* ConfigStoreService */]])
    ], CalendarWrapperComponent);
    return CalendarWrapperComponent;
}());



/***/ }),

/***/ "./src/app/ngx-drp/ngx-drp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxDrpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_drp_ngx_drp_component__ = __webpack_require__("./src/app/ngx-drp/ngx-drp/ngx-drp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_range_component__ = __webpack_require__("./src/app/ngx-drp/range/range.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_wrapper_calendar_wrapper_component__ = __webpack_require__("./src/app/ngx-drp/calendar-wrapper/calendar-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__presets_presets_component__ = __webpack_require__("./src/app/ngx-drp/presets/presets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_calendar_overlay_service__ = __webpack_require__("./src/app/ngx-drp/services/calendar-overlay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_range_store_service__ = __webpack_require__("./src/app/ngx-drp/services/range-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_config_store_service__ = __webpack_require__("./src/app/ngx-drp/services/config-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var NgxDrpModule = /** @class */ (function () {
    function NgxDrpModule() {
    }
    NgxDrpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_datepicker__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_core__["f" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_cdk_overlay__["d" /* OverlayModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_drp_ngx_drp_component__["a" /* NgxDrpComponent */],
                __WEBPACK_IMPORTED_MODULE_4__calendar_wrapper_calendar_wrapper_component__["a" /* CalendarWrapperComponent */],
                __WEBPACK_IMPORTED_MODULE_3__range_range_component__["a" /* RangeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__presets_presets_component__["a" /* PresetsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_calendar_overlay_service__["a" /* CalendarOverlayService */],
                __WEBPACK_IMPORTED_MODULE_7__services_range_store_service__["a" /* RangeStoreService */],
                __WEBPACK_IMPORTED_MODULE_18__services_config_store_service__["a" /* ConfigStoreService */],
                { provide: Date, useValue: new Date() }
            ],
            //bootstrap: [NgxDrpComponent],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__range_range_component__["a" /* RangeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ngx_drp_ngx_drp_component__["a" /* NgxDrpComponent */]]
        })
    ], NgxDrpModule);
    return NgxDrpModule;
}());



/***/ }),

/***/ "./src/app/ngx-drp/ngx-drp/ngx-drp.component.css":
/***/ (function(module, exports) {

module.exports = "/* .mat-drp-date-display {\n    min-width: 150px;\n    max-width: 220px;\n    width: 100%;\n} */\n\n.mat-drp-date-input {\n    text-overflow: ellipsis;\n    color: royalblue;\n}"

/***/ }),

/***/ "./src/app/ngx-drp/ngx-drp/ngx-drp.component.html":
/***/ (function(module, exports) {

module.exports = "<div> \n  \n  <mat-form-field class=\"mat-drp-date-display\">\n    <input class=\"mat-drp-date-input\"\n          matInput placeholder=\"Choose a date\"\n          [value]=\"selectedDateRange\"\n          [matTooltip]=\"selectedDateRange\"\n          #calendarInput >\n    <mat-icon matSuffix \n          svgIcon=\"ngx-calendar\"\n          (click)=\"openCalendar($event)\">\n    </mat-icon>\n  </mat-form-field>\n  \n</div>    "

/***/ }),

/***/ "./src/app/ngx-drp/ngx-drp/ngx-drp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxDrpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calendar_overlay_service__ = __webpack_require__("./src/app/ngx-drp/services/calendar-overlay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_range_store_service__ = __webpack_require__("./src/app/ngx-drp/services/range-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_config_store_service__ = __webpack_require__("./src/app/ngx-drp/services/config-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NgxDrpComponent = /** @class */ (function () {
    function NgxDrpComponent(calendarOverlayService, rangeStoreService, configStoreService, iconRegistry, sanitizer, datePipe) {
        this.calendarOverlayService = calendarOverlayService;
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.datePipe = datePipe;
        this.selectedDateRangeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selectedDateRange = "";
        iconRegistry.addSvgIcon('ngx-calendar', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ngx-calendar.svg'));
    }
    NgxDrpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configStoreService.ngxDropOptions = this.options;
        this.$rangeUpdateSub = this.rangeStoreService.$rangeUpdate.subscribe(function (range) {
            var from = _this.formatToDateString(range.fromDate, _this.options.format);
            var to = _this.formatToDateString(range.toDate, _this.options.format);
            _this.selectedDateRange = from + " - " + to;
            _this.selectedDateRangeChanged.emit(range);
        });
    };
    NgxDrpComponent.prototype.ngOnDestroy = function () {
        this.$rangeUpdateSub.unsubscribe();
    };
    NgxDrpComponent.prototype.formatToDateString = function (date, format) {
        return this.datePipe.transform(date, format);
    };
    NgxDrpComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var x = function () { return _this.rangeStoreService.updateRange(_this.options.range.fromDate, _this.options.range.toDate); };
    };
    NgxDrpComponent.prototype.openCalendar = function (event) {
        var overlayRef = this.calendarOverlayService.open({}, this.calendarInput);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('calendarInput'),
        __metadata("design:type", Object)
    ], NgxDrpComponent.prototype, "calendarInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], NgxDrpComponent.prototype, "selectedDateRangeChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], NgxDrpComponent.prototype, "options", void 0);
    NgxDrpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-drp',
            template: __webpack_require__("./src/app/ngx-drp/ngx-drp/ngx-drp.component.html"),
            styles: [__webpack_require__("./src/app/ngx-drp/ngx-drp/ngx-drp.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_calendar_overlay_service__["a" /* CalendarOverlayService */],
            __WEBPACK_IMPORTED_MODULE_3__services_range_store_service__["a" /* RangeStoreService */],
            __WEBPACK_IMPORTED_MODULE_4__services_config_store_service__["a" /* ConfigStoreService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_icon__["b" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]])
    ], NgxDrpComponent);
    return NgxDrpComponent;
}());



/***/ }),

/***/ "./src/app/ngx-drp/presets/presets.component.css":
/***/ (function(module, exports) {

module.exports = "ul.ngx-presets-list {\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n}\n\nul.ngx-presets-list li {\n    margin: 5px 0 5px 0;\n    padding: 4%;\n    cursor: pointer;\n    background: #fafafa;\n    color: #3f51b5;\n    user-select: none;\n    -webkit-user-select: none; /* for safari & chrome browsers */\n    -moz-user-select: none; /* for mozilla browsers */\n    -ms-user-select: none; /* for IE10+ */\n}\n\nul.ngx-presets-list li:hover {\n    background: #3f51b5;\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/ngx-drp/presets/presets.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul class=\"ngx-presets-list\">\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\n  </ul>\n  <!-- <div *ngFor=\"let preset of presets\">\n    <button mat-button color=\"primary\" style=\"width:100%\" (click)=\"setPresetPeriod(preset)\">{{preset.presetLabel}}</button>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/ngx-drp/presets/presets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresetsComponent; });
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

var PresetsComponent = /** @class */ (function () {
    function PresetsComponent() {
        this.presetChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PresetsComponent.prototype.ngOnInit = function () { };
    PresetsComponent.prototype.setPresetPeriod = function (event) {
        this.presetChanged.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], PresetsComponent.prototype, "presets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], PresetsComponent.prototype, "presetChanged", void 0);
    PresetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mat-drp-presets',
            template: __webpack_require__("./src/app/ngx-drp/presets/presets.component.html"),
            styles: [__webpack_require__("./src/app/ngx-drp/presets/presets.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], PresetsComponent);
    return PresetsComponent;
}());



/***/ }),

/***/ "./src/app/ngx-drp/range/range.component.css":
/***/ (function(module, exports) {

module.exports = ".calendar-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    min-width: 650px;\n    height: 300px;\n}\n\n.calendar-item {\n    -ms-flex-preferred-size: 33.33%;\n        flex-basis: 33.33%;\n    min-width: 210px;\n    padding: 1em;\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n}\n\n.mat-drp-menu {\n    height: 100%;\n}\n\n.mat-drp-controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin: 10% auto;\n}"

/***/ }),

/***/ "./src/app/ngx-drp/range/range.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-container\">\n\n  <div class=\"calendar-item\">\n    <calendar-wrapper \n    [prefix]=\"'FROM:'\" \n    [selectedDate]=\"fromDate\"\n    [minDate]=\"fromMinDate\"\n    [maxDate]=\"fromMaxDate\"\n    (selectedDateChange)=\"updateFromDate($event)\">\n  </calendar-wrapper>\n  </div>\n  <div class=\"calendar-item\">\n    <calendar-wrapper \n    [prefix]=\"'TO:'\" \n    [selectedDate]=\"toDate\"\n    [minDate]=\"toMinDate\"\n    [maxDate]=\"toMaxDate\" \n    (selectedDateChange)=\"updateToDate($event)\">\n  </calendar-wrapper>\n  </div>\n  <div class=\"calendar-item\">\n    <div class=\"mat-drp-menu\">\n      <mat-drp-presets [presets]=\"presets\" (presetChanged)=\"updateRangeByPreset($event)\"></mat-drp-presets>\n      <div class=\"mat-drp-controls\">\n        <button mat-button color=\"primary\" (click)=\"applyNewDates($event)\">Apply</button>\n        <button mat-button (click)=\"discardNewDates($event)\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ngx-drp/range/range.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_range_store_service__ = __webpack_require__("./src/app/ngx-drp/services/range-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_store_service__ = __webpack_require__("./src/app/ngx-drp/services/config-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RangeComponent = /** @class */ (function () {
    function RangeComponent(rangeStoreService, configStoreService, overlayRef) {
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.overlayRef = overlayRef;
        this.presets = [];
    }
    RangeComponent.prototype.ngOnInit = function () {
        this.fromDate = this.rangeStoreService.fromDate;
        this.toDate = this.rangeStoreService.toDate;
        this.presets = this.configStoreService.ngxDropOptions.presets;
        (_a = this.configStoreService.ngxDropOptions.fromMinMax, this.fromMinDate = _a.fromDate, this.fromMaxDate = _a.toDate);
        (_b = this.configStoreService.ngxDropOptions.toMinMax, this.toMinDate = _b.fromDate, this.toMaxDate = _b.toDate);
        var _a, _b;
    };
    RangeComponent.prototype.updateFromDate = function (date) {
        this.fromDate = date;
    };
    RangeComponent.prototype.updateToDate = function (date) {
        this.toDate = date;
    };
    RangeComponent.prototype.updateRangeByPreset = function (presetItem) {
        //this.rangeStoreService.updateRange(presetItem.range.fromDate, presetItem.range.toDate);
        this.updateFromDate(presetItem.range.fromDate);
        this.updateToDate(presetItem.range.toDate);
    };
    RangeComponent.prototype.applyNewDates = function (e) {
        this.rangeStoreService.updateRange(this.fromDate, this.toDate);
        this.disposeOverLay();
    };
    RangeComponent.prototype.discardNewDates = function (e) {
        this.rangeStoreService.updateRange();
        this.disposeOverLay();
    };
    RangeComponent.prototype.disposeOverLay = function () {
        this.overlayRef.dispose();
    };
    RangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mat-drp-range',
            template: __webpack_require__("./src/app/ngx-drp/range/range.component.html"),
            styles: [__webpack_require__("./src/app/ngx-drp/range/range.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_range_store_service__["a" /* RangeStoreService */],
            __WEBPACK_IMPORTED_MODULE_3__services_config_store_service__["a" /* ConfigStoreService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_cdk_overlay__["e" /* OverlayRef */]])
    ], RangeComponent);
    return RangeComponent;
}());



/***/ }),

/***/ "./src/app/ngx-drp/services/calendar-overlay.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarOverlayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_range_component__ = __webpack_require__("./src/app/ngx-drp/range/range.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DEFAULT_CONFIG = {
    panelClass: 'dark-backdrop',
    hasBackdrop: true,
    backdropClass: 'calendar-dialog-backdrop',
    shouldCloseOnBackdropClick: true
};
var CalendarOverlayService = /** @class */ (function () {
    function CalendarOverlayService(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    CalendarOverlayService.prototype.open = function (config, hostElemRef) {
        if (config === void 0) { config = {}; }
        this.hostElemRef = hostElemRef;
        var overlayConfig = __assign({}, DEFAULT_CONFIG, config);
        var overlayRef = this.createOverlay(overlayConfig);
        var portalInjector = this.createInjector(overlayRef);
        var calendarPortal = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_portal__["c" /* ComponentPortal */](__WEBPACK_IMPORTED_MODULE_3__range_range_component__["a" /* RangeComponent */], null, portalInjector);
        overlayRef.attach(calendarPortal);
        overlayRef.backdropClick()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* takeWhile */])(function () { return overlayConfig.shouldCloseOnBackdropClick; }))
            .subscribe(function () { return overlayRef.dispose(); });
        return overlayRef;
    };
    CalendarOverlayService.prototype.createOverlay = function (config) {
        var overlayConfig = this.getOverlayConfig(config);
        return this.overlay.create(overlayConfig);
    };
    CalendarOverlayService.prototype.getOverlayConfig = function (config) {
        var positionStrategy = this.overlay.position()
            .connectedTo(this.hostElemRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }).withOffsetY(8);
        var overlayConfig = new __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["b" /* OverlayConfig */]({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
    CalendarOverlayService.prototype.createInjector = function (overlayRef) {
        var injectionTokens = new WeakMap();
        injectionTokens.set(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["e" /* OverlayRef */], overlayRef);
        return new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_portal__["e" /* PortalInjector */](this.injector, injectionTokens);
    };
    CalendarOverlayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["a" /* Overlay */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */]])
    ], CalendarOverlayService);
    return CalendarOverlayService;
}());



/***/ }),

/***/ "./src/app/ngx-drp/services/config-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigStoreService = /** @class */ (function () {
    function ConfigStoreService() {
        this.defaultOptions = {
            excludeWeekends: false,
            locale: 'en-US',
            fromMinMax: { fromDate: null, toDate: null },
            toMinMax: { fromDate: null, toDate: null }
        };
    }
    Object.defineProperty(ConfigStoreService.prototype, "calendarDialogConfig", {
        get: function () {
            return this._calendarDialogConfig;
        },
        set: function (config) {
            this._calendarDialogConfig = config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigStoreService.prototype, "ngxDropOptions", {
        get: function () {
            return this._ngxDrpOptions;
        },
        set: function (options) {
            this._ngxDrpOptions = __assign({}, this.defaultOptions, options);
        },
        enumerable: true,
        configurable: true
    });
    ConfigStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigStoreService);
    return ConfigStoreService;
}());



/***/ }),

/***/ "./src/app/ngx-drp/services/range-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RangeStoreService = /** @class */ (function () {
    function RangeStoreService() {
        this.$rangeUpdate = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    Object.defineProperty(RangeStoreService.prototype, "fromDate", {
        /* set fromDate(fromDate:Date) {
          this._fromDate = fromDate;
        } */
        get: function () {
            return this._fromDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RangeStoreService.prototype, "toDate", {
        /* set toDate(toDate:Date) {
          this._toDate = toDate;
        } */
        get: function () {
            return this._toDate;
        },
        enumerable: true,
        configurable: true
    });
    RangeStoreService.prototype.updateRange = function (fromDate, toDate) {
        if (fromDate === void 0) { fromDate = this._fromDate; }
        if (toDate === void 0) { toDate = this._toDate; }
        this._fromDate = fromDate;
        this._toDate = toDate;
        this.$rangeUpdate.next({ fromDate: this._fromDate, toDate: this._toDate });
    };
    RangeStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RangeStoreService);
    return RangeStoreService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
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