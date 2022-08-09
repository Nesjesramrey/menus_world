import './AddComment.css';
import { useState, useEffect } from 'react';
import CreateComments from '../Comments';

export default function AddComment() {
	const [canComment, setCanComment] = useState(false);
	const [isLogIn, setIsLogIn] = useState(true);
	const [text, setText] = useState('');

	const handleMessage = (msg) => {
		console.log(msg)
		setText('')
		setCanComment(false)
  };

	function createContent() {

		//
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
					<p>Escribe un comentario sobre el platillo y deja tu puntuación</p>
					<textarea
						id="addNewComment"
						name="newComment"
						placeholder="Escribe tu reseña del platillo"
						onChange={(e) => setText(e.target.value)}
					></textarea>
					<button
						id="addComment"
						type="button"
						onClick={(e) => handleMessage(text)}
						>
						Enviar comentario
					</button>
				</form>
			);
		}
	}







	return <div id="addCommentSection">{createContent()}</div>;
}
