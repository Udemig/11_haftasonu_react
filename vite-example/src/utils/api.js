import axios from "axios";

// axios.create methodu axios'un bazı temel ayarlarını belirlediğimiz bir axios örneği oluşturur örneğin baseUrl'i belirleyerek bir örnek oluşturursak o axios örneği ile atığcıamız bütün api istekleri aynı baseUrl kullanılarak atılır

const api = axios.create({ baseURL: "http://localhost:4040" });

export default api;
