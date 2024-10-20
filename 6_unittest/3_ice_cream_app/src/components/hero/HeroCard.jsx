const Button = ({ icon }) => {
  return (
    <button className="border rounded-[16px] p-[14px] border-white/50 bg-white/15 hover:bg-white/40 transition">
      <img src={icon} />
    </button>
  );
};

const HeroCard = () => {
  return (
    <div>
      <div className="flex gap-[23px]">
        <div className="bg-white p-[30px_25px_40px_30px] rounded-2xl text-black">
          <div className="flex gap-[20px]">
            <img src="/profile.png" />

            <div>
              <h3 className="text-[24px] font-semibold">Uzi Nexus</h3>
              <div className="flex gap-1">
                <img src="/star.svg" />
                <img src="/star.svg" />
                <img src="/star.svg" />
                <img src="/star.svg" />
              </div>
            </div>
          </div>

          <p className="mt-[15px] lg:max-w-[276px]">
            Indulge in frozen bliss with our irresistible ice cream delights!
          </p>
        </div>
        <img src="/dots.svg" />
      </div>

      <div className="mt-[40px] lg:mt-[83px]">
        <h3 className="mb-[15px] fs-5 font-medium">Kategori Seçiniz:</h3>
        <div className="flex gap-[40px]">
          <Button icon={'/icon-3.svg'} />
          <Button icon={'/icon-2.svg'} />
          <Button icon={'/icon-1.svg'} />
          <Button icon={'/icon-4.svg'} />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
