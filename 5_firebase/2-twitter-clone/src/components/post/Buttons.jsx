import {
  FaRetweet,
  FaRegHeart,
  FaHeart,
  FaShareNodes,
  FaRegComment,
} from "react-icons/fa6";
import { auth, db } from "../../firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

const Buttons = ({ tweet }) => {
  // oturumu açık olan kullanıcı bu tweet'i likeladı mı?
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  //like butonuna tıklanınca
  const toggleLike = async () => {
    // güncellenicek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    // kullanıcı likeladıysa:
    // use id'sini likes dizisinden kaldır
    // likelemadıysa user id'sini likes dizisine ekle
    await updateDoc(tweetRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="p-3 rounded-full cursor-pointer transition  hover:bg-blue-400/40">
        <FaRegComment />
      </div>

      <div className="p-3 rounded-full cursor-pointer transition  hover:bg-green-300/30">
        <FaRetweet />
      </div>

      <div
        onClick={toggleLike}
        className="p-3 rounded-full cursor-pointer transition  hover:bg-red-400/30 flex items-center gap-2"
      >
        {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}

        {tweet.likes.length}
      </div>

      <div className="p-3 rounded-full cursor-pointer transition  hover:bg-gray-400/30">
        <FaShareNodes />
      </div>
    </div>
  );
};

export default Buttons;
