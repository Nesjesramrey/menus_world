import "./Form.css";

export default function Form() {
  return (
    <div className="container">
      <h1 className="title">MENU'S WORLD</h1>
      <h2 className="subtitle">Formulario de registro</h2>
      <p>Hola aqui puedes registrar tu menu</p>

      <label className="label_form">Platillo:</label>
      <input className="input_form" type="text" id="meal" name="meal" />

      <label className="label_form">Categoria del platillo:</label>
      <input className="input_form" type="text" id="category" name="category" />

      <label className="label_form">Descripcion:</label>
      <input
        className="input_form"
        type="text"
        id="description"
        name="description"
      />

      <label className="label_form">Precio:</label>
      <input className="input_form" type="number" id="price" name="price" />

      <button className="button_form">Registrar platillo</button>

      <div className="instructions">
        <ul>
          <li>
            <strong>Platillo:</strong> Nombre del platillo como aparece en su
            carta
          </li>
          <li>
            <strong>Categoria del latillo:</strong> Aqui tienes que especificar
            si es una entreda, corte, postre, bebida o las categorias que ya
            tengas definidas
          </li>
          <li>
            <strong>Descripcion:</strong> Aqui puedes describir los ingredientes
            principales asi como los gramajes de tus platillos
          </li>
          <li>
            <strong>Precio:</strong> Precio incluyendo los impuestos aplicables
            de tu localidad
          </li>
        </ul>
      </div>
    </div>
  );
}
