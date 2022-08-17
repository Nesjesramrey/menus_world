import "./AddComment.css";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { createComment as sendComment } from "../../services/menus";

//Cokkies
import Cookies from "universal-cookie";

export default function AddComment(id) {
  const [canComment, setCanComment] = useState(false); //state
  const [text, setText] = useState("");

  // add usertype, ID and username
  const cookies = new Cookies();
  const userType = cookies.get("TipoUsuario");
  const userId = cookies.get("Id");
  const userName = cookies.get("Usuario");
  // console.log(userType, userId, userName);

  //value of rating
  const [ratingValue, setRatingValue] = useState(0);

  const [existComment, setExistComment] = useState(true);

  //state of logins
  //const [isLogIn, setIsLogIn] = useState(null);
  //const [isUser, setUser] = useState(null);

  // read cookies
  //console.log(getIsLogeddIn());
  //console.log(getIsUserAdmin());
  //setIsLogIn(true);
  //setUser(true);
  //const idser = id;
  //const userName = name;

  const handleRating = (rate) => setRatingValue(rate / 20);

  //console.log(ratingValue);

  const sendData = () => {
    let today = new Date();

    const data = {
      user: { userName },
      rating: ratingValue,
      comment: text,
      idUser: { userId },
      date: today,
    };
    console.log(data);
    const Url = "http://localhost:8000/detalle/" + id;

    fetch(Url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const addNewcomment = (msg) => {
    //not logIn
    if (userName === "") {
      console.error("Para agregar comentarios debes iniciar sesión");
    } else {
      //Is logIn
      if (userType === "") {
        //only user can add comments
        setCanComment(false);
        setText(msg);
        sendData();
      } else {
        //admins can't comment
        console.error(
          "No se puede agregar comentarios con sesión de administrador"
        );
      }
    }
    window.location.reload(false);
  };

  function createContent() {
    if (canComment === false) {
      return (
        <button
          id="addComment"
          type="button"
          onClick={() => setCanComment(true)}
        >
          Agrega un comentario
        </button>
      );
    }
    if (canComment === true) {
      return (
        <form id="formAddComment" action="/action_page.php">
          <p id="textInstructions">
            Escribe un comentario sobre el platillo y deja tu puntuación
          </p>
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
            fillColor={"#ffd700"}
            emptyColor={"#888888"}
            size={50}
          />
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
