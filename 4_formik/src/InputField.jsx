const InputField = ({ formik, label, name, type = "text" }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        name={name}
        className={`form-control ${formik.errors[name] && "is-invalid"}`}
        type={type}
        onChange={formik.handleChange}
      />

      <label className="feedback">{formik.errors[name]}</label>
    </div>
  );
};

export default InputField;
