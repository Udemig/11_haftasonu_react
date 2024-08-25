const Form = ({ setSearchTerm }) => {
  // form gönderilme olayında çalışan fonksiyon
  const handleSubmit = (e) => {
    // sayfa yanilenmesini engelle
    e.preventDefault();

    // inputta yazın yazıya eriş
    const text = e.target[0].value;

    // aratılan metni state'e aktar
    setSearchTerm(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-5 d-flex justify-content-center gap-2"
    >
      <input className="form-control" type="text" />
      <button className="btn btn-primary">Ara</button>
    </form>
  );
};

export default Form;
