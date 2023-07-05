import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = ({ condiments }) => {
  const listCondiments = Object.entries(condiments).map((condimentsArr, idx) => {
    const productId = condimentsArr[0]
    const condiment = condimentsArr[1];
    return (
      <li key={idx} className="list-item-condiment">
        <h2>{condiment.name}</h2>
        <Link to={`/product/${productId}`}>Visit Product Page</Link>
      </li>
    )
  }) 

  return (
    <div id="div-homepage">
      <h1>Home Page</h1>
      <div id="div-products">
        <ul id="list-products">{listCondiments}</ul>
      </div>
    </div>
  )
};

export default HomePage;