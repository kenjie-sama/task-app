"use strict";
(self["webpackChunktask_app"] = self["webpackChunktask_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/counter/counter.component */ 7741);
/* harmony import */ var _components_tasks_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tasks/list/task-list.component */ 7505);
/* harmony import */ var _components_tasks_input_task_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tasks/input/task-input.component */ 4310);






class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 7,
  vars: 0,
  consts: [[1, "space"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 0)(3, "app-task-input")(4, "app-task-list")(5, "app-counter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-footer");
    }
  },
  dependencies: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__.CounterComponent, _components_tasks_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__.TaskListComponent, _components_tasks_input_task_input_component__WEBPACK_IMPORTED_MODULE_4__.TaskInputComponent],
  styles: ["div.space[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSFAlMjBMQVBUT1AvRGVza3RvcC9LZW4ncyUyMEZpbGVzL0ZpbGVzL1dlYnNpdGUvQW5ndWxhclByYWN0L3Rhc2stYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnNwYWNlIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuIiwiZGl2LnNwYWNlIHtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4291);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/counter/counter.component */ 7741);
/* harmony import */ var _components_tasks_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tasks/list/task-list.component */ 7505);
/* harmony import */ var _components_tasks_input_task_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tasks/input/task-input.component */ 4310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _components_tasks_button_task_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tasks/button/task-button.component */ 3970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);


// Costum Modules











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_4__.CounterComponent, _components_tasks_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__.TaskListComponent, _components_tasks_input_task_input_component__WEBPACK_IMPORTED_MODULE_6__.TaskInputComponent, _components_tasks_button_task_button_component__WEBPACK_IMPORTED_MODULE_7__.TaskButtonComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule]
  });
})();

/***/ }),

/***/ 7741:
/*!*********************************************************!*\
  !*** ./src/app/components/counter/counter.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterComponent": () => (/* binding */ CounterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/logger.service */ 1273);


