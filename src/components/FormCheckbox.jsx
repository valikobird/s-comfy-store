const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="fieldset flex flex-col sm:items-center">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};

export default FormCheckbox;
