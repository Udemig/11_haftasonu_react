type Props = {
  children: JSX.Element | JSX.Element[];
};

const TableContainer = ({ children }: Props) => {
  return (
    <div className="max-sm:w-[80vw] overflow-x-auto">
      <table border={4} className="border shadow w-full bg-white rounded-md mt-5 z-0">
        {children}
      </table>
    </div>
  );
};

export default TableContainer;
