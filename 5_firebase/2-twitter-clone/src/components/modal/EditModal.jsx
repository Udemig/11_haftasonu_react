import { doc, updateDoc } from "firebase/firestore";
import Modal from "./index";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import uploadToStorage from "../../firebase/uploadToStorage";

const EditModal = ({ isOpen, close, tweet }) => {
  const [isPicDeleting, setIsPicDeleting] = useState(false);

  // dökümanı güncelle
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verilere eriş
    const text = e.target[0].value;
    const file = e.target[1].files?.[0];

    // güncellenicek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    // güncellenicek değerleri belirler
    let updatedData = { textContent: text, isEdited: true };

    if (isPicDeleting) {
      // eğer kullanıcı resmi silmek istiyorsa:
      updatedData.imageContent = null;
      setIsPicDeleting(false);
    }

    if (file) {
      // yeni resim seçildiyse:
      const imageUrl = await uploadToStorage(file);
      updatedData.imageContent = imageUrl;
    }

    // dökümanı güncelle
    updateDoc(tweetRef, updatedData)
      .then(() => {
        toast.success("İçerik güncellendi");

        close();
      })
      .catch(() => {
        toast.error("Bir sorun olultur");
      });
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <h1 className="text-2xl">Tweet'i düzenle</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-10">
        <label>İçeriği Değiştir</label>
        <input
          defaultValue={tweet.textContent}
          type="text"
          className="mt-3"
        />

        <label className="mt-10 mb-2">Fotoğraf Ekle / Değiştir</label>

        {/* Resim mvcutsa ve silme işlemi seçilmemişse */}
        {!isPicDeleting && tweet.imageContent ? (
          <button
            onClick={() => setIsPicDeleting(true)}
            className="bg-orange-500"
          >
            Resmi Kaldır
          </button>
        ) : (
          <input type="file" name="file" />
        )}

        <div className="flex justify-end gap-5 mt-10">
          <button
            onClick={close}
            type="button"
            className="bg-gray-500 hover:bg-gray-600 transition"
          >
            Vazgeç
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 transition">
            Kaydet
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
