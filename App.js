import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72" alt="" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Asas</li>
                </ul>
            </div>
        </div>
    )
}
// const{images,title,cuisines,stars,ETA}=resData?;

const RestaurantCard = (props) =>{
    const {resData}=props;
    return(
        <div className="res-card">
            <img src={resData.images} />
            <h3>{resData.title}</h3>
            <h4>{resData.cuisines}</h4>
            <h4>{resData.stars}</h4>
            <h4>{resData.ETA}</h4>
        </div>
    )
}

const resList= [
    {
        "id": 1,
        "title": "Pepe's Pizza",
        "cuisines": ["Italian, Indian, India, North, South"],
        "stars": 4.5,
        "ETA": "38 mins",
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
      },
      {
        "id": 2,
        "title": "Nomad's Pizza",
        "cuisines": ["Italian, Korean, India, North"],
        "stars": 3.5,
        "ETA": "22 mins",
        "rating": 3.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/japanese-food-models-3-te-220505-7202a5.jpg"
      },
      {
        "id": 3,
        "title": "Meghana Foods",
        "cuisines": ["Andhra, Nati, Kerala, North, South"],
        "stars": 4.7,
        "ETA": "30 mins",
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": "https://www.shutterstock.com/image-photo/dum-handi-chicken-biryani-prepared-600nw-2000023562.jpg"
      },
      {
        "id": 4,
        "title": "Meghana Food Paradise",
        "cuisines": ["Andhra, Nati, Kerala, North, South"],
        "stars": 4.7,
        "ETA": "30 mins",
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": "https://www.shutterstock.com/image-photo/dum-handi-chicken-biryani-prepared-600nw-2000023562.jpg"
      },
      {
        "id": 5,
        "title": "Meghana Food Paradise",
        "cuisines": ["Andhra, Nati, Kerala, North, South"],
        "stars": 4.7,
        "ETA": "30 mins",
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": "https://www.shutterstock.com/image-photo/dum-handi-chicken-biryani-prepared-600nw-2000023562.jpg"
      },
      {
        "id": 6,
        "title": "Meghana Food Paradise",
        "cuisines": ["Andhra, Nati, Kerala, North, South"],
        "stars": 4.7,
        "ETA": "30 mins",
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": "https://www.shutterstock.com/image-photo/dum-handi-chicken-biryani-prepared-600nw-2000023562.jpg"
      },
      {
        "id": 7,
        "title": "Meghana Food Paradise",
        "cuisines": ["Andhra, Nati, Kerala, North, South"],
        "stars": 4.7,
        "ETA": "30 mins",
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": "https://www.shutterstock.com/image-photo/dum-handi-chicken-biryani-prepared-600nw-2000023562.jpg"
      },
      {
        "id": 8,
        "title": "Meghana Food Paradise",
        "cuisines": ["Andhra, Nati, Kerala, North, South"],
        "stars": 4.7,
        "ETA": "30 mins",
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": "https://www.shutterstock.com/image-photo/dum-handi-chicken-biryani-prepared-600nw-2000023562.jpg"
      }
]

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[0]}/> */}
                {
                    resList.map((restraunt) => <RestaurantCard key={restraunt} resData={restraunt}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)