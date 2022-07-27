import "./Home.css";

export default function Home() {
  return (
    <div className="container-home">
      <img
        src="https://enlacocina.telemesa.es/wp-content/uploads/2021/04/%C2%BFQue-se-hace-con-el-desperdicio-de-alimentos-de-hoteles-1024x576.jpg.webp"
        alt="cabecera"
      ></img>
      <div className="container-home-menu">
        <h1 className="title-home">MENU'S WORLD</h1>
        <h2 className="p-home">
          Bienvenido a la pagina que busca mejorar tu experiencia digital de
          consulta de menus. Puedes elegir registrarte o ir directamente a ver
          los menu
        </h2>

        <button type="button" className="btn-home">
          Buscar un platillo
        </button>

        <button type="button" className="btn-home">
          Registrarme
        </button>
      </div>
      <img
        src="https://www.lifeder.com/wp-content/uploads/2018/04/Nuestra-comida-deberia-ser-nuestra-medicina-y-nuestra-medicina-deberia-ser-nuestra-comida.-min.jpg"
        alt="footer"
      ></img>
    </div>
  );
}
