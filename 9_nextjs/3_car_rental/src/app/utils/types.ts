export type CarType = {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  color: string;
  mileage: number;
  fuelType: string;
  transmission: "Automatic" | "Manual";
  condition: "Used" | "New";
  imageUrl: string;
};

export type OrderType = {
  _id: string;
  product: CarType;
  money_spend: number;
  currency: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
};
