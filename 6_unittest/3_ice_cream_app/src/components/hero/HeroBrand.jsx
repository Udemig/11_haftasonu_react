const HeroBrand = () => {
  return (
    <div className="max-w-[660px] flex flex-col gap-[25px]">
      <h1 className="fs-1 font-semibold">Karadutlu Dondurma</h1>

      <p className="text-white/75 font-medium fs-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="flex gap-[40px]">
        <button className="w-[40%] fs-5 py-4 border rounded-[10px] hover:bg-white/30 transition">
          Sipariş Et
        </button>
        <button className="w-[40%] fs-5 bg-white/15 py-4 rounded-[10px] hover:bg-white/30 transition">
          Rezervasyon
        </button>
      </div>
    </div>
  );
};

export default HeroBrand;
