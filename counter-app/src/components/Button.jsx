function Button({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ margin: "5px", padding: "8px 15px" }}>
      {label}
    </button>
  );
}

export default Button;