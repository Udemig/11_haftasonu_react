import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/index";

export const getLangs = createAsyncThunk("lang/getLangs", async () => {
  // api isteği at
  const res = await api.get("/getLanguages");

  // gelen cevabı payload olarak belirle
  return res.data.data.languages;
});

export const translateText = createAsyncThunk(
  "translate/translateText",
  async (p) => {
    //* API'ye gönderilecek parametreleri belirle
    const data = new FormData();
    data.append("source_language", p.sourceLang.value);
    data.append("target_language", p.targetLang.value);
    data.append("text", p.text);

    //* API'ye istek at
    const res = await api.post("/translate", data);

    //* Payload'ı return et
    return res.data.data.translatedText;
  }
);
