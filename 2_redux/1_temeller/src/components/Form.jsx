const Form = () => {
  return (
    <form className="d-flex gap-3 my-5">
      <input
        className="form-control"
        type="text"
        placeholder="örn: typescript projesi yap"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default Form;
