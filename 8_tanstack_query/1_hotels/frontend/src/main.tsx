import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// qyuery client classından örnek oluştur
const query = new QueryClient();

createRoot(document.getElementById("root")!).render(
  // query client sağlayısını kur
  <QueryClientProvider client={query}>
    <App />

    {/* bildirim */}
    <ToastContainer />

    {/* geliştirici araçları */}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
