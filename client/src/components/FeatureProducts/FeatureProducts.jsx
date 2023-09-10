import React from "react";
import Card from "../Card/Card";
import "./FeatureProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeatureProducts = ({ type }) => {
  
  const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)  
  return (
    <div className="featureProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos
          dicta eius nemo vero ullam eveniet accusamus error quisquam provident,
          odit asperiores hic voluptates veniam temporibus iusto aspernatur.
          Voluptate, labore.
        </p>
      </div>
      <div className="bottom">
        {error
          ?"something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};


export default FeatureProducts;

































// import React, { useEffect, useState } from "react";
// import "./FeatureProducts.scss";
// import Card from "../Card/Card";
// import axios from

// const FeatureProducts = ({ type }) => {
//   const data = [
//     {
//       id: 1,
//       img: "https://images.pexels.com/photos/9880327/pexels-photo-9880327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       img2: "https://images.pexels.com/photos/9806426/pexels-photo-9806426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       title: "long sleeve t-shirt",
//       isNew: true,
//       oldPrice: 1000,
//       price: 700,
//     },
//     {
//       id: 2,
//       img: "https://images.pexels.com/photos/9880327/pexels-photo-9880327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       img2: "https://images.pexels.com/photos/9806426/pexels-photo-9806426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       title: "long sleeve t-shirt",
//       isNew: true,
//       oldPrice: 1000,
//       price: 700,
//     },
//     {
//       id: 3,
//       img: "https://images.pexels.com/photos/9880327/pexels-photo-9880327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       img2: "https://images.pexels.com/photos/9806426/pexels-photo-9806426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       title: "long sleeve t-shirt",
//       isNew: true,
//       oldPrice: 1000,
//       price: 700,
//     },
//     {
//       id: 4,
//       img: "https://images.pexels.com/photos/9880327/pexels-photo-9880327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       img2: "https://images.pexels.com/photos/9806426/pexels-photo-9806426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       title: "long sleeve t-shirt",
//       isNew: true,
//       oldPrice: 1000,
//       price: 700,
//     },
//   ];

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await axios.get(process.env.REACT_APP_API_URL, {
//           Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
//         });
//       } catch (err) {
//         console.log(err)
//       }
//     };
//   }, []);

//   return (
//     <div className="featureProducts">
//       <div className="top">
//         <h1>{type} products</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos
//           dicta eius nemo vero ullam eveniet accusamus error quisquam provident,
//           odit asperiores hic voluptates veniam temporibus iusto aspernatur.
//           Voluptate, labore.
//         </p>
//       </div>
//       <div className="bottom">
//         {data.map((item) => (
//           <Card item={item} key={item.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureProducts;
