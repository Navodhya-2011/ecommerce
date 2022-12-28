import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );

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
  ];

  return (
    <div className="list">{data?.map(item=>(
      <Card item={item} key={item.id}/>
    ))}

    </div>
  )

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


  // return (
  //   <div className="list">
  //     {loading
  //       ? "loading"
  //       : data?.map((item) => <Card item={item} key={item.id} />)}
  //   </div>
  // );
};

export default List;
