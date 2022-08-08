//#region imports
import './Detail.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import NavBar from '../../components/NavBar';
import ImgDish from '../../components/ImgDish';
import DishDescription from '../../components/DishDescription';
import CreateComments from '../../components/Comments';
import AddComment from '../../components/AddComment';
import Recomendation from '../../components/Recommendations';
import TableRatings from '../../components/TableRatings';

//Services
import { list as listFunc } from '../../services/menus';
import { dishById as readIdDish } from '../../services/menus';
//#endregion

//  - - - - - - - - - - - - - - - Main function - - - - - - - - - - - - - - -
export default function Detail() {
	let { dishId } = useParams();
	const [dish, setDish] = useState([]);

	useEffect(() => {
		const dishInfo = async () => {
			const dishData = await readIdDish(dishId);
			setDish(dishData);
		};
		dishInfo();
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

	//#region Temporary vars
	let platillos = [
		{
			name: 'Rib eye al carbon',
			price: 245,
			url: 'https://imgbox.com/gallery/edit/WPooo5KE58/q0xZTHFuESL043NZ',
			ratings: [
				{
					comment: 'ok',
					rating: 5,
				},
				{
					comment: 'Me gusto',
					rating: 4,
				},
				{
					comment: 'Super recomendado',
					rating: 3,
				},
				{
					comment: 'Bueno y saludable',
					rating: 4,
				},
				{
					comment: 'EXCELENTE',
					rating: 5,
				},
				{
					comment: 'Muy rico',
					rating: 5,
				},
				{
					comment: 'Deliciosa',
					rating: 5,
				},
				{
					comment: 'Siempre la pido',
					rating: 5,
				},
			],
		},
	];

	// Cal ratings
	let values = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};
	function getRatings(data) {
		for (let dish of data) {
			let ratings = dish.ratings;
			for (let rating of ratings) {
				values[rating.rating] += 1;
			}
		}
	}
	getRatings(platillos);

	//#endregion

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
							{DishDescription(dish)}
							{TableRatings(values, 1)}
						</div>
					</div>
				</main>

				<section className="row">
					{/*- - - - Comments section - - - -*/}
					<div className="col col-12 col-md-6 g-0">
						{AddComment(1)}
						{allComments}
					</div>

					{/*- - - - Reommendations - - - -*/}
					<div className="col col-12 col-md-6 text-center g-0">
						<div>
							<h5 id="textOtherRec" className="text-center">
								Otras recomendaciones
							</h5>
						</div>
						<div id="colCardsRecommendations">
							{Recomendation(1)}
							{Recomendation(2)}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
