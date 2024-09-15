import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/index";

export const getLangs = createAsyncThunk("lang/getLangs", async () => {
  // api isteği at
  const res = await api.get("/getLanguages");

  // gelen cevabı payload olarak belirle
  return res.data.data.languages;
});
