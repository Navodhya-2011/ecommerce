import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";


const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs@tinysrgb&-1600",
      img2:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs-tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew:true,
      oldPrice: 19,
      price:12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb6w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew:true,
      oldPrice: 19,
      price:12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs-tinysrgb&w=1600",
      title: "Skirt",
      isNew:true,
      oldPrice: 19,
      price:12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs-tinysrgb&w=1600",
      title: "Hat",
      isNew:true,
      oldPrice: 19,
      price:12,
    },
  ]

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Headless commerce platforms are built with flexibility in mind, allowing you to create differentiated shopping experiences anywhere, with a powerful commerce engine on the backend. Unlike other ecommerce options, with headless commerce, the frontend is separated from the backend, allowing you to change your platform at any time. However, a more complicated process does come with additional systems needed. 
        </p>
      </div>
      <div className="bottom">
      
      {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );

  function Card(props) {
    const { item } = props;
    const title = item.title;
    const description = item.description;
    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
};



export default FeaturedProducts;
