var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VehiclePurchase = /** @class */ (function () {
    function VehiclePurchase(noPoliceRegister, vehicleType, year, price, tax, seat) {
        this.noPoliceRegister = noPoliceRegister;
        this.vehicleType = vehicleType;
        this.year = year;
        this.price = price;
        this.tax = tax;
        this.seat = seat;
    }
    return VehiclePurchase;
}());
// class Income {
//   transactionDate: Date;
//   rent?: number;
//   driver?: number;
//   order?: number;
//   orderPerKM?: number;
//   total: number;
// }
var vehicle1 = new VehiclePurchase("D 1001 UM", "SUV", 2010, 350000000, 3500000, 4);
var vehicle2 = new VehiclePurchase("D 1002 UM", "SUV", 2010, 350000000, 3500000, 4);
var vehicle3 = new VehiclePurchase("D 1003 UM", "SUV", 2015, 350000000, 3500000, 5);
var vehicle4 = new VehiclePurchase("D 1004 UM", "SUV", 2010, 350000000, 3500000, 5);
var vehicle5 = new VehiclePurchase("D 11 UK", "Taxi", 2002, 175000000, 1750000, 4);
var vehicle6 = new VehiclePurchase("D 12 UK", "Taxi", 2015, 225000000, 2250000, 4);
var vehicle7 = new VehiclePurchase("D 13 UK", "Taxi", 2020, 275000000, 2750000, 4);
var vehicle8 = new VehiclePurchase("ID8089", "PrivateJet", 2015, 150000000000, 1500000000, 12);
var vehicle9 = new VehiclePurchase("ID8099", "PrivateJet", 2018, 175000000000, 1750000000, 15);
var InfoSummary = /** @class */ (function (_super) {
    __extends(InfoSummary, _super);
    function InfoSummary(noPoliceRegister, vehicleType, year, price, tax, seat) {
        var _this = _super.call(this, noPoliceRegister, vehicleType, year, price, tax, seat) || this;
        _this.vehicles = [];
        return _this;
    }
    InfoSummary.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    InfoSummary.prototype.getTotalVehicle = function () {
        return this.vehicles.length;
    };
    return InfoSummary;
}(VehiclePurchase));
console.log(InfoSummary.getTotalVehicle());
