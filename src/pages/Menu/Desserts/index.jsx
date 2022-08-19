import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sublist as listDishes } from '../../../services/menus';
import MenuCard from '../../../components/MenuCard';

import './Desserts.css';

export default function Meat_cut() {
	// Local state
	const [dishes, setDishes] = useState([]);
	// RRD
	const { restaurantName } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		const list = async () => {
			const data = await listDishes('Postres', restaurantName);
			const parsedDishes = Object.keys(data).map((key) => {
				return { id: key, ...data[key] };
			});

			setDishes(parsedDishes);
		};

		list();
	}, [restaurantName]);

	const cards = dishes.map((dish, index) => (
		<MenuCard dish={dish} index={index} navigate={navigate} />
	));

	return (
		<div className="mainContainer">
			<div className="container g-0">
				<div className="row">
					<div className="col col-12 d-flex-r">{cards}</div>
				</div>
			</div>

			<div className="info">
				<p>LA PROPINA NO ES OBLIGATORIA.</p>
				<p>ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN EXPRESS.</p>
				<p>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</p>
			</div>
		</div>
	);
}
