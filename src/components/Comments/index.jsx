import './Comments.css';

export default function CreateComments(data, key) {
	let user = data.name ? data.name : 'NAME';
	let date = data.date ? data.date : 'DATE';
	let rating = data.rating ? data.rating : 1;
	let text = data.comment ? data.comment : 'TEXT';

	let url =
		'https://ui-avatars.com/api/?size=40&rounded=true&background=ffb01d&color=fff&name=' + user;

	let chainStars = '';
	for (let star = 0; star < rating; star++) {
		chainStars += '⭐';
	}

	return (
		<div className="divComment">
			<div className="divImgProfile">
				<img className="imgProfile" src={url} alt=" " />
			</div>
			<div>
				<div className='userDate'>
					<p className='userSpace'>
					<strong>{user + ' '}</strong>
					</p>
					<p>
					{' - ' + date}
					</p>
				</div>
				<p>{chainStars}</p>
				<p className="text-start">{text}</p>
			</div>
		</div>
	);
}
