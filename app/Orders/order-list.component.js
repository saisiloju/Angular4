"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("./order.service");
var OrderListComponent = (function () {
    function OrderListComponent(_orderService) {
        this._orderService = _orderService;
        this.Rating = "5star";
        this.showImage = false;
        this.pagetitle = 'Order List';
    }
    OrderListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._orderService.getOrders()
            .subscribe(function (orders) { return _this.orders = orders; }, function (error) { return _this.errorMessage = error; });
    };
    OrderListComponent.prototype.onRatingClicked = function (message) {
        this.Rating = message;
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'pm-order',
            templateUrl: 'app/orders/order-list.component.html',
            styleUrls: ['app/orders/order-list.component.css']
        }),
        __metadata("design:paramtypes", [order_service_1.OrderService])
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map