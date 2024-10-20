import { useState } from 'react';
import Selector from './Selector';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(null);

  const handleClick = () => {
    // store'a haber ver
    dispatch(addToCart({ item, selectedType }));

    // seçeneği temizle
    setSelectedType(null);
  };

  return (
    <div className="bg-black/20  border border-white/50 rounded-[24px] pl-[10px] pr-[20px] py-[30px] flex gap-[15px] lg:gap-[30px]">
      <div className="flex items-center">
        <img
          className="w-[100px] md:w-[150px] drop-shadow-2xl"
          src={item.image}
        />
      </div>

      <div className="flex-1">
        <h2 className="text-[24px] font-medium">{item.name}</h2>

        <p className="mt-5">Sipariş Tipi:</p>

        <Selector
          setSelectedType={setSelectedType}
          selectedType={selectedType}
        />

        <div className="mt-6 flex justify-between">
          <p className="text-lg">₺{item.price} / top</p>

          <button
            onClick={handleClick}
            className={`border py-1 px-3 rounded-md hover:bg-white/30 transition ${
              !selectedType && 'invisible'
            }`}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
