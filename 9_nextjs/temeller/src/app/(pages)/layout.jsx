import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: { default: "Amazon", template: "Amazon - %s " },
  description: "En iyiler burada....",
};

// HOC - Higher Order Components
// Projedeki bütün sayfaları children propu olarak alır
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased h-screen flex flex-col text-3xl font-semibold`}>
        <Header />

        <main className="bg-zinc-900 flex-1 flex justify-center items-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
