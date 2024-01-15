const RestaurantCard = (props) =>{
    const {resData}=props;
    return(
        <div className="res-card">
            <img src={resData.image} />
            <h3>{resData.title}</h3>
            <h4>{resData.price +" Rs"}</h4>
            <h4>{resData.rating.rate +" Rs"}</h4>
            <h4>{resData.category}</h4>
        </div>
    )
}

export default RestaurantCard;