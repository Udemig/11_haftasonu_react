const Error = ({ msg }) => {
  return (
    <div className="loader-wrapper">
      <div className="error">
        <h3>Üzgünüz bir sorun oluştu</h3>

        <p>{msg}</p>
      </div>
    </div>
  );
};

export default Error;
