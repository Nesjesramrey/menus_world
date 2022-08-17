import "./ImgDish.css";

export default function ImgDish(data) {
  let urlImg = data.image_Url ? data.image_Url : "img.jpg";
  let title = data.dishName ? data.dishName : "TITLE";

  return (
    <div className="imgSection">
      <img
        className="img-fluid imgDishes"
        src={urlImg}
        alt="platillo"
        title={title}
      />
    </div>
  );
}
