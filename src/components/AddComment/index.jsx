import './AddComment.css';
import { useState } from 'react';
import { createComment as sendComment }from '../../services/menus';
import {getIsLogeddIn, getIsUserAdmin} from '../../Auth/auth'

export default function AddComment(id) {
	const [canComment, setCanComment] = useState(false);  //state 
	const [text, setText] = useState('');
	const [existComment, setExistComment] = useState(false)

	const [isLogIn, setIsLogIn] = useState(true);
	const [isUser, setUser ] = useState(true);

	const sendToServer = () => {

		if(isLogIn && !existComment && text.length > 0 ){
			const now = new Date()
			const bodyMsg = {
				user: "Usuario Prueba",
				rating: 5,
				comment: text,
				idUser: "62d53a3c7",
				date: now,
			};
			console.log(bodyMsg)
			sendComment(id,bodyMsg);
			setExistComment(true)
			console.log("mensaje enviado")
		} else {
			console.log("hay que registrarse o iniciar sesion para publicar comentarios")
		}
	}

	const sendData = () => {

    let today = new Date();

    const data = {
      user: 'Alberto',
      rating: 5,
      comment: text,
      idUser: '23353',
      date: today,
    };
    const Url = 'http://localhost:8000/detalle/' + id;

    fetch(Url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };




	const addNewcomment = (msg) => {
		//not logIn
		if(isLogIn === false){
			console.error('Para agregar comentarios debes iniciar sesión')
		} else {
			//Is logIn
			if(isUser === true){
				//only user can add comments
				setCanComment(false);
				setText(msg);
				sendData()
			} else {
				//admins can't comment
				console.log('No se puede agregar comentarios con sesión de administrador')
			}
		}
	}


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
					<button
						id="addComment"
						type="button"
						onClick={(e) => addNewcomment(text)}
						>
						Enviar comentario
					</button>
				</form>
			);
		}
	}

	return <div id="addCommentSection">{createContent()}</div>;
}
