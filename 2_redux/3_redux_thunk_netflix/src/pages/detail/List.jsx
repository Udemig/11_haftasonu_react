const List = ({ title, arr }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <div className="flex flex-wrap gap-5">
        {arr?.map((item, key) => (
          <span key={key} className="border py-1 px-2 rounded-md">
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default List;
