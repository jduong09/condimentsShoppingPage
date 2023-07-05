import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductPage = ({ condiments, setProduct }) => {
  let params = useParams();
  const productId = params.productId;
  const productName = condiments[productId].name;
  const productSize = condiments[productId].size;
  const productPrice = condiments[productId].price;
  const productImg = condiments[productId].img;

  const [quantity, setQuantity] = React.useState(0);

  const incrementQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  }

  const decrementQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity - 1);
  }

  return (
    <div id="product">
      <div><Link to="/">Back to HomePage</Link></div>
      <img id={`product-img-${productId}`} src={productImg} alt={`${productName} product`} />
      <div>
        <h2>{productName}</h2>
        <div>{productSize} oz</div>
        <div>${productPrice}</div>
        <div id="div-quantity-controller">
          <button id="btn-decrement-quantity" onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button id="btn-increment-quantity" onClick={incrementQuantity}>+</button>
        </div>
        <button onClick={(e) => setProduct(productId, quantity, e)}>Add To Cart</button>
      </div>
    </div>
  )
};

export default ProductPage;