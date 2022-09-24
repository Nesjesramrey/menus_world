import './AddComment.css';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
//import { createComment as sendComment } from '../../services/menus';

//Cookies
import Cookies from 'universal-cookie';

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddComment(id, alredyCommented) {
	const [canComment, setCanComment] = useState(false); //state
	const [text, setText] = useState('');
	//const [existComment, setExistComment] = useState(true);

	//value of rating
	const [ratingValue, setRatingValue] = useState(0);

	// add usertype, ID and username
	const cookies = new Cookies();
	const userType = cookies.get('TipoUsuario');
	const userId = cookies.get('Id');
	const userName = cookies.get('Usuario');

	const handleRating = (rate) => setRatingValue(rate / 20);

	const sendData = () => {
		let today = new Date();

		const data = {
			user: userName,
			rating: ratingValue,
			comment: text,
			idUser: userId,
			date: today,
		};
		const Url = 'https://menus.api.nesjes.com/detalle/' + id;

		fetch(Url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {})
			.catch((error) => {});
	};

	const addNewcomment = (msg) => {
		//not logIn
		if (!userName) {
			toast.error('Para agregar comentarios debes iniciar sesión');
		} else {
			//Is logIn
			if (userType === 'Comensal') {
				//only user can add comments
				if (alredyCommented === false && msg.length > 0 && ratingValue > 0) {
					setCanComment(false);
					setText(msg);
					sendData();
          window.location.reload(false); // - - - - - - - - - - - -  reload only when all succes ok
				} else {
					toast.error('Debes agregar una reseña y calificación');
				}
			} else {
				//admins can't comment
				toast.error('No se puede agregar comentarios con sesión de administrador');
			}
		}
	};

	function createContent() {
		if (canComment === false) {
			if (alredyCommented) {
				return <p><h5>Ya has comentado este platillo</h5></p>;
			} else {
				return (
					<button id="addComment" type="button" onClick={() => setCanComment(true)}>
						Agrega un comentario
					</button>
				);
			}
		}
		if (canComment === true) {
			return (
				<form id="formAddComment" action="/action_page.php">
					<p id="textInstructions"><h5>Escribe un comentario sobre el platillo y deja tu puntuación</h5></p>
					<textarea
						id="addNewComment"
						name="newComment"
						placeholder="Escribe tu reseña del platillo"
						onChange={(e) => setText(e.target.value)}
					></textarea>
					<Rating
						transition
						onClick={handleRating}
						ratingValue={ratingValue}
						fillColor={'#ffd700'}
						emptyColor={'#888888'}
						size={50}
					/>
					<button id="addComment" type="button" onClick={(e) => addNewcomment(text)}>
						Enviar comentario
					</button>
				</form>
			);
		}
	}

	return (
		<div id="addCommentSection">
			{createContent()}
			<ToastContainer />
		</div>
	);
}
