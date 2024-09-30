import { auth } from "../../firebase";

const Dropdown = ({ tweet }) => {
  // tweet'i gönderen kişi ile şuan oturumu açık olan kişinin id'si aynı mı?
  const isOwn = tweet.user.id === auth.currentUser.uid;

  return isOwn && <div>|||</div>;
};

export default Dropdown;
