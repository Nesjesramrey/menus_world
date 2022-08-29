//CSS
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant, index }) => {
  let descripcion = restaurant.descriptionRestaurant;
  if (descripcion.length > 200) {
    descripcion = `${descripcion.slice(0, 200)}...`;
  }

  const restaurantName = restaurant.restaurants;

  return (
    <div key={index} className="cardMenu p-1 m-3 d-flex-r">
      <div className="menuCardImg">
        <a href={"../menu/" + restaurantName}>
          <img
            className="imgCardMenu"
            alt={restaurant.restaurants}
            src={restaurant.image_Url}
          />
        </a>
      </div>
      <div className="menuCardContent d-flex-c">
        <div className="cardMenuTop">
          <p className="cardMenuTitle pStyle">{restaurant.restaurants}</p>
          <p className="cardMenuTitle pStyle">
            {restaurant.descriptionRestaurant}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
