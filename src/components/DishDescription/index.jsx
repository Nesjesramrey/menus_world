import './DishDescription.css';

export default function DishDescription(data, ratings) {
	let name = data.dishName ? data.dishName : 'TITLE';
	let description = data.description ? data.description : 'DESCRIPTION';
	let cost = data.price ? `$ ${data.price}` : 'Precio no disponible';
	let rating = 'Sin calificaciones';

	if (ratings) {
		rating = ratings.rating ? ratings.rating : 'Sin calificaciones';
	}

	return (
		<div className="description">
			<div>
				<h3 className="text-center">{name}</h3>
				<p className="text-center">{description}</p>
			</div>
			<div className="bottomSection">
				<p className="bold">{cost}</p>
				<p className="bold">{rating}</p>
			</div>
		</div>
	);
}
