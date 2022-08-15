import './Recommendations.css';
import { calcMean } from '../../services/calcRatings';

export default function Recommendations(data) {

	function isObjEmpty(obj) {
		for (let key in obj) return false;
		return true;
	}

	function cutName(string) {
		if (string.length > 20) {
			let newName = string.slice(0, 17).trim();
			newName += '...';
			return newName;
		} else {
			return string;
		}
	}

	let listCards = []
	function listCardsRecomendations() {
		listCards = data.map((item, index) => {
			let img = item.image_Url;
			let name = cutName(item.dishName);
			let price = '$ ' + item.price + '.00';
			let rating = calcMean(item);

			return (
				<div className="cardRecommendations">
				<div className="mx-auto overFlowDiv">
					<img
						className="imgRecommPhoto img-fluid"
						src={img}
					/>
				</div>
				<div className="contentCardRecommendations">
					<p className="text-center">
						<strong>{name}</strong>
					</p>
					<p className="text-center">{price  + rating}</p>
				</div>
			</div>
			)

		
		});
	}






	const status = isObjEmpty(data);

	if (!status) {
		listCardsRecomendations();
	}

	return (
		{listCards}
		// <div className="cardRecommendations">
		// 	<div className="mx-auto overFlowDiv">
		// 		<img
		// 			className="imgRecommPhoto img-fluid"
		// 			src="https://images.aws.nestle.recipes/resized/0e65606a2d47c099fb4c8a637b422f41_arrachera_1_1200_600.jpg"
		// 			alt="Rib eye al carbon*"
		// 		/>
		// 	</div>
		// 	<div className="contentCardRecommendations">
		// 		<p className="text-center">
		// 			<strong>123456789-123456789-123456789-</strong>
		// 		</p>
		// 		<p className="text-center">$ 245.00 ⭐ 4.8 (143 votos)</p>
		// 	</div>
		// </div>
	);
}
