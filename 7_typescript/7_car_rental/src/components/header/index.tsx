import { Link } from "react-router-dom";
import Button from "../button";

const Header = () => {
  return (
    <header className="w-full z-10">
      <div className="max-width flex justify-between items-center px-6 py-4">
        <Link to={"/"}>
          <img alt="gray and blue bmw logo" width={50} src="/bmw.png" />
        </Link>

        <Button title="Kaydol" designs="min-w-[130px]" />
      </div>
    </header>
  );
};

export default Header;
