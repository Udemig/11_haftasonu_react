import axios from "axios";
import { Params } from "react-router-dom";
import { PlaceData } from "../types";

// axios ayarları
export const api = axios.create({ baseURL: "http://localhost:4001" });

// bütün konaklama alanlarını getiren fn
export const getPlaces = (params?: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);

// yeni bir konaklama alanı oluştur
export const createPlace = (body: PlaceData) => api.post("/api/places", body);

// bir konaklama alanını al
export const getPlace = (id: string) =>
  api.get(`/api/place/${id}`).then((res) => res.data.place);

// bir konaklama alanını sil
export const deletePlace = (id: string) => api.delete(`/api/place/${id}`);
