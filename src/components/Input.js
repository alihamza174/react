

export const Input = ({label, type, id, placeholder}) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
    </>
  )
}

export default Input;