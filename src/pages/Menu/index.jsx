import { useEffect, useState } from "react";
import { list as listDishes } from "../../../src/services/menus";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import visa from '../../assets/visa.png'





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

  const buildMenu = (dish, index) => (

    <Card>
    <div className="col-10 col-md-12 "> 
      <div className="card-menu-general" key={index}>
        <div className="name-food">{dish.dishName}</div>
        <div className="name-food">{dish.description}</div>
        <div className="name-food">$ {dish.price}</div>

        <div className="mb-2">
          <Button className="btn-7" onClick={() => navigate(`edit/${dish._id}`)}/>

        <div className="buttonsCard btn1-menu">
          <Button variant= "none" className="btn1-menu" onClick={() => navigate(`edit/${dish._id}`)}>
            Editar
          </Button>
          <Button variant= "none" className="btn1-menu" onClick={() => navigate(`delete/${dish._id}`)}>
            Eliminar
          </Button>
        </div>
      </div>
    </div>   
    </div> 
    </Card>
  
  
  );

  return (
  <Card>
    <div>
      <div className="mainContainer">
        <div className="container">
          {dishes.map(buildMenu)}
          <div className="card-info-menu">
            <div className="notes">
            <li>LA PROPINA NO ES OBLIGATORIA.</li>
            
            <li>ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN EXPRESS.</li>
            
            <li>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</li>
            </div>
          </div>
          
        </div>
      </div>


    </div>
  </Card>  


  );
}
