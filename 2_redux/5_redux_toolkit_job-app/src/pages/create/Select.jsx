const Select = ({ label, name, options, handleChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>

      <select id={label} name={name} onChange={handleChange}>
        <option value="">Seçiniz</option>

        {options.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
