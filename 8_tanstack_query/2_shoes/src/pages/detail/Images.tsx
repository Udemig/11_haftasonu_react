const Images = ({ images }: { images: string[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-[48px] h-fit">
      {images.map((url, key) => (
        <img src={url} key={key} />
      ))}
    </div>
  );
};

export default Images;
