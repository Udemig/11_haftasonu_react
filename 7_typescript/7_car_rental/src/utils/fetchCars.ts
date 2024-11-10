import { CarType } from "../types";

const options = {
  headers: {
    "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

// gelen parametrelerin tipini tanımla
type Parameters = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};

// Asenkron fonksiyonların return tipinde doğrudan fonksiyonun return ettiği veriyi yazamayız. Fonksiyonların hata döndrime ihtimalinide göze alarak ts'in içerisinde bulunan Promise tipine return verimiz generic olarak gönderilmeli
export const fetchCars = async ({
  limit,
  make = "bmw",
  model = "",
  fuel_type = "",
  year = "",
}: Parameters): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;

    const res = await fetch(url, options);

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Verileri alırken sorun oluştu");
  }
};
