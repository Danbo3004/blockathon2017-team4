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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_app_popup_app_popup_component__ = __webpack_require__("../../../../../src/app/components/app-popup/app-popup.component.ts");
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
            imports: [__WEBPACK_IMPORTED_MODULE_2__account_routing_module__["a" /* AccountRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__wallet_component__["a" /* WalletComponent */],
                __WEBPACK_IMPORTED_MODULE_3__opportunities_component__["a" /* OpportunitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_4__borrower_component__["a" /* BorrowerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_app_popup_app_popup_component__["a" /* AppPopupComponent */],
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/account/borrower.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" style=\"margin: 0 -15px 0 -15px; border-bottom: 1px solid #c2cfd6;\">\n  <div class=\"row\" style=\"background-color: #ffffff; height: 46px; padding-top: 10px; margin-bottom: 20px\">\n    <div class=\"col-md-12\">\n      <h3 style=\"color:#4e4b4b\">Your investments</h3>\n    </div>\n  </div>\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h2 *ngIf=\"listBorrowers?.length==0\" class=\"text-center\">You have no investment now!</h2>\n\n          <table class=\"table\" *ngIf=\"listBorrowers?.length>0\">\n            <thead>\n            <tr>\n              <th>Borrower</th>\n              <th>Lend ticket</th>\n              <th>Role</th>\n              <th>Status</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let credit of listBorrowers\">\n              <td><strong>{{credit.borrowerName}}</strong><br>\n                CIC Rank: {{credit.cicRank}}<br>\n                LLLRank:{{credit.lllRank}}<br>\n                Credit Limit:{{credit.creditLimit}} VNDT\n              </td>\n              <td>Amount: {{credit.amount}} VNDT<br>\n                Rate: {{credit.rate*100}} %/yr<br>\n                Due Day after: {{credit.dueDay*100}} days\n              </td>\n              <td>Expired: {{credit.expiredTime | date:\"MM/dd/yy\"}} days</td>\n              <td>\n                <span class=\"badge badge-success\">{{credit.status}}</span>\n              </td>\n              <td>\n                <button class=\"btn btn-primary\">Bid rate now!</button>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/account/borrower.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorrowerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_credit_service__ = __webpack_require__("../../../../../src/app/services/credit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication__ = __webpack_require__("../../../../../src/app/services/authentication.ts");
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
    function BorrowerComponent(creditService, authenticationService) {
        this.creditService = creditService;
        this.authenticationService = authenticationService;
    }
    BorrowerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUserId = this.authenticationService.getUserId();
        this.creditService.getCredits({
            where: {
                status: 'lending',
                lenderId: (currentUserId) ? currentUserId : 0
            }
        }, function (data) {
            _this.listBorrowers = data;
        }, function (err) {
            console.log(err);
        });
    };
    BorrowerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/account/borrower.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_credit_service__["a" /* CreditService */], __WEBPACK_IMPORTED_MODULE_2__services_authentication__["a" /* AuthenticationService */]])
    ], BorrowerComponent);
    return BorrowerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/account/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" style=\"margin: 0 -15px 0 -15px; border-bottom: 1px solid #c2cfd6;\">\n  <div class=\"row\" style=\"background-color: #ffffff; height: 46px; padding-top: 10px; margin-bottom: 20px\">\n    <div class=\"col-md-12\">\n      <h3 style=\"color:#4e4b4b\">Histories</h3>\n    </div>\n  </div>\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h2 *ngIf=\"listBorrowers?.length==0\" class=\"text-center\">Your history of investment is empty!</h2>\n\n            <table class=\"table\" *ngIf=\"listBorrowers?.length>0\">\n              <thead>\n              <tr>\n                <th>Borrower</th>\n                <th>Lend ticket</th>\n                <th>Role</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let credit of listBorrowers\">\n                <td><strong>{{credit.borrowerName}}</strong><br>\n                  CIC Rank: {{credit.cicRank}}<br>\n                  LLLRank:{{credit.lllRank}}<br>\n                  Credit Limit:{{credit.creditLimit}} VNDT\n                </td>\n                <td>Amount: {{credit.amount}} VNDT<br>\n                  Rate: {{credit.rate*100}} %/yr<br>\n                  Due Day after: {{credit.dueDay*100}} days\n                </td>\n                <td>Expired: {{credit.expiredTime | date:\"MM/dd/yy\"}} days</td>\n                <td>\n                  <span class=\"badge badge-success\">{{credit.status}}</span>\n                </td>\n                <td>\n                  <button class=\"btn btn-primary\">Bid rate now!</button>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/account/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__("../../../../../src/app/services/authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_credit_service__ = __webpack_require__("../../../../../src/app/services/credit.service.ts");
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
    function HistoryComponent(creditService, authenticationService) {
        this.creditService = creditService;
        this.authenticationService = authenticationService;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUserId = this.authenticationService.getUserId();
        this.creditService.getCredits({
            where: {
                status: { inq: ['pay', 'done'] },
                lenderId: (currentUserId) ? currentUserId : 0
            }
        }, function (data) {
            _this.listBorrowers = data;
        }, function (err) {
            console.log(err);
        });
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/account/history.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_credit_service__["a" /* CreditService */], __WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* AuthenticationService */]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/account/opportunities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" style=\"margin: 0 -15px 0 -15px; border-bottom: 1px solid #c2cfd6;\">\n  <div class=\"row\" style=\"background-color: #ffffff; height: 46px; padding-top: 10px; margin-bottom: 20px\">\n    <div class=\"col-md-12\">\n      <h3 style=\"color:#4e4b4b\">Opportunities</h3>\n    </div>\n  </div>\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h2 *ngIf=\"listOpportunities?.length==0\" class=\"text-center\">There are no opportunity now!</h2>\n\n            <table class=\"table\" *ngIf=\"listOpportunities?.length>0\">\n              <thead>\n              <tr>\n                <th>Borrower</th>\n                <th>Lend ticket</th>\n                <th>Role</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let credit of listOpportunities\">\n                <td><strong>{{credit.borrowerName}}</strong><br>\n                  CIC Rank: {{credit.cicRank}}<br>\n                  LLLRank:{{credit.lllRank}}<br>\n                  Credit Limit:{{credit.creditLimit}} VNDT\n                </td>\n                <td>Amount: {{credit.amount}} VNDT<br>\n                  Rate: {{credit.rate}} %/yr<br>\n                  Due Day after: {{credit.dueDay}} days\n                </td>\n                <td>Expired: {{credit.expiredTime | date:\"MM/dd/yy\"}} days</td>\n                <td>\n                  <span class=\"badge badge-success\">{{credit.status}}</span>\n                </td>\n                <td>\n                  <!--<button class=\"btn btn-primary\" (click)=\"open(content)\">Bid rate now!</button>-->\n                  <app-popup [credit]=\"credit\"></app-popup>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
            where: {}
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