class CounterComponent {
  constructor(logger) {
    this.logger = logger;
    this.title = 'Counter';
    this.count = 0;
  }
  OnLogCount() {
    this.logger.WriteCount(this.count);
    this.count++;
  }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) {
  return new (t || CounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_0__.Logger));
};
CounterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CounterComponent,
  selectors: [["app-counter"]],
  decls: 7,
  vars: 3,
  consts: [[1, "container"], [3, "click"]],
  template: function CounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_5_listener() {
        return ctx.OnLogCount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.title, " Component");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.title, ": ", ctx.count, "");
    }
  },
  styles: ["div[_ngcontent-%COMP%] {\n  text-align: left;\n  color: rgb(52, 52, 52);\n  background-color: rgb(219, 219, 219);\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n  border-radius: 20px 20px;\n  font-size: 0.7em;\n  font-weight: 600;\n  color: rgb(52, 52, 52);\n  border: solid rgb(52, 52, 52);\n  background-color: transparent;\n  transition: all 0.3s;\n}\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(52, 52, 52);\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IUCUyMExBUFRPUC9EZXNrdG9wL0tlbidzJTIwRmlsZXMvRmlsZXMvV2Vic2l0ZS9Bbmd1bGFyUHJhY3QvdGFzay1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURBSTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7QUNFTiIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogcmdiKDUyLCA1MiwgNTIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOSwgMjE5KTtcclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2IoNTIsIDUyLCA1Mik7XHJcbiAgICBib3JkZXI6IHNvbGlkIHJnYig1MiwgNTIsIDUyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCA1MiwgNTIpO1xyXG4gICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZGl2IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJnYig1MiwgNTIsIDUyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xufVxuZGl2IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZGl2IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2IoNTIsIDUyLCA1Mik7XG4gIGJvcmRlcjogc29saWQgcmdiKDUyLCA1MiwgNTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5kaXYgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCA1MiwgNTIpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class FooterComponent {
  constructor() {
    this.className = 'Footer';
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 3,
  vars: 2,
  consts: [[3, "className"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.className + " container");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.className);
    }
  },
  styles: ["div[_ngcontent-%COMP%] {\n  text-align: left;\n  background-color: rgb(40, 40, 40);\n}\ndiv[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: rgb(199, 199, 199);\n  text-align: center;\n  font-size: 1em;\n  margin-bottom: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSFAlMjBMQVBUT1AvRGVza3RvcC9LZW4ncyUyMEZpbGVzL0ZpbGVzL1dlYnNpdGUvQW5ndWxhclByYWN0L3Rhc2stYXBwL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtBQ0NGO0FEQUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDRUoiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xyXG4gIGg1IHtcclxuICAgIGNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIH1cclxufVxyXG4iLCJkaXYge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XG59XG5kaXYgaDUge1xuICBjb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class NavBarComponent {
  Alert(message) {
    alert('You clicked ' + message);
  }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || NavBarComponent)();
};
NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavBarComponent,
  selectors: [["app-navbar"]],
  decls: 10,
  vars: 0,
  consts: [[3, "click"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul")(1, "li")(2, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_2_listener() {
        return ctx.Alert("Home");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li")(5, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_5_listener() {
        return ctx.Alert("About");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_8_listener() {
        return ctx.Alert("Settings");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["ul[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(37, 37, 37);\n  position: fixed;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0.3em;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(188, 188, 188);\n  display: inline-block;\n  padding: 0.3em 1em;\n  cursor: pointer;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgb(0, 0, 0);\n  color: rgb(255, 255, 255);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSFAlMjBMQVBUT1AvRGVza3RvcC9LZW4ncyUyMEZpbGVzL0ZpbGVzL1dlYnNpdGUvQW5ndWxhclByYWN0L3Rhc2stYXBwL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDTjtBRENNO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtBQ0NSIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIDAuM2VtO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogcmdiKDE4OCwgMTg4LCAxODgpO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDAuM2VtIDFlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwidWwge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDAuM2VtO1xufVxudWwgbGkgYSB7XG4gIGNvbG9yOiByZ2IoMTg4LCAxODgsIDE4OCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC4zZW0gMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG51bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 3970:
/*!******************************************************************!*\
  !*** ./src/app/components/tasks/button/task-button.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskButtonComponent": () => (/* binding */ TaskButtonComponent)
/* harmony export */ });
/* harmony import */ var src_assets_scripts_classes_StringUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/scripts/classes/StringUtil */ 5380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



class TaskButtonComponent {
  constructor() {
    this.index = 0;
    this.task = {
      title: '',
      description: '',
      date: '',
      isReminded: false
    };
  }
  GetTitle() {
    return src_assets_scripts_classes_StringUtil__WEBPACK_IMPORTED_MODULE_0__.StringUtil.ToTitleCase(this.task.title, false);
  }
  GetDescription() {
    return src_assets_scripts_classes_StringUtil__WEBPACK_IMPORTED_MODULE_0__.StringUtil.ToSentenceCase(this.task.description, false);
  }
  OnToggleTask() {
    this.task.isReminded = !this.task.isReminded;
  }
}
TaskButtonComponent.ɵfac = function TaskButtonComponent_Factory(t) {
  return new (t || TaskButtonComponent)();
};
TaskButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TaskButtonComponent,
  selectors: [["app-task-button"]],
  inputs: {
    index: "index",
    task: "task"
  },
  decls: 6,
  vars: 5,
  consts: [[3, "title", "ngClass", "dblclick"]],
  template: function TaskButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function TaskButtonComponent_Template_button_dblclick_1_listener() {
        return ctx.OnToggleTask();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.GetDescription())("ngClass", ctx.task.isReminded ? "reminded" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.index + 1, ". ", ctx.GetTitle(), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.task.date);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
  styles: ["li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 0.34em;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  font-style: italic;\n  text-align: right;\n}\n\n.reminded[_ngcontent-%COMP%] {\n  background-color: rgb(61, 61, 61);\n  color: whitesmoke;\n  outline: none;\n}\n.reminded[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgb(201, 201, 201);\n}\n.reminded[_ngcontent-%COMP%]:hover {\n  background-color: rgb(24, 24, 24);\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 1em 2.4em;\n  margin: 0;\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  border-radius: 0.8em;\n  transition: all 0.3s;\n  outline: solid 3px rgb(61, 61, 61);\n  outline-offset: -3px;\n  text-align: left;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: rgb(201, 201, 201);\n  outline: solid 3px rgba(61, 61, 61, 0);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrcy9idXR0b24vdGFzay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9IUCUyMExBUFRPUC9EZXNrdG9wL0tlbidzJTIwRmlsZXMvRmlsZXMvV2Vic2l0ZS9Bbmd1bGFyUHJhY3QvdGFzay1hcHAvc3JjL2FwcC9jb21wb25lbnRzL3Rhc2tzL2J1dHRvbi90YXNrLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7QUNDSjtBREVFO0VBQ0UsaUNBQUE7RUFDQSxhQUFBO0FDQUo7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0U7RUFDRSxvQ0FBQTtFQUNBLHNDQUFBO0FDREoiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDAuMzRlbTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5yZW1pbmRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA2MSwgNjEpO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMWVtIDIuNGVtO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgb3V0bGluZTogc29saWQgM3B4IHJnYig2MSwgNjEsIDYxKTtcclxuICBvdXRsaW5lLW9mZnNldDogLTNweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcclxuICAgIG91dGxpbmU6IHNvbGlkIDNweCByZ2JhKDYxLCA2MSwgNjEsIDApO1xyXG4gIH1cclxuICAqIHtcclxuICB9XHJcbn1cclxuIiwibGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDAuMzRlbTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yZW1pbmRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucmVtaW5kZWQgcCB7XG4gIGNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XG59XG4ucmVtaW5kZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFlbSAyLjRlbTtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBvdXRsaW5lOiBzb2xpZCAzcHggcmdiKDYxLCA2MSwgNjEpO1xuICBvdXRsaW5lLW9mZnNldDogLTNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcbiAgb3V0bGluZTogc29saWQgM3B4IHJnYmEoNjEsIDYxLCA2MSwgMCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4310:
/*!****************************************************************!*\
  !*** ./src/app/components/tasks/input/task-input.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskInputComponent": () => (/* binding */ TaskInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_assets_scripts_classes_DateString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/scripts/classes/DateString */ 6903);
/* harmony import */ var src_assets_scripts_classes_StringUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/scripts/classes/StringUtil */ 5380);
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tasks.service */ 2632);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4291);






