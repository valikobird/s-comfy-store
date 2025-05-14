const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input
        type={type}
        name={name}
        className="input"
        defaultValue={defaultValue}
      />
    </fieldset>
  );
};

export default FormInput;
