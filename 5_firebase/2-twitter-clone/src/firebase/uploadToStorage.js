import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from ".";
import { v4 } from "uuid";
import { toast } from "react-toastify";

// bu fonksiyondan beklentimiz dosyası alıp storage'a yükleyip ardından storage'daki url'i return etmesi

const uploadToStorage = async (file) => {
  // 1) dosya resim değilse veya dosya yoksa fonksiyonu durdur
  if (!file || !file.type.startsWith("image")) return null;

  // 2) maksimum dosya boyutunu belirle
  if (file.size > 2097152) {
    toast.warning("Lütfen 2mb altında medya yükleyin");
    return null;
  }

  // 3) dosyanın yükleniceği konumun referansını al
  const imageRef = ref(storage, v4() + file.name);

  // 4) referansını oluşturduğumuz konuma dosyayı yükle
  await uploadBytes(imageRef, file);

  // 5) yüklenen dosyanın url'ini al ve return et
  const url = await getDownloadURL(imageRef);

  return url;
};

export default uploadToStorage;
