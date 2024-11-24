import { useState } from "react";
import Buttons from "../../components/buttons";
import Filter from "../../components/filter";
import Hero from "../../components/hero";
import List from "../../components/list";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Hero />

      <Buttons open={() => setIsOpen(true)} />

      <h1 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-semibold mb-4 md:mt-[28px] xl:mt-[32px]">
        Sana Uygun Seçenekler
      </h1>

      <div className="grid grid-cols-4 gap-5">
        <div className={isOpen ? "block" : "max-lg:hidden"}>
          <Filter close={() => setIsOpen(false)} />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
