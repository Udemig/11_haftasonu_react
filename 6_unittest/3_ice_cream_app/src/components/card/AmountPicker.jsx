const AmountPicker = ({ amount, setAmount, selectedType }) => {
  return (
    <div
      className={`flex border rounded-md ${
        !selectedType && 'bg-white/30 blur-[0.7px]'
      }`}
    >
      <button
        disabled={amount === 0 || !selectedType}
        className="px-3  py-1 border-r hover:bg-white/30 transition"
        onClick={() => setAmount(amount - 1)}
      >
        -
      </button>

      <span className="w-8 text-center  py-1">{amount}</span>

      <button
        disabled={!selectedType}
        className="px-3  py-1 border-l hover:bg-white/30 transition"
        onClick={() => setAmount(amount + 1)}
      >
        +
      </button>
    </div>
  );
};

export default AmountPicker;
