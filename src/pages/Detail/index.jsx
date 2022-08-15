//#region imports
import './Detail.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Components
import NavBar from '../../components/NavBar';
import ImgDish from '../../components/ImgDish';
import DishDescription from '../../components/DishDescription';
import CreateComments from '../../components/Comments';
import AddComment from '../../components/AddComment';
import Recomendations from '../../components/Recommendations';
import TableRatings from '../../components/TableRatings';

//Services
// import { listRestaurant as listDishes } from '../../services/menus';
// import { dishById as readIdDish } from '../../services/menus';
import { calcRatings } from '../../services/calcRatings';
//#endregion

//  - - - - - - - - - - - - - - - Main function - - - - - - - - - - - - - - -
export default function Detail() {
	let { dishId } = useParams(); // id's database
	const [dish, setDish] = useState([]); //object with data of dish
	const [restaurant, setRestaurant] = useState(null); //name of selectec restaurant
	const [recomendations, setRecomendations] = useState([]); //list of object for recomendations

	//get dish
	useEffect(() => {
		document.title = "Menu's World";

		const url = 'https://menus.api.nesjes.com/detalle/';
		const id = dishId;
		const fullURL = url + id;

		const getList = async () => {
			const urlList = 'https://menus.api.nesjes.com/menu/submenu?restaurantName=' + restaurant;
			const list = await axios(urlList);
			if ((list.status = 200)) {
				setRecomendations(list.data);
			}
		};

		
		const getAnswer = async () => {
			const data = await axios(fullURL);
			if (data.status === 200) {
				const response = data.data;
				setDish(response);
				setRestaurant(response.restaurantName);
				getList();
			}
		};

		getAnswer();
	}, []);

	// Generate list of comments
	function showComments(data) {
		const arrComment = data.comments ? data.comments : [];

		if (arrComment.length > 0) {
			let listComments = arrComment.map((comment, index) => CreateComments(comment, index));
			return listComments;
		} else {
			return (
				<p className="noComments text-center">No hay comentarios aun, sé el primero en comentar.</p>
			);
		}
	}
	const allComments = showComments(dish);

	// values of ratings
	const ratings = calcRatings(dish);

	//generate recomendations
	const getRecomendations = () => {
		let listRecomendations = [];
		let filter = dish.category;

		//add recomendations
		for (let dish of recomendations) {
			let count = 0;
			if (dish.category === filter && dish._id !== dishId) {
				count++;
				listRecomendations.push(dish);
				if (count === 4) {
					break;
				}
			}
		}

		//add more recomendations
		if (listRecomendations.length < 3) {
			let count = listRecomendations.length;
			for (let anotherDish of recomendations) {
				if (anotherDish.category !== filter) {
					count++;
					listRecomendations.push(anotherDish);
					if (count === 4) {
						break;
					}
				}
			}
		}
		return listRecomendations;
	};
	const listRecomendation = getRecomendations();
	console.log(restaurant);
	console.log(listRecomendation);

	//  - - - - - - - - - - - - - - - Return - - - - - - - - - - - - - - -
	return (
		<div className="container-fluid g-0">
			<NavBar />
			<div className="container g-5">
				<main className="row">
					<div className="col col-12 title text-center">
						<h2>Calificaciones del platillo</h2>
					</div>

					{/* photo and description */}
					<div className="col col-12 col-md-6 g-0">{ImgDish(dish)}</div>
					<div className="col col-12 col-md-6 g-0">
						<div className="boxDish">
							{DishDescription(dish, ratings)}
							{TableRatings(ratings)}
						</div>
					</div>
				</main>

				<section className="row">
					{/*- - - - Comments section - - - -*/}
					<div className="col col-12 col-md-6 g-0">
						{AddComment(dishId)}
						{allComments}
					</div>

					{/*- - - - Reommendations - - - -*/}
					<div className="col col-12 col-md-6 text-center g-0">
						<div>
							<h5 id="textOtherRec" className="text-center">
								Otras recomendaciones
							</h5>
						</div>
						<div id="colCardsRecommendations">{Recomendations(listRecomendation)}</div>
					</div>
				</section>
			</div>
		</div>
	);
}
