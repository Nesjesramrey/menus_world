import './Detail.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

// Components
import ImgDish from "../../components/ImgDish"
import DishDescription from '../../components/DishDescription'
import Comments from "../../components/Comments"
import AddComment from "../../components/AddComment"
import Recomendation from "../../components/Recommendations"
import TableRatings from '../../components/TableRatings'

//Services
import { list as listFunc } from "../../services/menus"

export default function Detail(){

  const [list, setList] = useState([]);

  useEffect(() => {
    const listDishes = async () => {
      const data = await listFunc();
      const parsedDishes = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setList(parsedDishes);
    };

    listDishes();
  }, []);



  return(
    <main>

      <div className='container-fluid'>
        <div className="container g-5">


          <div className='row'>
            <div className='col col-12 title text-center'>
              <h2>Calificaciones del platillo</h2>
            </div>
          </div>

          <div className="row">
            <div className='col col-12 col-md-6'>{ImgDish(1)}</div>
            <div className='col col-12 col-md-6'>
              <div>
                <div>{DishDescription(1)}</div>
                <div>{TableRatings(1)}</div>
              </div>
            </div>
          </div>

          {/*- - - - Comments section - - - -*/}
          <div className='row'>
            <div className='col col-12 col-md-6'>
              {AddComment(1)}
              {Comments(1)}
              {Comments(2)}
            </div>


            {/*- - - - Reommendations - - - -*/}
            <div className='col col-12 col-md-6 text-center'>
              <div>
                <h5 id="textOtherRec" className="text-center">
                  Otras recomendaciones
                </h5>
              </div>
              <div id="colCardsRecommendations">
                {Recomendation(1)}
                {Recomendation(2)}
                {Recomendation(3)}
              </div>
            </div>
          </div>

        </div>
      </div> 
    </main>
  )
}