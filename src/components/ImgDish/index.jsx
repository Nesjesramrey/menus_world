import './ImgDish.css';

export default function ImgDish(url) {
	let urlImg = url ? url : 'img.jpg';

	return (
		<div className="imgSection">
			<img className="img-fluid imgDishes" src={urlImg} alt="platillo" />
		</div>
	);
}
