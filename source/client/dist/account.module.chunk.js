webpackJsonp(["account.module"],{

/***/ "../../../../../src/app/views/account/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_component__ = __webpack_require__("../../../../../src/app/views/account/wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opportunities_component__ = __webpack_require__("../../../../../src/app/views/account/opportunities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__borrower_component__ = __webpack_require__("../../../../../src/app/views/account/borrower.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_component__ = __webpack_require__("../../../../../src/app/views/account/history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        data: {
            title: 'Account Pages'
        },
        children: [
            {
                path: 'wallet',
                component: __WEBPACK_IMPORTED_MODULE_2__wallet_component__["a" /* WalletComponent */],
                data: {
                    title: 'Wallet'
                }
            },
            {
                path: 'opportunities',
                component: __WEBPACK_IMPORTED_MODULE_3__opportunities_component__["a" /* OpportunitiesComponent */],
                data: {
                    title: 'Opportunities'
                }
            },
            {
                path: 'borrower',
                component: __WEBPACK_IMPORTED_MODULE_4__borrower_component__["a" /* BorrowerComponent */],
                data: {
                    title: 'Borrower'
                }
            },
            {
                path: 'history',
                component: __WEBPACK_IMPORTED_MODULE_5__history_component__["a" /* HistoryComponent */],
                data: {
                    title: 'History'
                }
            }
        ]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallet_component__ = __webpack_require__("../../../../../src/app/views/account/wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_routing_module__ = __webpack_require__("../../../../../src/app/views/account/account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opportunities_component__ = __webpack_require__("../../../../../src/app/views/account/opportunities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__borrower_component__ = __webpack_require__("../../../../../src/app/views/account/borrower.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_component__ = __webpack_require__("../../../../../src/app/views/account/history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__account_routing_module__["a" /* AccountRoutingModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__wallet_component__["a" /* WalletComponent */],
                __WEBPACK_IMPORTED_MODULE_3__opportunities_component__["a" /* OpportunitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_4__borrower_component__["a" /* BorrowerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__history_component__["a" /* HistoryComponent */]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/account/borrower.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h2>Borrowers</h2>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n              <th>Username</th>\r\n              <th>Date registered</th>\r\n              <th>Role</th>\r\n              <th>Status</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>Samppa Nori</td>\r\n              <td>2012/01/01</td>\r\n              <td>Member</td>\r\n              <td>\r\n                <span class=\"badge badge-success\">Active</span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Estavan Lykos</td>\r\n              <td>2012/02/01</td>\r\n              <td>Staff</td>\r\n              <td>\r\n                <span class=\"badge badge-danger\">Banned</span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Chetan Mohamed</td>\r\n              <td>2012/02/01</td>\r\n              <td>Admin</td>\r\n              <td>\r\n                <span class=\"badge badge-secondary\">Inactive</span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Derick Maximinus</td>\r\n              <td>2012/03/01</td>\r\n              <td>Member</td>\r\n              <td>\r\n                <span class=\"badge badge-warning\">Pending</span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Friderik Dávid</td>\r\n              <td>2012/01/21</td>\r\n              <td>Staff</td>\r\n              <td>\r\n                <span class=\"badge badge-success\">Active</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n            <li class=\"page-item active\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/account/borrower.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BorrowerComponent = /** @class */ (function () {
    function BorrowerComponent() {
    }
    BorrowerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/account/borrower.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BorrowerComponent);
    return BorrowerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/account/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h2>Histories</h2>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n              <th>Username</th>\r\n              <th>Date registered</th>\r\n              <th>Role</th>\r\n              <th>Status</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>Samppa Nori</td>\r\n              <td>2012/01/01</td>\r\n              <td>Member</td>\r\n              <td>\r\n                <span class=\"badge badge-success\">Active</span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Estavan Lykos</td>\r\n              <td>2012/02/01</td>\r\n              <td>Staff</td>\r\n              <td>\r\n                <span class=\"badge badge-danger\">Banned</span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Chetan Mohamed</td>\r\n              <td>2012/02/01</td>\r\n              <td>Admin</td>\r\n              <td>\r\n                <span class=\"badge badge-secondary\">Inactive</span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Derick Maximinus</td>\r\n              <td>2012/03/01</td>\r\n              <td>Member</td>\r\n              <td>\r\n                <span class=\"badge badge-warning\">Pending</span>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Friderik Dávid</td>\r\n              <td>2012/01/21</td>\r\n              <td>Staff</td>\r\n              <td>\r\n                <span class=\"badge badge-success\">Active</span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <ul class=\"pagination\">\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n            <li class=\"page-item active\">\r\n              <a class=\"page-link\" href=\"#\">1</a>\r\n            </li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/account/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/account/history.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/account/opportunities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" style=\"margin: 0 -15px 0 -15px; border-bottom: 1px solid #c2cfd6;\">\r\n  <div class=\"row\" style=\"background-color: #ffffff; height: 46px; padding-top: 10px; margin-bottom: 20px\">\r\n    <div class=\"col-md-12\">\r\n      <h3 style=\"color:#4e4b4b\">Opportunities</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h4>Borrowers</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <table class=\"table\">\r\n              <thead>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Date registered</th>\r\n                <th>Role</th>\r\n                <th>Status</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr>\r\n                <td>Samppa Nori</td>\r\n                <td>2012/01/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Estavan Lykos</td>\r\n                <td>2012/02/01</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-danger\">Banned</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Chetan Mohamed</td>\r\n                <td>2012/02/01</td>\r\n                <td>Admin</td>\r\n                <td>\r\n                  <span class=\"badge badge-secondary\">Inactive</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Derick Maximinus</td>\r\n                <td>2012/03/01</td>\r\n                <td>Member</td>\r\n                <td>\r\n                  <span class=\"badge badge-warning\">Pending</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Friderik Dávid</td>\r\n                <td>2012/01/21</td>\r\n                <td>Staff</td>\r\n                <td>\r\n                  <span class=\"badge badge-success\">Active</span>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            <ul class=\"pagination\">\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n              <li class=\"page-item active\">\r\n                <a class=\"page-link\" href=\"#\">1</a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/account/opportunities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpportunitiesComponent = /** @class */ (function () {
    function OpportunitiesComponent() {
    }
    OpportunitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/account/opportunities.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OpportunitiesComponent);
    return OpportunitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/account/wallet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" style=\"margin: 0 -15px 0 -15px; border-bottom: 1px solid #c2cfd6;\">\r\n  <div class=\"row\" style=\"background-color: #ffffff; height: 46px; padding-top: 10px; margin-bottom: 20px\">\r\n    <div class=\"col-md-12\">\r\n      <h3 style=\"color:#4e4b4b\">My wallet</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h4>Personal information</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 text-center\">\r\n                <img class=\"img-avatar\" src=\"assets/img/no-user.jpg\" height=\"200\"/>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <h2>Tony Doan</h2>\r\n                <p>CIC Rank: Level 1</p>\r\n                <p>LLL Rank: 4.7</p>\r\n                <h4>Credit Limit: <strong>80,000</strong> VND</h4>\r\n              </div>\r\n              <div class=\"col-md-4 text-right\">\r\n                <h2><strong>1,343.2</strong> ETH</h2>\r\n                <h3><strong>5,444.2</strong> VND</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h4>Your Debt</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Amount</label>\r\n              <div class=\"col-md-9\">\r\n                <h4><strong>30,324.65</strong> VND</h4>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Rate</label>\r\n              <div class=\"col-md-9\">\r\n                <h4>26%</h4>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Barrieus</label>\r\n              <div class=\"col-md-9\">\r\n                <h4><strong>60</strong> days</h4>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Start date</label>\r\n              <div class=\"col-md-9\">\r\n                <h4>Nov 25th, 2017</h4>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Due date</label>\r\n              <div class=\"col-md-9\">\r\n                <h4>Jan 25th, 2017</h4>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h4>Borrow Form</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form action=\"\" method=\"post\" class=\"form-horizontal\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Email</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"email\" id=\"hf-email\" name=\"hf-email\" class=\"form-control\" placeholder=\"Enter Email..\">\r\n                  <span class=\"help-block\">Please enter your email</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"hf-password\">Password</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"password\" id=\"hf-password\" name=\"hf-password\" class=\"form-control\"\r\n                         placeholder=\"Enter Password..\">\r\n                  <span class=\"help-block\">Please enter your password</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-3 col-form-label\" for=\"hf-amount\">Amount</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"number\" step=\"1\" id=\"hf-amount\" name=\"hf-amount\" class=\"form-control\"\r\n                         placeholder=\"Enter amount of VNDT token..\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n            <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/account/wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WalletComponent = /** @class */ (function () {
    function WalletComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColours = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // barChart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // events
    WalletComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    WalletComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    WalletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/account/wallet.component.html")
        })
    ], WalletComponent);
    return WalletComponent;
}());



/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map