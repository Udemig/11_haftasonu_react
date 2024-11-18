const Features = ({ array }: { array: string[] }) => {
  return (
    <div className="mt-5 grid gap-3">
      <h2 className="text-xl font-bold">Popüler konaklama yeri imkan ve özellikleri</h2>

      <div className="grid grid-cols-2 gap-4">
        {array.map((i, key) => (
          <span
            className="border border-zinc-100 py-1 px-2 rounded-md  shadow-sm"
            key={key}
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
