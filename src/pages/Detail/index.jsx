import './Detail.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

// Components
import NavBar from '../../components/NavBar'
import ImgDish from '../../components/ImgDish';
import DishDescription from '../../components/DishDescription';
import CreateComments from '../../components/Comments';
import AddComment from '../../components/AddComment';
import Recomendation from '../../components/Recommendations';
import TableRatings from '../../components/TableRatings';

//Services
import { list as listFunc } from '../../services/menus';

export default function Detail() {
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

	console.log(list);

	//#region Temporary vars
	let img = 'https://images2.imgbox.com/66/db/s8TI4LcF_o.jpg';
	let data = {
		title: 'Ensalada de pollo',
		description: 'Rica ensada de pollo, tiene 100 gr de pollo, lechuga, 3 ingredientes a elejir (aceitunas, elote, panela, queso, cutones), inlcuye bebida de 300 mL',
		price: 78,
		rating: 4.3,
	};
	let comments = [
		{
			name: 'Nestor Ramirez',
			date: '20 Jul',
			rating: 5,
			comment: 'Esta muy buena, es de mis favoritas',
		},
		{
			name: 'Luis Vera',
			date: '15 Jul',
			rating: 5,
			comment: 'Todo muy rico y fresco, recomendada 😋',
		},
		{
			name: 'Yusef',
			date: '10 Jun',
			rating: 5,
			comment:
				'EXCELENTE, estaba deliciosa, ademas a muy buen precio ya que incluye una bebida, sin lugar a dudas un platillo 100% recomendado',
		},
		{
			name: 'Chucho',
			date: '22 May',
			rating: 4,
			comment:
				'Esta muy rica, y a buen precio, pero la verdad comparandola con la ensalada mixta, esta se queda abajo ',
		},
	];
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

	//#endregion

	// Generate list of comments
	let listComments = comments.map((comment, index) => CreateComments(comment, index));

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

	return (
		<div className="container-fluid g-0">
			{NavBar(1)}
			<div className="container g-5">

				<main className="row">
					<div className="col col-12 title text-center">
						<h2>Calificaciones del platillo</h2>
					</div>

					{/* photo and description */}
					<div className="col col-12 col-md-6 g-0">{ImgDish(img)}</div>
					<div className="col col-12 col-md-6 g-0">
						<div className="boxDish">
							{DishDescription(data)}
							{TableRatings(values, 1)}
						</div>
					</div>
				</main>

				<section className="row">
					{/*- - - - Comments section - - - -*/}
					<div className="col col-12 col-md-6 g-0">
						{AddComment(1)}
						{listComments}
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
