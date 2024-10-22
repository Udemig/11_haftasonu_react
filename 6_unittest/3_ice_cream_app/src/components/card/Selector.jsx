const Selector = ({ selectedType, setSelectedType }) => {
  return (
    <div className="flex mt-3 gap-5">
      <button
        className={`flex-1 border rounded-md py-2 px-4 text-center hover:bg-white/30 cursor-pointer transition ${
          selectedType === 'cornet' && 'bg-white text-black shadow-lg'
        }`}
        onClick={() => setSelectedType('cornet')}
      >
        Külahta
      </button>

      <button
        className={`flex-1 border rounded-md  py-2 px-4 text-center hover:bg-white/30 cursor-pointer  transition  ${
          selectedType === 'cup' && 'bg-white text-black shadow-lg'
        }`}
        onClick={() => setSelectedType('cup')}
      >
        Bardakta
      </button>
    </div>
  );
};

export default Selector;
