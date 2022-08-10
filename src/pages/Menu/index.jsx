import { useEffect, useState } from "react";
import { list as listDishes } from "../../../src/services/menus";
import { useNavigate } from "react-router-dom";
import MenuCard from "../../components/MenuCard";

import "./Menu.css";

export default function Menu() {
  // Local state
  const [dishes, setDishes] = useState([]);

  // RRD
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await listDishes();
      const parsedDishes = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setDishes(parsedDishes);
    };

    list();
  }, []);


  
  // const buildMenu = (dish, index) => (

  // <div className="containerm">
  //   <div className="food-menu">
  //     <div className="food" key={index}> 
  //         <div className="food-image">
  //           <img src="https://image.freepik.com/free-photo/front-view-delicious-meat-hamburger-with-red-tomatoes-dark-background_179666-19347.jpg" alt="Food" />
  //         </div>  

  //           <div className="name-food-name"><h5>{dish.dishName}</h5></div>
  //           <div className="name-food-descrip">{dish.description}</div>
  //           <div className="name-food-price"> ${dish.price}</div>

  //           <div className="iconos">
  //           <div class="icons8-edit" onClick={() => navigate(`edit/${dish._id}`)}></div>
  //           <div class="icons8-trash" onClick={() => navigate(`delete/${dish._id}`)}></div>
  //           </div>




  //     </div>  
  //   </div>
  // </div>





  // );

  


  return (


    <div className="mainContainer">
      <div className="container">
        <div className="row">
          {dishes && dishes.map((dish) => <MenuCard dish={dish} navigate={navigate} />)}
        </div>
          <div className="info">
            <p>LA PROPINA NO ES OBLIGATORIA.</p>

            <p>ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN EXPRESS.</p>

            <p>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</p>
          </div>
      </div>

      </div>
    
  );

}
