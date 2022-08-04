import './DishDescription.css';

export default function DishDescription(data) {
	let name = data.title ? data.title : 'TITLE';
	let description = data.description ? data.description : 'DESCRIPTION';
	let cost = data.price ? data.price : '0.0';
	let score = data.rating ? data.rating : 10;

	return (
		<div className="description">
			<div>
				<h3 className='text-center'>{name}</h3>
				<p>{description}</p>
			</div>
			<div className='bottomSection'>
				<p>{'$ ' + cost}</p>
				<p>{'⭐ ' + score + ' (' + 117 + ' votos)'}</p>
			</div>
		</div>
	);
}
