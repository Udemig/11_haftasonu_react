const Error = ({ message }) => {
  return (
    <div className="my-5 text-center px-4">
      <h3>Üzgünüz bir hata meydana geldi!</h3>
      <h4 className="text-warning">{message}</h4>
    </div>
  );
};

export default Error;
