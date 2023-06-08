class VehiclePurchase {
  noPoliceRegister: string;
  vehicleType: string;
  year: number;
  price: number;
  tax: number;
  seat: number;

  constructor(
    noPoliceRegister: string,
    vehicleType: string,
    year: number,
    price: number,
    tax: number,
    seat: number
  ) {
    this.noPoliceRegister = noPoliceRegister;
    this.vehicleType = vehicleType;
    this.year = year;
    this.price = price;
    this.tax = tax;
    this.seat = seat;
  }
}

class Income {
  transactionDate: Date;
  rent?: number;
  driver?: number;
  order?: number;
  orderPerKM?: number;
  total: number;

  constructor(
    transactionDate: Date,
    rent: number,
    driver: number,
    order: number,
    orderPerKM: number,
    total: number
  ) {
    this.transactionDate = transactionDate;
    this.rent = rent;
    this.driver = driver;
    this.order = order;
    this.orderPerKM = orderPerKM;
    this.total = total;
  }

  getTotalIncome() {
    return;
  }
}
const vehicle1 = new VehiclePurchase(
  "D 1001 UM",
  "SUV",
  2010,
  350000000,
  3500000,
  4
);
const vehicle2 = new VehiclePurchase(
  "D 1002 UM",
  "SUV",
  2010,
  350000000,
  3500000,
  4
);
const vehicle3 = new VehiclePurchase(
  "D 1003 UM",
  "SUV",
  2015,
  350000000,
  3500000,
  5
);
const vehicle4 = new VehiclePurchase(
  "D 1004 UM",
  "SUV",
  2010,
  350000000,
  3500000,
  5
);
const vehicle5 = new VehiclePurchase(
  "D 11 UK",
  "Taxi",
  2002,
  175000000,
  1750000,
  4
);
const vehicle6 = new VehiclePurchase(
  "D 12 UK",
  "Taxi",
  2015,
  225000000,
  2250000,
  4
);
const vehicle7 = new VehiclePurchase(
  "D 13 UK",
  "Taxi",
  2020,
  275000000,
  2750000,
  4
);
const vehicle8 = new VehiclePurchase(
  "ID8089",
  "PrivateJet",
  2015,
  150000000000,
  1500000000,
  12
);
const vehicle9 = new VehiclePurchase(
  "ID8099",
  "PrivateJet",
  2018,
  175000000000,
  1750000000,
  15
);

class InfoSummary extends VehiclePurchase {
  vehicles: VehiclePurchase[];
  suvVehicles: VehiclePurchase[];

  constructor(
    noPoliceRegister: string,
    vehicleType: string,
    year: number,
    price: number,
    tax: number,
    seat: number
  ) {
    super(noPoliceRegister, vehicleType, year, price, tax, seat);
    this.vehicles = [];
    this.suvVehicles = [];
  }

  addVehicle(vehicle: VehiclePurchase): void {
    this.vehicles.push(vehicle);
  }

  getTotalVehicle(): number {
    return this.vehicles.length;
  }

  addSUVVehicle(suv: VehiclePurchase): void {
    if (suv.vehicleType === "SUV") {
      this.suvVehicles.push(suv);
    }
  }

  getTotalVehicleSUV(): number {
    return this.suvVehicles.length;
  }
}

// console.log(InfoSummary.getTotalVehicle());
