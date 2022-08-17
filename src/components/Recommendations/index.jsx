import './Recommendations.css';
import { calcMean } from '../../services/calcRatings';

export default function createCardsRecommendations(data) {
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

	let listCards;
	function listCardsRecomendations() {
		listCards = data.map((item, index) => {
			let img = item.image_Url;
			let fullName = item.disName;
			let name = cutName(item.dishName);
			let price = '$ ' + item.price + '.00';
			let rating = calcMean(item);
			let link =  item._id

			return (
				<div key={index} className="cardRecommendations">
					<div className="mx-auto overFlowDiv">
						<a title={name} href={link}><img className="imgRecommPhoto img-fluid" src={img} alt={fullName} /></a>
					</div>
					<div className="contentCardRecommendations">
						<p className="text-center">
							<strong>{name}</strong>
						</p>
						<p className="text-center">{price + ' - ' + rating}</p>
					</div>
				</div>
			);
		});
	}

	const status = isObjEmpty(data);
	if (!status) {
		listCardsRecomendations();
	}

	return <div className="containerRecomendations">{listCards}</div>;
}
