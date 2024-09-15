import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asenkron Thunk Aksiyonu
// İçerisinde API isteği atarız devamında ise api isteğini aşamalrını otomatik olarak store aksiyonlar aracılığı ile bildirir

export const getUsers = createAsyncThunk("updated/getUsers", async () => {
  // asenkron işlem
  const res = await axios.get("https://dummyjson.com/users");

  // payloadd'ı return ederiz
  return res.data.users;
});

/* 
 createAsyncThunk api isteğinin atılmasıyla birlikte oto. olarak:
 istek atıldığı anda pending
 veri geldiği anda fulfilled
 hata geldiği anda rejected
 aksiyonlarını tetikler
*/
