const Label = () => {
  console.log("label bilşeni render edildi");

  return (
    <div>
      <h1>Label</h1>

      <span className="bg-blue-500 px-3 py-1 rounded-md text-base font-semibold">
        server component
      </span>
    </div>
  );
};

export default Label;
