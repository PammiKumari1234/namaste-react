import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, locality } =
    resData?.info;

  return (
    <div className="res-card">
      <div className="image-container">
        <img
          className="rounded-lg"
          alt="res-logo"
          // src={CDN_URL + cloudinaryImageId}
          src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202312/MIT_Food-Diabetes-01_0.jpg?itok=Mp8FVJkC"
        />
        <img src={resData.image} />
        <div class="overlay">
          <div className="text">{costForTwo}</div>
        </div>
      </div>
      <div className="res-card-inner">
        <div className="res-name">{name}</div>
        <div className="res-rating">{avgRating} stars</div>
        <div className="res-desc">{cuisines.join(", ")}</div>
        <div className="res-desc">{locality}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
