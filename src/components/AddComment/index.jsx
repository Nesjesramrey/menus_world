import './AddComment.css';
import { useState } from 'react';
import { createComment as sendComment } from '../../services/menus';

export default function AddComment(id) {
	const [canComment, setCanComment] = useState(false);
	const [isLogIn, setIsLogIn] = useState(true);
	const [text, setText] = useState('');
	const [existComment, setExistComment] = useState(false);

	const sendToServer = () => {
		if (isLogIn && !existComment && text.length > 0) {
			const now = new Date();
			const bodyMsg = {
				user: 'Usuario Prueba',
				rating: 5,
				comment: text,
				idUser: '62d53a3c7',
				date: now,
			};
			console.log(bodyMsg);
			sendComment(id, bodyMsg);
			setExistComment(true);
			console.log('mensaje enviado');
		} else {
			console.log('hay que registrarse o iniciar sesion para publicar comentarios');
		}
	};

	
	const sendData = () => {
		let today = new Date();

		const data = {
			user: 'Mario',
			rating: 5,
			comment: text,
			idUser: '23353',
			date: today,
		};
		const Url = 'http://localhost:8000/detalle/62ec7f990a7ec0b3382173b1';

		fetch(Url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const handleMessage = (msg) => {
		setCanComment(false);
		setText(msg);
		sendData();
	};

	function createContent() {
		if (canComment === false) {
			return (
				<button id="addComment" type="button" onClick={() => setCanComment(true)}>
					Agrega un comentario
				</button>
			);
		}
		if (canComment === true) {
			return (
				<form id="formAddComment" action="/action_page.php">
					<p id="textInstructions">Escribe un comentario sobre el platillo y deja tu puntuación</p>
					<textarea
						id="addNewComment"
						name="newComment"
						placeholder="Escribe tu reseña del platillo"
						onChange={(e) => setText(e.target.value)}
					></textarea>
					<button id="addComment" type="button" onClick={(e) => handleMessage(text)}>
						Enviar comentario
					</button>
				</form>
			);
		}
	}

	return <div id="addCommentSection">{createContent()}</div>;
}
