// CSS
import "./Select.css";

export default function Select({
  placeholder,
  value,
  callback,
  type = "text",
}) {
  return (
    <div className="select-child">
      <select
        type={type}
        className="select_form"
        placeholder={placeholder}
        value={value}
        onChange={callback}
      >
        <option value="Select">Selecciona una categoria</option>
        <option value="Entradas">Entradas</option>
        <option value="Ensaladas">Ensaladas</option>
        <option value="Sopas">Sopas</option>
        <option value="Pescados">Pescados</option>
        <option value="Cortes">Cortes</option>
        <option value="Snacks">Snacks</option>
        <option value="Bebidas no alcoholicas">Bebidas no alcoholicas</option>
        <option value="Bebidas alcoholicas">Bebidas alcoholicas</option>
        <option value="Postres">Postres</option>
      </select>
    </div>
  );
}