class TaskInputComponent {
  constructor(tasks) {
    this.tasks = tasks;
    this.submitTaskEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  OnSubmit(titleComponent, descriptionComponent, dateComponent, isRemindedComponent) {
    const title = titleComponent.value.trim();
    const dsrcp = descriptionComponent.value.trim();
    console.log(title);
    console.log(dsrcp);
    if (title === '') {
      titleComponent.focus();
      return;
    }
    if (dsrcp === '') {
      descriptionComponent.focus();
      return;
    }
    if (dateComponent.value === '') {
      dateComponent.focus();
      return;
    }
    this.tasks.Tasks.push({
      title: src_assets_scripts_classes_StringUtil__WEBPACK_IMPORTED_MODULE_1__.StringUtil.ToTitleCase(title),
      description: src_assets_scripts_classes_StringUtil__WEBPACK_IMPORTED_MODULE_1__.StringUtil.ToSentenceCase(dsrcp),
      date: new src_assets_scripts_classes_DateString__WEBPACK_IMPORTED_MODULE_0__.DateString(dateComponent.valueAsDate).GetMMMDDYYYY(),
      isReminded: isRemindedComponent.checked
    });
  }
}
TaskInputComponent.ɵfac = function TaskInputComponent_Factory(t) {
  return new (t || TaskInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__.Tasks));
};
TaskInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TaskInputComponent,
  selectors: [["app-task-input"]],
  outputs: {
    submitTaskEvent: "submitTaskEvent"
  },
  decls: 25,
  vars: 0,
  consts: [["ng-style", "{ color: 'red' }"], [1, "container"], [1, "todo-list"], [1, "input-group"], ["type", "text", "placeholder", "Task Title...", "required", ""], ["taskTitle", ""], ["type", "text", "placeholder", "Task Description...", "required", ""], ["taskDescription", ""], ["type", "date", "placeholder", "Todo", "required", ""], ["taskDate", ""], ["taskReminder", ""], [1, "add-button", 3, "click"]],
  template: function TaskInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Task Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br")(8, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br")(17, "input", 8, 9)(19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-slide-toggle", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Set Reminder");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskInputComponent_Template_button_click_23_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.OnSubmit(_r0, _r1, _r2, _r3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Add Task ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggle],
  styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.space[_ngcontent-%COMP%] {\n  padding: 18px 0%;\n  width: 100%;\n  display: inline-block;\n}\n\n.todo-list[_ngcontent-%COMP%] {\n  width: 300px;\n  border-radius: 30px;\n  background-color: rgb(219, 219, 219);\n  padding: 30px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline;\n}\n\n.input-group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.9em;\n  width: 100%;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.8em;\n  border: none;\n  transition: box-shadow 0.3s;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 3px 0 #000;\n}\n.input-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 0 #ff0000;\n}\n.input-group[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  background-color: rgb(58, 58, 58);\n  color: white;\n  cursor: pointer;\n  border: none;\n  padding: 0.5em 0;\n  margin-top: 10px;\n  border-radius: 0.57em;\n}\n.input-group[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(34, 34, 34);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrcy9pbnB1dC90YXNrLWlucHV0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vSFAlMjBMQVBUT1AvRGVza3RvcC9LZW4ncyUyMEZpbGVzL0ZpbGVzL1dlYnNpdGUvQW5ndWxhclByYWN0L3Rhc2stYXBwL3NyYy9hcHAvY29tcG9uZW50cy90YXNrcy9pbnB1dC90YXNrLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBRUEsV0FBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURJRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDREo7QURHRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNESjtBREVJO0VBQ0Usd0JBQUE7QUNBTjtBREVJO0VBQ0UsMkJBQUE7QUNBTjtBREdFO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNESjtBREVJO0VBQ0UsaUNBQUE7QUNBTiIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgcGFkZGluZzogMThweCAwJTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9kby1saXN0IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICYgPiB0ciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgKiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjllbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcclxuICAgICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgIzAwMDtcclxuICAgIH1cclxuICAgICYuaW52YWxpZCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDAgI2ZmMDAwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmFkZC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjU3ZW07XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwYWNlIHtcbiAgcGFkZGluZzogMThweCAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvZG8tbGlzdCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgPiB0ciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5pbnB1dC1ncm91cCAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjllbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5wdXQtZ3JvdXAgaW5wdXQge1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG59XG4uaW5wdXQtZ3JvdXAgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDAgIzAwMDtcbn1cbi5pbnB1dC1ncm91cCBpbnB1dC5pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMCAjZmYwMDAwO1xufVxuLmlucHV0LWdyb3VwIC5hZGQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjVlbSAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjU3ZW07XG59XG4uaW5wdXQtZ3JvdXAgLmFkZC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7505:
