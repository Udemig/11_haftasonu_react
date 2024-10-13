const HeaderLoader = () => {
  return (
    <div data-testid="header-loader" className="flex items-center gap-2">
      <div className="bg-gray-300 h-10 w-[120px] rounded-md animate-pulse"></div>
      <div className="bg-gray-300 w-16 h-10 rounded-md animate-pulse"></div>
    </div>
  );
};

export default HeaderLoader;
