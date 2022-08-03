import './AddComment.css';
import { useState, useEffect } from 'react';
import CreateComments from '../Comments';

export default function AddComment() {
	const [canComment, setCanComment] = useState(false);
	const [isLogIn, setIsLogIn] = useState(true);
	const [text, setText] = useState('');

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
					<textarea
						id="addNewComment"
						name="newComment"
						rows="3"
						cols="74"
						placeholder="Escribe tu reseña del platillo"
						// value={text}
						// onChange={(e) => setCanComment(e.target.value)}
					></textarea>
					<button
						id="addComment"
						type="button"
						// onClick={(e) => handleMessage(text)}
						>
						Enviar comentario
					</button>
				</form>
			);
		}
	}

	const handleMessage = () => {
		console.log(text)
  };





	return <div id="addCommentSection">{createContent()}</div>;
}
