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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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
            imports: [__WEBPACK_IMPORTED_MODULE_2__account_routing_module__["a" /* AccountRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */]],
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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2>Borrowers</h2>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th>Username</th>\n              <th>Date registered</th>\n              <th>Role</th>\n              <th>Status</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>Samppa Nori</td>\n              <td>2012/01/01</td>\n              <td>Member</td>\n              <td>\n                <span class=\"badge badge-success\">Active</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Estavan Lykos</td>\n              <td>2012/02/01</td>\n              <td>Staff</td>\n              <td>\n                <span class=\"badge badge-danger\">Banned</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Chetan Mohamed</td>\n              <td>2012/02/01</td>\n              <td>Admin</td>\n              <td>\n                <span class=\"badge badge-secondary\">Inactive</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Derick Maximinus</td>\n              <td>2012/03/01</td>\n              <td>Member</td>\n              <td>\n                <span class=\"badge badge-warning\">Pending</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Friderik Dávid</td>\n              <td>2012/01/21</td>\n              <td>Staff</td>\n              <td>\n                <span class=\"badge badge-success\">Active</span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2>Histories</h2>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th>Username</th>\n              <th>Date registered</th>\n              <th>Role</th>\n              <th>Status</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>Samppa Nori</td>\n              <td>2012/01/01</td>\n              <td>Member</td>\n              <td>\n                <span class=\"badge badge-success\">Active</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Estavan Lykos</td>\n              <td>2012/02/01</td>\n              <td>Staff</td>\n              <td>\n                <span class=\"badge badge-danger\">Banned</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Chetan Mohamed</td>\n              <td>2012/02/01</td>\n              <td>Admin</td>\n              <td>\n                <span class=\"badge badge-secondary\">Inactive</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Derick Maximinus</td>\n              <td>2012/03/01</td>\n              <td>Member</td>\n              <td>\n                <span class=\"badge badge-warning\">Pending</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Friderik Dávid</td>\n              <td>2012/01/21</td>\n              <td>Staff</td>\n              <td>\n                <span class=\"badge badge-success\">Active</span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <ul class=\"pagination\">\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1</a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div class=\"section\" style=\"margin: 0 -15px 0 -15px; border-bottom: 1px solid #c2cfd6;\">\n  <div class=\"row\" style=\"background-color: #ffffff; height: 46px; padding-top: 10px; margin-bottom: 20px\">\n    <div class=\"col-md-12\">\n      <h3 style=\"color:#4e4b4b\">Opportunities</h3>\n    </div>\n  </div>\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Borrowers</h4>\n          </div>\n          <div class=\"card-body\">\n            <h2 *ngIf=\"!listOpportunities\" class=\"text-center\">There are no opportunity now!</h2>\n\n            <table class=\"table\" *ngIf=\"listOpportunities\">\n              <thead>\n              <tr>\n                <th>Borrower</th>\n                <th>Lend ticket</th>\n                <th>Role</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let credit of listOpportunities\">\n                <td><strong>{{credit.borrowerName}}</strong><br>\n                  CIC Rank: {{credit.cicRank}}<br>\n                  LLLRank:{{credit.lllRank}}<br>\n                  Credit Limit:{{credit.creditLimit}} VNDT\n                </td>\n                <td>Amount: {{credit.amount}} VNDT<br>\n                  Rate: {{credit.rate*100}} %/yr<br>\n                  Due Day after: {{credit.dueDay*100}} days\n                </td>\n                <td>Expired: {{credit.expiredTime | date:\"MM/dd/yy\"}} days</td>\n                <td>\n                  <span class=\"badge badge-success\">{{credit.status}}</span>\n                </td>\n                <td>\n                  <button class=\"btn btn-primary\">Bid rate now!</button>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/account/opportunities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_credit_service__ = __webpack_require__("../../../../../src/app/services/credit.service.ts");
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
    function OpportunitiesComponent(creditService) {
        this.creditService = creditService;
    }
    OpportunitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.creditService.getCredits({
            where: {
                status: 'created' //'readyToBid'
            }
        }, function (data) {
            _this.listOpportunities = data;
        }, function (err) {
            console.log(err);
        });
    };
    OpportunitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/account/opportunities.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_credit_service__["a" /* CreditService */]])
    ], OpportunitiesComponent);
    return OpportunitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/account/wallet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" style=\"margin: 0 -15px 0 -15px; border-bottom: 1px solid #c2cfd6;\">\n  <div class=\"row\" style=\"background-color: #ffffff; height: 46px; padding-top: 10px; margin-bottom: 20px\">\n    <div class=\"col-md-12\">\n      <h3 style=\"color:#4e4b4b\">My wallet</h3>\n    </div>\n  </div>\n\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Personal information</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-4 text-center\">\n                <img class=\"img-avatar\" src=\"assets/img/no-user.jpg\" height=\"200\"/>\n              </div>\n              <div class=\"col-md-4\">\n                <h2>Tony Doan</h2>\n                <p>CIC Rank: Level {{user.cicRank || 0}}</p>\n                <p>LLL Rank: {{user.lllRank || 0}}</p>\n                <h4>Credit Limit: <strong>{{user.creditLimit || 0}}</strong> VND</h4>\n              </div>\n              <div class=\"col-md-4 text-right\">\n                <h2><strong>1,343.2</strong> ETH</h2>\n                <h3><strong>5,444.2</strong> VND</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Your Debt</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Amount</label>\n              <div class=\"col-md-9\">\n                <h4><strong>30,324.65</strong> VND</h4>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Rate</label>\n              <div class=\"col-md-9\">\n                <h4>26%</h4>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Barrieus</label>\n              <div class=\"col-md-9\">\n                <h4><strong>60</strong> days</h4>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Start date</label>\n              <div class=\"col-md-9\">\n                <h4>Nov 25th, 2017</h4>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Due date</label>\n              <div class=\"col-md-9\">\n                <h4>Jan 25th, 2017</h4>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Borrow Form</h4>\n          </div>\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Email</label>\n                <div class=\"col-md-9\">\n                  <input type=\"email\" id=\"hf-email\" name=\"hf-email\" class=\"form-control\" placeholder=\"Enter Email..\">\n                  <span class=\"help-block\">Please enter your email</span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"hf-password\">Password</label>\n                <div class=\"col-md-9\">\n                  <input type=\"password\" id=\"hf-password\" name=\"hf-password\" class=\"form-control\"\n                         placeholder=\"Enter Password..\">\n                  <span class=\"help-block\">Please enter your password</span>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"hf-amount\">Amount</label>\n                <div class=\"col-md-9\">\n                  <input type=\"number\" step=\"1\" id=\"hf-amount\" name=\"hf-amount\" class=\"form-control\"\n                         placeholder=\"Enter amount of VNDT token..\">\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/account/wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__("../../../../../src/app/services/authentication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletComponent = /** @class */ (function () {
    function WalletComponent(authenticationService) {
        this.authenticationService = authenticationService;
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
    WalletComponent.prototype.ngOnInit = function () {
        this.user = this.authenticationService.getUser();
        console.log('user ' + JSON.stringify(this.user));
    };
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
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* AuthenticationService */]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map