/*!**************************************************************!*\
  !*** ./src/app/components/tasks/list/task-list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskListComponent": () => (/* binding */ TaskListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tasks.service */ 2632);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _button_task_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/task-button.component */ 3970);




function TaskListComponent_app_task_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-task-button", 2);
  }
  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("task", task_r1)("index", i_r2);
  }
}
class TaskListComponent {
  constructor(tasks) {
    this.tasks = tasks;
    this.GetTasks = () => this.tasks.Tasks;
  }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) {
  return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__.Tasks));
};
TaskListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TaskListComponent,
  selectors: [["app-task-list"]],
  decls: 5,
  vars: 1,
  consts: [[1, "container"], [3, "task", "index", 4, "ngFor", "ngForOf"], [3, "task", "index"]],
  template: function TaskListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Task List");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TaskListComponent_app_task_button_4_Template, 1, 2, "app-task-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.GetTasks());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _button_task_button_component__WEBPACK_IMPORTED_MODULE_1__.TaskButtonComponent],
  styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0.4em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrcy9saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0hQJTIwTEFQVE9QL0Rlc2t0b3AvS2VuJ3MlMjBGaWxlcy9GaWxlcy9XZWJzaXRlL0FuZ3VsYXJQcmFjdC90YXNrLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvdGFza3MvbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xyXG59XHJcbiIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 1273:
/*!********************************************!*\
  !*** ./src/app/services/logger.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class Logger {
  WriteCount(count) {
    console.log(count);
  }
}
Logger.ɵfac = function Logger_Factory(t) {
  return new (t || Logger)();
};
Logger.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Logger,
  factory: Logger.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2632:
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tasks": () => (/* binding */ Tasks)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class Tasks {
  constructor() {
    this.Tasks = [{
      title: 'frontend development',
      description: 'developing and Improving UI/UX design',
      isReminded: true,
      date: 'Jan. 3, 2023'
    }, {
      title: 'backend development',
      description: 'optimizing and improving security features and access controls',
      isReminded: true,
      date: 'Feb. 9, 2023'
    }, {
      title: 'database management',
      description: 'managing data and creating pipelines for analyzing, processing and transmission of data',
      isReminded: false,
      date: 'Apr. 18, 2023'
    }];
  }
}
Tasks.ɵfac = function Tasks_Factory(t) {
  return new (t || Tasks)();
};
Tasks.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Tasks,
  factory: Tasks.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6903:
/*!**************************************************!*\
  !*** ./src/assets/scripts/classes/DateString.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateString": () => (/* binding */ DateString)
/* harmony export */ });
class DateString {
  constructor(d) {
    this.d = d;
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }
  GetMonth() {
    return this.monthNames[this.d.getMonth()];
  }
  GetMMM() {
    const month = this.monthNames[this.d.getMonth()].substring(0, 3);
    return month.toLowerCase() === 'may' ? month + ' ' : month + '. ';
  }
  GetMMMDDYYYY() {
    return this.GetMMM() + this.d.getDay() + ', ' + this.d.getFullYear();
  }
}

/***/ }),

/***/ 5380:
/*!**************************************************!*\
  !*** ./src/assets/scripts/classes/StringUtil.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringUtil": () => (/* binding */ StringUtil)
/* harmony export */ });
class StringUtil {
  static ToTitleCase(text, isDebug = true) {
    let tempString = text.split(' ');
    if (isDebug) console.log(tempString);
    let allString = '';
    tempString.map(v => {
      allString += v != '' ? v[0].toUpperCase() + v.substring(1) + ' ' : '';
    });
    if (isDebug) console.log(allString);
    return allString;
  }
  static ToSentenceCase(text, isDebug = true) {
    let allString = text[0]?.toUpperCase() + text.substring(1);
    if (isDebug) console.log(allString);
    return allString;
  }
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map