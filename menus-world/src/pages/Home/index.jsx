import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">MENU'S WORLD</h1>
      <h2 className="subtitle">Hola</h2>
      <p>
        Bienvenido a la pgina que busca mejorar tu experiencia digital de
        consulta de menus. Puedes elegir registrarte o ir directamente a ver los
        menu
      </p>

      <button type="button" className="button search-meal">
        {" "}
        Buscar un platillo
      </button>

      <button type="button" className="button register">
        {" "}
        Registrarme
      </button>
    </div>
  );
}
