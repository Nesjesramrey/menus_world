import './Comments.css'

export default function Comments(){
  return(
    <div className="divComment">
    <div className="divImgProfile">
      <img className="imgProfile" src="https://ui-avatars.com/api/?size=40&rounded=true&background=ffb01d&color=fff&name=Edith" alt=" "/>
    </div>
    <div>
      <p>
        <strong>Edith</strong> - 25 Jun
      </p>
      <p>
        ⭐⭐⭐⭐⭐
      </p>
      <p className="text-start">
        no la habia probado antes, pero me gusto mucho, las salsas tambien estan muy ricas, super recomendadas 😃
      </p>
    </div>
  </div>
  )
}
