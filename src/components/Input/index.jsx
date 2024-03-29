// CSS
import "./Input.css";

export default function Input({
  className,
  placeholder,
  value,
  callback,
  type = "text",
}) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={callback}
    />
  );
}
