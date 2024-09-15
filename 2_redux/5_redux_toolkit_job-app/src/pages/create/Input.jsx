const Input = ({ label, name, handleChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>

      <input
        id={label}
        type="text"
        name={name}
        required
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
