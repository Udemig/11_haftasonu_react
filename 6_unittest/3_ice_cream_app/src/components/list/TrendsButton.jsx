const TrendsButton = () => {
  return (
    <div className="flex justify-end ">
      <button className="bg-white rounded-full px-4 py-1 pr-12 flex items-center gap-2 text-[20px] lg:text-[24px] font-semibold text-black relative hover:bg-white/75 transition">
        Trendler
        <img className="absolute end-0 bottom-1 size-[45px]" src="/fire.png" />
      </button>
    </div>
  );
};

export default TrendsButton;
