import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { retrieve as retrieveDish } from "../../../services/menus";
import { deleteDish } from "../../../services/menus";

// CSS
import "./Delete.css";

export default function DishDelete() {
  // Local state
  const [dish, setDish] = useState(null);

  // RRD
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getDish = async () => {
      const data = await retrieveDish(id);
      setDish(data);
    };

    getDish();
  }, [id]);

  console.log(id);

  const handleClick = (event) => {
    event.preventDefault();
    deleteDish(id);
  };

  return (
    <div>
      <h2>¿Estas seguro que deseas eliminar el platillo?</h2>
      {!dish ? (
        <p>Cargando</p>
      ) : (
        <div>
          <p>{dish.dishName}</p>
          <p>{dish.description}</p>
          <p>{dish.price}</p>
          <button className="btn-3" onClick={() => navigate(-1)}>
            Regresar
          </button>
          <button className="btn-3" onClick={handleClick}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
