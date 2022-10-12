import { useEffect, useState } from "react";
import { listRestaurant } from "../../services/restaurants";
import { useParams, useNavigate } from "react-router-dom";

//CSS
import "./Restaurants.css";

//Components
import RestaurantCard from "../../components/RestaurantCard";
import NavBar from "../../../src/components/NavBar";

//Authorization
import {
  getIsUserAdmin,
  getIsLogeddIn,
  getRestaurantName,
} from "../../Auth/auth";

export default function Restaurants() {
  // Local state
  const [restaurants, setRestaurants] = useState([]);
  let searchResult = [];

  // RRD
  const { restaurantName } = useParams();
  const navigate = useNavigate();

  //param for search
  const { search } = useParams();

  if (search) {
    const restaurantsResults = restaurants.filter((item) => {
      const name = item.restaurants.toLowerCase();
      if (name.indexOf(search) >= 0) {
        return item;
      }
    });
    searchResult = restaurantsResults;
  }

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

  function returnCards() {
    const evalRestaurant = (restaurant) => {
      for (let i of owned) {
        if (i === restaurant.restaurants) {
          return restaurant;
        }
      }
    };

    const showCards = (data) => {
      if (isAdmin) {
        const cards = data
          .filter((restaurant) => evalRestaurant(restaurant))
          .map((restaurant, index) => (
            <RestaurantCard
              restaurant={restaurant}
              index={index}
              navigate={navigate}
            />
          ));
        return cards;
      } else {
        const cards = data.map((restaurant, index) => (
          <RestaurantCard
            restaurant={restaurant}
            index={index}
            navigate={navigate}
          />
        ));
        return cards;
      }
    };

    if (search) {
      const filterCards = showCards(searchResult);
      return filterCards;
    } else {
      const allCards = showCards(restaurants);
      return allCards;
    }
  }

  return (
    <div className="mainContainer">
      <NavBar isAdmin={isAdmin} isLogeddIn={isLogeddIn} />
      <div className="content-title-restaurant">
        <span className="titleRestaurant">{`${"¡Elige tu restaurante favorito! "}`}</span>
        <span className="info-restaurant">
          ¡Llego la hora de crear, comer y disfrutar.. !{" "}
        </span>
      </div>
      <div className="container g-0">
        <div className="row">
          <div className="col col-12 d-flex-r">{returnCards()}</div>
        </div>
      </div>
    </div>
  );
}
