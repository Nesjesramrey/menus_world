//CSS
import "./RestaurantCard.css";

export default function RestaurantCard({restaurant, index}){
  let descripcion = restaurant.descriptionRestaurant;
  if (descripcion.length > 200) {
    descripcion = `${descripcion.slice(0, 200)}...`;
  }

  const restaurantName = restaurant.restaurants;

  return (
    <div key={index} className="cardRestaurant p-0 m-3">
      <div className="restaurantCardImg">
        <a href={"../menu/" + restaurantName}>
          <img
            className="imgCardRestaurants"
            alt={restaurant.restaurants}
            src={restaurant.image_Url}
          />
        </a>
      </div>
      <div className="restaurantCardContent d-flex-c">
        <div className="cardMenuTop">
          <p className="restaurantMenuTitle pStyle">{restaurant.restaurants}</p>
          <p className="name-food-descrip pStyle">
            {restaurant.descriptionRestaurant}
          </p>
        </div>
      </div>
    </div>
  );
};
