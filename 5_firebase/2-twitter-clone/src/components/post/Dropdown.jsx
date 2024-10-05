import { MdEdit } from "react-icons/md";
import { auth, db } from "../../firebase";
import { FaTrash } from "react-icons/fa6";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState, useRef } from "react";
import EditModal from "../modal/EditModal";

const Dropdown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  // tweet'i gönderen kişi ile şuan oturumu açık olan kişinin id'si aynı mı?
  const isOwn = tweet.user.id === auth.currentUser.uid;

  // silme
  const handleDelete = () => {
    // silinecek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    // dökümanı kaldır
    deleteDoc(tweetRef)
      .then(() => toast.info("Tweet akıştan kaldırıldı"))
      .catch(() => toast.error("Bir sorun oluştu"));
  };

  return (
    isOwn && (
      <>
        <label class="popup">
          <input ref={inputRef} type="checkbox" />
          <div class="burger" tabindex="0">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav class="popup-window">
            <legend>Eylemler</legend>
            <ul>
              <li>
                <button onClick={() => setIsOpen(true)}>
                  <MdEdit className="text-blue-500" />
                  <span>Düzenle</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleDelete}>
                  <FaTrash className="text-red-500" />
                  <span>Sil</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <EditModal
          isOpen={isOpen}
          close={() => {
            inputRef.current.checked = false;
            setIsOpen(false);
          }}
          tweet={tweet}
        />
      </>
    )
  );
};

export default Dropdown;
