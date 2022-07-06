export default function Menu() {
  return (
    <div>
      <nav className="slider">
        <div className="slide-track">
          <div className="slide">
            <span className="slide-menu">Entradas</span>
          </div>
          <div className="slide">
            <span className="slide-menu">Ensaladas</span>
          </div>
          <div className="slide">
            <span className="slide-menu">Cortes</span>
          </div>
          <div className="slide">
            <span className="slide-menu">Bebidas</span>
          </div>
          <div className="slide"></div>
        </div>
      </nav>

      <div className="mainContainer">
        <div className="">
          <div className="container">
            <div className="card-menu">
              <div className="name-food">
                AGUACHILE DE CAMARÓN TRADICIONAL O TATEMADO (180 G)
              </div>
              <p className="description-food">
                Chile verde, cilantro, pepino, cebolla y limon
              </p>
            </div>

            <div className="card-menu">
              <div className="name-food">
                CAZUELA DE CAMARONES AL AJILLO (180 g)
              </div>
              <p className="description-food">
                Toque de mezcal, papa cambray al josper y chile guajillo
              </p>
            </div>
            <div className="card-menu">
              <div className="name-food">CAZUELA DE LENGUA (250 G)</div>
              <p className="description-food">
                En salsa gravy, con cilantro y cebolla cambray
              </p>
            </div>
            <div className="card-menu">
              <div className="name-food">
                COLIFLOR ROSTIZADA (500 g) <span className="">NUEVO</span>
              </div>
              <p className="description-food">
                Al josper con mantequilla clarificada y salsa de quesos con
                trufa
              </p>
            </div>

            <div className="card-menu">
              <div className="name-food">CARNITAS DE RIB EYE PRIME (200 g)</div>
              <p className="description-food">
                Con guacamole y cebollas cambras
              </p>
            </div>

            <div className="card-menu">
              <div className="name-food">TRIPITAS DE LECHE (180 g) </div>
              <p className="description-food">Al ajillo con pico de gallo</p>
            </div>
            <div className="card-info-menu">
              <li>LA PROPINA NO ES OBLIGATORIA.</li>
              <li>
                ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y
                AMERICAN EXPRESS.
              </li>
              <li>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
