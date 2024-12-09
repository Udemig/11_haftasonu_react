import { CarType, OrderType } from "@/app/utils/types";

type DetailRes = Promise<{
  message: string;
  vehicle: CarType;
}>;

export const getDetail = async (id: string): DetailRes => {
  const res = await fetch(`${process.env.BASE_API_URL}/api/vehicles/${id}`);

  if (!res.ok) throw new Error("Detay verileri alınamadı");

  return res.json();
};

type CarsRes = Promise<{
  message: string;
  data: CarType[];
}>;

export const getCars = async (): CarsRes => {
  const res = await fetch(`${process.env.BASE_API_URL}/api/vehicles`);

  if (!res.ok) {
    throw new Error("Araçları alırken bir hata oluştu");
  }

  return res.json();
};

type OrderRes = Promise<{
  text: string;
  orders: OrderType[];
}>;

export const getOrders = async (): OrderRes => {
  const res = await fetch(`${process.env.BASE_API_URL}/api/orders`);

  if (!res.ok) {
    throw new Error("Siparişleri alırken bir hata oluştu");
  }

  return res.json();
};
