function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-users-users-module-ngfactory"], {
  /***/
  "./src/app/modules/shared/guards/single-user.guard.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/shared/guards/single-user.guard.ts ***!
    \************************************************************/

  /*! exports provided: SingleUserGuard */

  /***/
  function srcAppModulesSharedGuardsSingleUserGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleUserGuard", function () {
      return SingleUserGuard;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SingleUserGuard = /*#__PURE__*/function () {
      function SingleUserGuard() {
        _classCallCheck(this, SingleUserGuard);
      }

      _createClass(SingleUserGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var role = localStorage.getItem('role');
          if (role == "admin") return true;
          return false;
        }
      }]);

      return SingleUserGuard;
    }();

    SingleUserGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function SingleUserGuard_Factory() {
        return new SingleUserGuard();
      },
      token: SingleUserGuard,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/modules/shared/services/users.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/shared/services/users.service.ts ***!
    \**********************************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppModulesSharedServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UsersService = /*#__PURE__*/function () {
      function UsersService() {
        _classCallCheck(this, UsersService);

        this.usersList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.usersList.next(this.getUsers());
      }

      _createClass(UsersService, [{
        key: "getUsers",
        value: function getUsers() {
          return [{
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.doe@email.com'
          }, {
            firstname: 'Jane',
            lastname: 'Deo',
            email: 'jane.doe@email.com'
          }, {
            firstname: 'Abc',
            lastname: 'Dae',
            email: 'john.doe@email.com'
          }, {
            firstname: 'Cde',
            lastname: 'Dove',
            email: 'jane.doe@email.com'
          }, {
            firstname: 'FGH',
            lastname: 'Doel',
            email: 'john.doe@email.com'
          }, {
            firstname: 'IoP',
            lastname: 'Dole',
            email: 'jane.doe@email.com'
          }];
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          var uL = this.getUsers();
          uL.push(user);
          this.usersList.next(uL);
        }
      }]);

      return UsersService;
    }();

    UsersService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function UsersService_Factory() {
        return new UsersService();
      },
      token: UsersService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/modules/users/components/all-users/all-users.component.css.shim.ngstyle.js":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/users/components/all-users/all-users.component.css.shim.ngstyle.js ***!
    \********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppModulesUsersComponentsAllUsersAllUsersComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/modules/users/components/all-users/all-users.component.ngfactory.js":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/users/components/all-users/all-users.component.ngfactory.js ***!
    \*************************************************************************************/

  /*! exports provided: RenderType_AllUsersComponent, View_AllUsersComponent_0, View_AllUsersComponent_Host_0, AllUsersComponentNgFactory */

  /***/
  function srcAppModulesUsersComponentsAllUsersAllUsersComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AllUsersComponent", function () {
      return RenderType_AllUsersComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AllUsersComponent_0", function () {
      return View_AllUsersComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AllUsersComponent_Host_0", function () {
      return View_AllUsersComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllUsersComponentNgFactory", function () {
      return AllUsersComponentNgFactory;
    });
    /* harmony import */


    var _all_users_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./all-users.component.css.shim.ngstyle */
    "./src/app/modules/users/components/all-users/all-users.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _all_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./all-users.component */
    "./src/app/modules/users/components/all-users/all-users.component.ts");
    /* harmony import */


    var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/users.service */
    "./src/app/modules/shared/services/users.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AllUsersComponent = [_all_users_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AllUsersComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AllUsersComponent,
      data: {}
    });

    function View_AllUsersComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.index, "");

        _ck(_v, 2, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_3 = _v.context.$implicit.firstname;

        _ck(_v, 3, 0, currVal_3);
      });
    }

    function View_AllUsersComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AllUsersComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.users;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_AllUsersComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-all-users", [], null, null, null, View_AllUsersComponent_0, RenderType_AllUsersComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _all_users_component__WEBPACK_IMPORTED_MODULE_4__["AllUsersComponent"], [_shared_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AllUsersComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-all-users", _all_users_component__WEBPACK_IMPORTED_MODULE_4__["AllUsersComponent"], View_AllUsersComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/modules/users/components/all-users/all-users.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/users/components/all-users/all-users.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AllUsersComponent */

  /***/
  function srcAppModulesUsersComponentsAllUsersAllUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function () {
      return AllUsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AllUsersComponent = /*#__PURE__*/function () {
      function AllUsersComponent(_usersSevice) {
        _classCallCheck(this, AllUsersComponent);

        this._usersSevice = _usersSevice;
        this.users = [];
      }

      _createClass(AllUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.users = this._usersSevice.getUsers();
        }
      }]);

      return AllUsersComponent;
    }();
    /***/

  },

  /***/
  "./src/app/modules/users/components/single-user/single-user.component.css.shim.ngstyle.js":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/users/components/single-user/single-user.component.css.shim.ngstyle.js ***!
    \************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppModulesUsersComponentsSingleUserSingleUserComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/modules/users/components/single-user/single-user.component.ngfactory.js":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/users/components/single-user/single-user.component.ngfactory.js ***!
    \*****************************************************************************************/

  /*! exports provided: RenderType_SingleUserComponent, View_SingleUserComponent_0, View_SingleUserComponent_Host_0, SingleUserComponentNgFactory */

  /***/
  function srcAppModulesUsersComponentsSingleUserSingleUserComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_SingleUserComponent", function () {
      return RenderType_SingleUserComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SingleUserComponent_0", function () {
      return View_SingleUserComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SingleUserComponent_Host_0", function () {
      return View_SingleUserComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleUserComponentNgFactory", function () {
      return SingleUserComponentNgFactory;
    });
    /* harmony import */


    var _single_user_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./single-user.component.css.shim.ngstyle */
    "./src/app/modules/users/components/single-user/single-user.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _single_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./single-user.component */
    "./src/app/modules/users/components/single-user/single-user.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/users.service */
    "./src/app/modules/shared/services/users.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_SingleUserComponent = [_single_user_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_SingleUserComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SingleUserComponent,
      data: {}
    });

    function View_SingleUserComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["Firstname ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["Lastname ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["Email ", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.user.firstname;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _co.user.lastname;

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = _co.user.email;

        _ck(_v, 7, 0, currVal_2);
      });
    }

    function View_SingleUserComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleUserComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.user;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_SingleUserComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-single-user", [], null, null, null, View_SingleUserComponent_0, RenderType_SingleUserComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _single_user_component__WEBPACK_IMPORTED_MODULE_3__["SingleUserComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var SingleUserComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-single-user", _single_user_component__WEBPACK_IMPORTED_MODULE_3__["SingleUserComponent"], View_SingleUserComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/modules/users/components/single-user/single-user.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/users/components/single-user/single-user.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SingleUserComponent */

  /***/
  function srcAppModulesUsersComponentsSingleUserSingleUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleUserComponent", function () {
      return SingleUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SingleUserComponent = /*#__PURE__*/function () {
      function SingleUserComponent(_activatedRoute, _usersService) {
        _classCallCheck(this, SingleUserComponent);

        this._activatedRoute = _activatedRoute;
        this._usersService = _usersService;
      }

      _createClass(SingleUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this.userId = params.id;
            _this.user = _this._usersService.getUsers()[_this.userId];
          });
        }
      }]);

      return SingleUserComponent;
    }();
    /***/

  },

  /***/
  "./src/app/modules/users/users-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/users/users-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: UsersRoutingModule */

  /***/
  function srcAppModulesUsersUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function () {
      return UsersRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _users_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./users-wrapper.component */
    "./src/app/modules/users/users-wrapper.component.ts");
    /* harmony import */


    var _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/all-users/all-users.component */
    "./src/app/modules/users/components/all-users/all-users.component.ts");
    /* harmony import */


    var _components_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/single-user/single-user.component */
    "./src/app/modules/users/components/single-user/single-user.component.ts");
    /* harmony import */


    var _shared_guards_single_user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/guards/single-user.guard */
    "./src/app/modules/shared/guards/single-user.guard.ts");

    var usersRoutes = [{
      path: '',
      component: _users_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["UsersWrapperComponent"],
      children: [{
        path: '',
        component: _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_2__["AllUsersComponent"]
      }, {
        path: ':id',
        component: _components_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_3__["SingleUserComponent"],
        canActivate: [_shared_guards_single_user_guard__WEBPACK_IMPORTED_MODULE_4__["SingleUserGuard"]]
      }]
    }];

    var UsersRoutingModule = function UsersRoutingModule() {
      _classCallCheck(this, UsersRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/modules/users/users-wrapper.component.css.shim.ngstyle.js":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/users/users-wrapper.component.css.shim.ngstyle.js ***!
    \***************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppModulesUsersUsersWrapperComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [""];
    /***/
  },

  /***/
  "./src/app/modules/users/users-wrapper.component.ngfactory.js":
  /*!********************************************************************!*\
    !*** ./src/app/modules/users/users-wrapper.component.ngfactory.js ***!
    \********************************************************************/

  /*! exports provided: RenderType_UsersWrapperComponent, View_UsersWrapperComponent_0, View_UsersWrapperComponent_Host_0, UsersWrapperComponentNgFactory */

  /***/
  function srcAppModulesUsersUsersWrapperComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_UsersWrapperComponent", function () {
      return RenderType_UsersWrapperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UsersWrapperComponent_0", function () {
      return View_UsersWrapperComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UsersWrapperComponent_Host_0", function () {
      return View_UsersWrapperComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersWrapperComponentNgFactory", function () {
      return UsersWrapperComponentNgFactory;
    });
    /* harmony import */


    var _users_wrapper_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./users-wrapper.component.css.shim.ngstyle */
    "./src/app/modules/users/users-wrapper.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_components_shared_shared_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/components/shared/shared.component.ngfactory */
    "./src/app/modules/shared/components/shared/shared.component.ngfactory.js");
    /* harmony import */


    var _shared_components_shared_shared_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/shared/shared.component */
    "./src/app/modules/shared/components/shared/shared.component.ts");
    /* harmony import */


    var _users_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users-wrapper.component */
    "./src/app/modules/users/users-wrapper.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_UsersWrapperComponent = [_users_wrapper_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_UsersWrapperComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_UsersWrapperComponent,
      data: {}
    });

    function View_UsersWrapperComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "app-shared", [], null, null, null, _shared_components_shared_shared_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_SharedComponent_0"], _shared_components_shared_shared_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_SharedComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _shared_components_shared_shared_component__WEBPACK_IMPORTED_MODULE_4__["SharedComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);
      }, null);
    }

    function View_UsersWrapperComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-users-wrapper", [], null, null, null, View_UsersWrapperComponent_0, RenderType_UsersWrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _users_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["UsersWrapperComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var UsersWrapperComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-users-wrapper", _users_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["UsersWrapperComponent"], View_UsersWrapperComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/modules/users/users-wrapper.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/users/users-wrapper.component.ts ***!
    \**********************************************************/

  /*! exports provided: UsersWrapperComponent */

  /***/
  function srcAppModulesUsersUsersWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersWrapperComponent", function () {
      return UsersWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UsersWrapperComponent = /*#__PURE__*/function () {
      function UsersWrapperComponent() {
        _classCallCheck(this, UsersWrapperComponent);
      }

      _createClass(UsersWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UsersWrapperComponent;
    }();
    /***/

  },

  /***/
  "./src/app/modules/users/users.module.ngfactory.js":
  /*!*********************************************************!*\
    !*** ./src/app/modules/users/users.module.ngfactory.js ***!
    \*********************************************************/

  /*! exports provided: UsersModuleNgFactory */

  /***/
  function srcAppModulesUsersUsersModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModuleNgFactory", function () {
      return UsersModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _users_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./users.module */
    "./src/app/modules/users/users.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _users_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users-wrapper.component.ngfactory */
    "./src/app/modules/users/users-wrapper.component.ngfactory.js");
    /* harmony import */


    var _components_all_users_all_users_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/all-users/all-users.component.ngfactory */
    "./src/app/modules/users/components/all-users/all-users.component.ngfactory.js");
    /* harmony import */


    var _components_single_user_single_user_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/single-user/single-user.component.ngfactory */
    "./src/app/modules/users/components/single-user/single-user.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _users_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./users-routing.module */
    "./src/app/modules/users/users-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _users_wrapper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./users-wrapper.component */
    "./src/app/modules/users/users-wrapper.component.ts");
    /* harmony import */


    var _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/all-users/all-users.component */
    "./src/app/modules/users/components/all-users/all-users.component.ts");
    /* harmony import */


    var _components_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/single-user/single-user.component */
    "./src/app/modules/users/components/single-user/single-user.component.ts");
    /* harmony import */


    var _shared_guards_single_user_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shared/guards/single-user.guard */
    "./src/app/modules/shared/guards/single-user.guard.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var UsersModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_users_module__WEBPACK_IMPORTED_MODULE_1__["UsersModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _users_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["UsersWrapperComponentNgFactory"], _components_all_users_all_users_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AllUsersComponentNgFactory"], _components_single_user_single_user_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SingleUserComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _users_routing_module__WEBPACK_IMPORTED_MODULE_9__["UsersRoutingModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_9__["UsersRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _users_module__WEBPACK_IMPORTED_MODULE_1__["UsersModule"], _users_module__WEBPACK_IMPORTED_MODULE_1__["UsersModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () {
        return [[{
          path: "",
          component: _users_wrapper_component__WEBPACK_IMPORTED_MODULE_11__["UsersWrapperComponent"],
          children: [{
            path: "",
            component: _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_12__["AllUsersComponent"]
          }, {
            path: ":id",
            component: _components_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_13__["SingleUserComponent"],
            canActivate: [_shared_guards_single_user_guard__WEBPACK_IMPORTED_MODULE_14__["SingleUserGuard"]]
          }]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/modules/users/users.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/users/users.module.ts ***!
    \***********************************************/

  /*! exports provided: UsersModule */

  /***/
  function srcAppModulesUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
      return UsersModule;
    });

    var UsersModule = function UsersModule() {
      _classCallCheck(this, UsersModule);
    };
    /***/

  }
}]);