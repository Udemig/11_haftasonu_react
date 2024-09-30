import Buttons from "./Buttons";
import Content from "./Content";
import Dropdown from "./Dropdown";
import UserInfo from "./UserInfo";

const Post = ({ tweet }) => {
  return (
    <div className="p-5 border-b border-zinc-600 flex gap-3">
      <img
        src={tweet.user.photo}
        alt="profile"
        className="size-12 rounded-full"
      />

      <div className="w-full">
        <div className="flex justify-between">
          <UserInfo tweet={tweet} />
          <Dropdown tweet={tweet} />
        </div>

        <Content tweet={tweet} />

        <Buttons tweet={tweet} />
      </div>
    </div>
  );
};

export default Post;
