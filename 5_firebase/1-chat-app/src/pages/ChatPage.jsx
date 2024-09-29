import { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import Message from "../components/Message";
import EmojiPicker from "emoji-picker-react";

const ChatPage = ({ room, setRoom }) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // son mesajın referansını
  const lastMsg = useRef();

  // mesajı veritbanına kaydet
  const handleSubmit = async (e) => {
    e.preventDefault();

    // emoji picker'ı kapat
    setIsOpen(false);

    // formu temizle
    setText("");

    // mesaj boş mu kontrol et
    if (text.trim() === "") return;

    // mesaj document'in kaydedileceği kolleksiyonun refransını al
    const messagesCol = collection(db, "messages");

    // referansı alınan kolleksiyona document'ı ekle
    await addDoc(messagesCol, {
      text,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };

  // mevcut odada gönderilen mesajları anlık olarak al
  useEffect(() => {
    // 1) abone olunucak kolleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    // 2) sorgu ayarlını yap (filtreleme ve sıralama)
    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    // 3) onSnapshot: anlık olarak kolleksiyondaki değişimleri izler.Kolleksiyon her değiştiğinde callback fn tetikler ve bu fn parametre olarak kolleksiyondaki veriyi alır.
    const unsub = onSnapshot(q, (data) => {
      // mesajların geçici olarak tutulduğu dizi
      let temp = [];

      // data(): dökümanın içerisindeki veriye erişmemizi sağlar
      data.docs.forEach((doc) => {
        temp.push(doc.data());
      });

      // mesajları state'e aktar
      setMessages(temp);
    });

    // 4) kullanıcı sayfadan ayrılınca aboneliği durdur
    return () => {
      unsub();
    };
  }, []);

  // her yeni mesaj eklendiğine:
  useEffect(() => {
    // ekrana son mesaj gelene kadar kaydır
    lastMsg.current.scrollIntoView();
  }, [messages]);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser.displayName}</p>

        <p>{room}</p>

        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>

      <main>
        {messages.length < 1 ? (
          <div className="warn">
            <p>Sohbete ilk mesajı gönderin</p>
          </div>
        ) : (
          messages.map((data, key) => <Message key={key} data={data} />)
        )}

        <div ref={lastMsg} />
      </main>

      <form onSubmit={handleSubmit} className="message-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="mesajınızı yazınız"
          type="text"
        />
        <div>
          <EmojiPicker
            onEmojiClick={(e) => {
              setText(text + e.emoji);
            }}
            open={isOpen}
            skinTonePickerLocation="PREVIEW"
          />

          <button onClick={() => setIsOpen(!isOpen)} type="button">
            😉
          </button>
        </div>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
