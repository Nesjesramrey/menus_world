import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { retrieve as retrieveDish } from "../../services/menus";

// API functions
import { deleteDish } from "../../services/menus";

// CSS
import "./Delete.css";

export default function DishDelete() {
  // Local state
  const [dish, setDish] = useState(null);

  const querystring = window.location.search;
  console.log(querystring);
  const params = new URLSearchParams(querystring);
  const id = params.get("id");

  const navigate = useNavigate();

  useEffect(() => {
    const getDish = async () => {
      const data = await retrieveDish(id);
      setDish(data);
    };

    getDish();
  }, [id]);

  const handleClick = (event) => {
    event.preventDefault();
    deleteDish(id);
  };

  return (
    <div className="container container-delete">
      <div className="row justify-content-center">
        <div className="col-8 col-md-12 ">
          <div className="card">
            <h2 className="title-delete">
              ¿Estas seguro que deseas eliminar el platillo?
            </h2>
            {!dish ? (
              <p>Cargando</p>
            ) : (
              <div className="card-body py-md-4">
                <p>{dish.dishName}</p>
                <button className="btn-delete" onClick={() => navigate(-1)}>
                  Regresar
                </button>
                <button className="btn-delete" onClick={handleClick}>
                  Eliminar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
