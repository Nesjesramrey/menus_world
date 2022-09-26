import { useEffect, useState } from "react";
import { listRestaurant } from "../../services/restaurants";
import { useParams, useNavigate } from "react-router-dom";

//CSS
import "./Restaurants.css";

//Components
import RestaurantCard from "../../components/RestaurantCard";
import NavBar from "../../../src/components/NavBar";

//Authorization
import { getIsUserAdmin, getIsLogeddIn, getRestaurantName } from "../../Auth/auth";

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

  const isAdmin = getIsUserAdmin();
  const isLogeddIn = getIsLogeddIn();
  const owned = getRestaurantName();


  const evalRestaurant = (restaurant) => {
    for (let i of owned){
      if(i === restaurant.restaurants){
        return restaurant
      } 
    }
  }

  const showCards = () => {

    if(isAdmin){
      const cards = restaurants.filter((restaurant) => evalRestaurant(restaurant)).map((restaurant, index) => (
        <RestaurantCard restaurant={restaurant} index={index} navigate={navigate} />
      ));
      return cards
    } else { 
      const cards = restaurants.map((restaurant, index) => (
        <RestaurantCard restaurant={restaurant} index={index} navigate={navigate} />
      ));
      return cards
    }
  }

  return (
    <div className="mainContainer">
      <NavBar isAdmin={isAdmin} isLogeddIn={isLogeddIn} />
      <h1 className="titleRestaurant">{`${"Bienvenido busca tu menu "}`}</h1>
      <div className="container g-0">
        <div className="row">
          <div className="col col-12 d-flex-r">
            {showCards()}
            </div>
        </div>
      </div>
    </div>
  );
}
