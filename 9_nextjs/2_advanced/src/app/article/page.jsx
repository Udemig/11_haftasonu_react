import { geistSans, jedi } from "../layout";

const Page = (props) => {
  return (
    <div className="p-5 flex flex-col gap-10">
      <div>
        <h1 style={jedi.style} className="text-xl mb-3 font-semibold">
          Verimli Çalışma İçin Pomodoro Tekniği
        </h1>
        <p className={geistSans.className}>
          Pomodoro tekniği, çalışma süresini 25 dakikalık periyotlara
          (pomodoro) bölerek kısa molalarla destekleyen bir zaman
          yönetimi yöntemidir. 25 dakikalık odaklanmanın ardından 5
          dakikalık kısa bir mola verilir. Dört pomodorodan sonra daha
          uzun, 15-30 dakikalık bir mola yapılır.{" "}
        </p>
      </div>

      <div>
        <h1 style={jedi.style} className="text-xl mb-3 font-semibold">
          Next.js ve SEO Uyumlu Web Siteleri
        </h1>
        <p className={geistSans.className}>
          Next.js, sunucu taraflı render (SSR) ve statik site üretimi
          (SSG) özellikleri sayesinde SEO dostu web siteleri
          oluşturmayı kolaylaştırır. Arama motorları, SSR sayesinde
          sayfa içeriklerini daha hızlı tarayabilir. Ayrıca
          getStaticProps ve getServerSideProps gibi yöntemlerle
          dinamik veri çekerek sayfa içeriğini önceden oluşturmak
          mümkündür.
        </p>
      </div>

      <div>
        <h1 style={jedi.style} className="text-xl mb-3 font-semibold">
          MongoDB ile Veritabanı Performansını Artırma İpuçları
        </h1>
        <p className={geistSans.className}>
          Başlık: MongoDB Performansını Artırmak İçin 3 Temel Strateji
          İçerik: MongoDB'de veritabanı performansını artırmak için şu
          stratejiler izlenebilir: Doğru İndeksleme: Sık kullanılan
          sorgular için indeksler oluşturmak, arama işlemlerini
          hızlandırır. Özellikle compound indexes kullanmak karmaşık
          sorgularda faydalıdır.
        </p>
      </div>
    </div>
  );
};

export default Page;
