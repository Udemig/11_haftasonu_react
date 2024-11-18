export const sortOptions = [
  {
    label: "Seçiniz",
    value: "",
  },
  {
    label: "Fiyat: düşükten yükseğe",
    value: "price-asc",
  },
  {
    label: "Fiyat: yüksekten düşüğe",
    value: "price-desc",
  },
  {
    label: "Reyting: düşükten yükseğe",
    value: "rating-asc",
  },
  {
    label: "Reyting: yüksekten düşüğe",
    value: "rating-desc",
  },
];

export const initialValues = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  rating: "",
  price_per_night: "",
  availability: false,
};

export const inputs = [
  {
    label: "Başlık",
    name: "name",
    placeholder: "ör: Seaside Villa",
  },
  {
    label: "Lokasyon",
    name: "location",
    placeholder: "ör: Ankara, Türkiye",
  },
  {
    label: "Adres",
    name: "address",
    placeholder: "ör: 123 Beach Road",
  },
  {
    label: "Açıklama",
    name: "description",
    placeholder: "ör: Deniz manzaralı villa",
  },
  {
    label: "Olanaklar",
    name: "amenities",
    placeholder: "ör: WiFi, Havuz, Klima",
  },
  {
    label: "Puan",
    name: "rating",
    placeholder: "ör: 4.5",
    type: "number",
  },
  {
    label: "Gecelik Fiyat",
    name: "price_per_night",
    placeholder: "ör: 150$",
    type: "number",
  },
  {
    label: "Uygunluk (Şuan müsait oda var mı ?)",
    name: "availability",
    placeholder: "",
    type: "checkbox",
  },
];