module.exports = "<div class=\"section\" style=\"margin: 0 -15px 0 -15px; border-bottom: 1px solid #c2cfd6;\">\n  <div class=\"row\" style=\"background-color: #ffffff; height: 46px; padding-top: 10px; margin-bottom: 20px\">\n    <div class=\"col-md-12\">\n      <h3 style=\"color:#4e4b4b\">My wallet</h3>\n    </div>\n  </div>\n\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Personal information</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-4 text-center\">\n                <img class=\"img-avatar\" src=\"assets/img/no-user.jpg\" height=\"200\"/>\n              </div>\n              <div class=\"col-md-4\">\n                <h2>{{user.username}}</h2>\n                <p>CIC Rank: Level {{user.cicRank || 0}}</p>\n                <p>LLL Rank: {{user.lllRank || 0}}</p>\n                <h4>Credit Limit: <strong>{{user.creditLimit || 0}}</strong> VNDT</h4>\n              </div>\n              <div class=\"col-md-4 text-right\">\n                <h2><strong>{{user.ethBalance || 0}}</strong> ETH</h2>\n                <h3><strong>{{user.tokenBalance || 0}}</strong> VNDT</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"animated fadeIn\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\" *ngIf=\"inDept\">\n          <div class=\"card-header\">\n            <h4>Your Debt</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Amount</label>\n              <div class=\"col-md-9\">\n                <h4><strong>30,324.65</strong> VNDT</h4>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Rate</label>\n              <div class=\"col-md-9\">\n                <h4>26%</h4>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Barrieus</label>\n              <div class=\"col-md-9\">\n                <h4><strong>60</strong> days</h4>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Start date</label>\n              <div class=\"col-md-9\">\n                <h4>Nov 25th, 2017</h4>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"hf-email\">Due date</label>\n              <div class=\"col-md-9\">\n                <h4>Jan 25th, 2017</h4>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card\" *ngIf=\"!inDept\">\n          <div class=\"card-header\">\n            <h4>Borrow Form</h4>\n          </div>\n          <div class=\"card-body\">\n            <form action=\"\" method=\"post\" class=\"form-horizontal\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"borrow-amount\">Amount</label>\n                <div class=\"col-md-9\">\n                  <input type=\"number\" step=\"1\" id=\"borrow-amount\" name=\"borrow-amount\" class=\"form-control\"\n                         placeholder=\"Enter amount of VNDT token..\" [(ngModel)]=\"borrow.amount\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"borrow-amount\">Rate</label>\n                <div class=\"col-md-9\">\n                  <input type=\"number\" id=\"borrow-rate\" name=\"borrow-rate\" class=\"form-control\"\n                         placeholder=\"Enter rate in percentage..\" [(ngModel)]=\"borrow.rate\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"borrow-amount\">Period</label>\n                <div class=\"col-md-9\">\n                  <input type=\"number\" step=\"1\" id=\"borrow-period\" name=\"borrow-period\" class=\"form-control\"\n                         placeholder=\"Enter number of days to pay..\" [(ngModel)]=\"borrow.period\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 col-form-label\" for=\"borrow-expire-date\">Expire Date</label>\n                <div class=\"col-md-9\">\n                  <input type=\"date\" step=\"1\" id=\"borrow-expire-date\" name=\"borrow-expire-date\" class=\"form-control\"\n                         [(ngModel)]=\"expire\">\n                </div>\n              </div>\n            </form>\n            <p class=\"red\">{{message}}</p>\n          </div>\n          <div class=\"card-footer\">\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\" (click)=\"createBorrow()\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/account/wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication__ = __webpack_require__("../../../../../src/app/services/authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_check_balance__ = __webpack_require__("../../../../../src/app/services/check-balance.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_credit_service__ = __webpack_require__("../../../../../src/app/services/credit.service.ts");
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
    function WalletComponent(authenticationService, checkBalanceService, creditService) {
        this.authenticationService = authenticationService;
        this.checkBalanceService = checkBalanceService;
        this.creditService = creditService;
        this.borrow = {};
        this.message = '';
        this.inDept = false;
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
        var _this = this;
        this.user = this.authenticationService.getUser();
        this.checkBalanceService.checkEthBalance(this.user.address, function (data) {
            _this.user.ethBalance = data.balance;
            /*if(data.balance.length > 18) {
                this.user.ethBalance = data.balance.slice(0, data.balance.length - 18);
            } else {
              this.user.ethBalance = '0.' + data.balance.slice(0, data.balance.length - 18);
            }*/
        }, function (err) { return console.error(err); });
        this.checkBalanceService.checkTokenBalance(this.user.address, function (data) { return _this.user.tokenBalance = data.balance; }, function (err) { return console.error(err); });
        console.log('user ' + JSON.stringify(this.user));
        // get user credit
        this.creditService.getCredits({
            where: {
                borrowerId: this.user['id']
            }
        }, function (credits) {
            if (credits.length > 0) {
                _this.inDept = true;
            }
            else {
                _this.inDept = false;
            }
        }, function (err) {
            console.error(err);
        });
    };
    // events
    WalletComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    WalletComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    WalletComponent.prototype.createBorrow = function () {
        if (!this.borrow['amount'] || !this.borrow['rate'] || !this.borrow['period'] || !this['expire']) {
            this.message = 'Please fill in all fields';
            return;
        }
        this.message = '';
        this.borrow['expire'] = new Date(parseInt(this['expire'].slice(0, 4)), parseInt(this['expire'].slice(5, 7)) - 1, parseInt(this['expire'].slice(8, 10))).getTime() / 1000;
        this.borrow['borrowerName'] = 0;
        this.creditService.createCredit(this.borrow, function (borrow) {
            console.log(borrow);
        }, function (err) {
            console.error(err);
        });
    };
    WalletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/account/wallet.component.html"),
            styles: ['.red {color: red;}']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__services_check_balance__["a" /* CheckBalanceService */],
            __WEBPACK_IMPORTED_MODULE_3__services_credit_service__["a" /* CreditService */]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map