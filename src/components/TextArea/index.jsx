import "./TextArea.css";

export default function TextArea({
  className,
  placeholder,
  value,
  callback,
  type = "text",
}) {
  return (
    <div>
      <textarea
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={callback}
      />
    </div>
  );
}
