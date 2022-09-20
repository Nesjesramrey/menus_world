import { useEffect, useState } from "react";
import { listRestaurant } from "../../services/restaurants";
import { useParams, useNavigate } from "react-router-dom";

//CSS
import "./Restaurants.css";

//Components
import RestaurantCard from "../../components/RestaurantCard";
import NavBar from "../../../src/components/NavBar";
import QrCode from "../../../src/components/QrCode";

//Cokkies for use name of restaurante and user category
import Cookies from "universal-cookie";

//Authorization
import { getIsUserAdmin, getIsLogeddIn } from "../../Auth/auth";

export default function Restaurants() {
  // Local state
  const [restaurants, setRestaurants] = useState([]);

  // RRD
  const { restaurantName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await listRestaurant(restaurantName);
      const parsedRestaurants = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setRestaurants(parsedRestaurants);
    };

    list();
  }, [restaurantName]);

  const cookies = new Cookies();
  cookies.set("EndpointRestaurant", restaurantName, { path: "/" });
  const userType = cookies.get("TipoUsuario");

  const cards = restaurants.map((restaurant, index) => (
    <RestaurantCard restaurant={restaurant} index={index} navigate={navigate} />
  ));
  const isAdmin = getIsUserAdmin();
  const isLogeddIn = getIsLogeddIn();

  return (
    <div className="mainContainer">
      <NavBar isAdmin={isAdmin} isLogeddIn={isLogeddIn} />
      <h1 className="titleRestaurant">{`${"Bienvenido busca tu menu "}`}</h1>
      <div className="container-btn-form-1 d-flex justify-content-end mb-2 mt-1 me-3">
        <button
          className={`${
            !userType || userType === "Comensal"
              ? "btn-form-1 d-none"
              : "btn-form-1 active"
          }`}
          onClick={() => navigate(`/formulario`)}
        >
          Ir a registrar platillos
        </button>
        <div>
          <QrCode />
        </div>
      </div>
      <div className="container g-0">
        <div className="row">
          <div className="col col-12 d-flex-r">{cards}</div>
        </div>
      </div>
    </div>
  );
}
