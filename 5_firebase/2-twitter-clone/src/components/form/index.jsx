import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { toast } from "react-toastify";
import { db } from "../../firebase/index";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import uploadToStorage from "../../firebase/uploadToStorage";
import Loader from "../loader";

const Form = ({ user }) => {
  const [isLoading, setIsLoading] = useState();

  //form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    //1) inputlardaki verilere eriş
    const text = e.target[0].value.trim();
    const file = e.target[1].files[0];

    //2) yazı ve resim içeirği yoksa fonk. durdur
    if (!text && !file) return toast.warning("Lütfen içerik giriniz");

    setIsLoading(true);

    //3) resmi storage'a kaydet
    const url = await uploadToStorage(file);

    //4) kollkesiyonun referansını al
    const tweetsCol = collection(db, "tweets");

    //5) kolleksiyona yeni tweet belgesi ekle
    await addDoc(tweetsCol, {
      textContent: text,
      imageContent: url,
      isEdited: false,
      likes: [],
      user: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    setIsLoading(false);

    // 6) formu sıfırla
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-b border-zinc-600 p-5 flex gap-3 "
    >
      <img
        src={user?.photoURL}
        className="h-[35px] md:h-[45px] rounded-full mt-1"
        alt="profile pic"
      />

      <div className="w-full">
        <input
          className="w-full bg-transparent shadow-none mt-0 mb-2 md:text-lg text-gray-300"
          placeholder="Neler Oluyor?"
          type="text"
        />

        <div className="flex justify-between items-center">
          <input id="img" type="file" className="hidden" />

          <label htmlFor="img">
            <BsCardImage />
          </label>

          <button
            disabled={isLoading}
            className="bg-blue-600 px-3 py-2 rounded-full min-w-[85px] min-h-[40px] transition hover:bg-blue-800 grid place-items-center"
          >
            {isLoading ? <Loader /> : "Tweetle"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
