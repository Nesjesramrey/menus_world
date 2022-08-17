import './Comments.css';

export default function CreateComments(data, key) {
	let user = data.user ? data.user : 'NAME';
	let date = data.date ? data.date : 'DATE';
	let rating = data.rating ? data.rating : 0;
	let text = data.comment ? data.comment : 'TEXT';

	let url = 'https://ui-avatars.com/api/';
	let params = '?size=40&rounded=true&background=ffb01d&color=fff&name=';
	let urlImg = url + params + user;

	function calcDate(dateString) {
		let calcMonth = {
			0: 'Ene',
			1: 'Feb',
			2: 'Mar',
			3: 'Abr',
			4: 'May',
			5: 'Jun',
			6: 'Jul',
			7: 'Ago',
			8: 'Sep',
			9: 'Oct',
			10: 'Nov',
			11: 'Dic',
		};

		let date = new Date(dateString);
		date.setHours(date.getHours() - 5);

		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();
		let currentYear = new Date().getFullYear();

		if (year < currentYear) {
			return day + '-' + calcMonth[month] + '-' + year;
		} else {
			return day + '-' + calcMonth[month];
		}
	}
	let dateToComment = calcDate(date);

	function showStars(amountOfStars) {
		let chainStars = '';
		for (let star = 0; star < amountOfStars; star++) {
			chainStars += '⭐';
		}
		return chainStars;
	}
	const stars = showStars(rating);

	return (
		<div key={key} className="divComment">
			<div className="divImgProfile">
				<img className="imgProfile" src={urlImg} alt=" " />
			</div>
			<div>
				<div className="userDate">
					<p className="userSpace pComment">
						<strong>{user + ' '}</strong>
					</p>
					<p className="pComment">{dateToComment}</p>
				</div>
				<p className="pComment">{stars}</p>
				<p className="text-start pComment">{text}</p>
			</div>
		</div>
	);
}
