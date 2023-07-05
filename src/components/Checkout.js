import React from 'react';

const Checkout = ({ total, cartItems, incrementProduct, decrementProduct }) => {
  return (
    <div>
      <ul>
        <li>
          <h2>Heinz Ketchup</h2>
          <div>Quantity: {cartItems['1']}</div>
          <div>Price: {3.19 * cartItems['1']}</div>
          <div>
            <button id="btn-decrement-quantity-ketchup" onClick={(e) => {decrementProduct('1', e)}}>-</button>
            <span>{cartItems['1']}</span>
            <button id="btn-increment-quantity-ketchup" onClick={(e) => {incrementProduct('1', e)}}>+</button>
          </div>
        </li>
        <li>
          <h2>Kewpie Mayonnaise</h2>
          <div>Quantity: {cartItems['2']}</div>
          <div>Price: {6.19 * cartItems['2']}</div>
          <div>
            <button id="btn-decrement-quantity-kewpie" onClick={(e) => {decrementProduct('1', e)}}>-</button>
            <span>{cartItems['2']}</span>
            <button id="btn-increment-quantity-kewpie" onClick={(e) => {incrementProduct('2', e)}}>+</button>
          </div>
        </li>
        <li>
          <h2>Meijer Worcestershire Sauce</h2>
          <div>Quantity: {cartItems['3']}</div>
          <div>Price: {1.49 * cartItems['3']}</div>
          <div>
            <button id="btn-decrement-quantity-worcestershire" onClick={(e) => {decrementProduct('1', e)}}>-</button>
            <span>{cartItems['3']}</span>
            <button id="btn-increment-quantity-worcestershire" onClick={(e) => {incrementProduct('3', e)}}>+</button>
          </div>
        </li>
      </ul>
      <div>{total}</div>
    </div>
  )
}

export default Checkout;