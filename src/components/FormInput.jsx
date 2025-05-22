const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <fieldset className="fieldset">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        className={`input w-full ${size ? size : ""}`}
        defaultValue={defaultValue}
      />
    </fieldset>
  );
};

export default FormInput;
