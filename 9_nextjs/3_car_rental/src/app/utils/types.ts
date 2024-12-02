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
