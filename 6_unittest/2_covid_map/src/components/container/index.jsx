const Container = ({ children, designs }) => {
  return (
    <div
      className={`max-w-[1200px] mx-auto px-10 md:px-20 py-5 ${designs}`}
    >
      {children}
    </div>
  );
};

export default Container;
