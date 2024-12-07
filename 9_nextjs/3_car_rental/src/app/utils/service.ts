import { CarType } from "/src/app/utils/types";

type DetailRes = Promise<{
  message: string;
  vehicle: CarType;
}>;

export const getDetail = async (id: string): DetailRes => {
  const res = await fetch(`http://localhost:3001/api/vehicles/${id}`);

  if (!res.ok) throw new Error("Detay verileri alınamadı");

  return res.json();
};

type CarsRes = Promise<{
  message: string;
  data: CarType[];
}>;

export const getCars = async (): CarsRes => {
  const res = await fetch("http://localhost:3001/api/vehicles");

  if (!res.ok) {
    throw new Error("Araçları alırken bir hata oluştu");
  }

  return res.json();
};
