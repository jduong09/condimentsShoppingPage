import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ total, cartItems, incrementProduct, decrementProduct }) => {
  return (
    <div id="div-checkout">
      <div id="div-back"><Link id="link-back" to="/">Back to Home Page</Link></div>
      <div id="div-checkout-list">
        <ul>
          {cartItems['1'] === 0
            ? null
            : 
              <li className="list-item-checkout">
                <div>
                  <h2>Heinz Ketchup</h2>
                  <div className="div-quantity">
                    Quantity: 
                    <div className="div-quantity-controller">
                      <button id="btn-decrement-quantity-ketchup" onClick={(e) => {decrementProduct('1', e)}}>-</button>
                      <span>{cartItems['1']}</span>
                      <button id="btn-increment-quantity-ketchup" onClick={(e) => {incrementProduct('1', e)}}>+</button>
                    </div>
                  </div>
                </div>
                <div>{cartItems['1'] === 0 ? '$0.00' : `$${3.19 * cartItems['1']}`}</div>
              </li>
          }
          {cartItems['2'] === 0
            ? null
            : 
              <li className="list-item-checkout">
                <div>
                  <h2>Kewpie Mayonnaise</h2>
                  <div className="div-quantity">
                    Quantity: 
                    <div className="div-quantity-controller">
                      <button id="btn-decrement-quantity-kewpie" onClick={(e) => {decrementProduct('2', e)}}>-</button>
                      <span>{cartItems['2']}</span>
                      <button id="btn-increment-quantity-kewpie" onClick={(e) => {incrementProduct('2', e)}}>+</button>
                    </div>
                  </div>
                </div>
                <div>{cartItems['2'] === 0 ? '$0.00' : `$${6.19 * cartItems['2']}`}</div>
              </li>
          }
          {cartItems['3'] === 0
            ? null
            :
              <li className="list-item-checkout">
                <div>
                  <h2>Meijer Worcestershire Sauce</h2>
                  <div className="div-quantity">
                    Quantity: 
                    <div className="div-quantity-controller">
                      <button id="btn-decrement-quantity-worcestershire" onClick={(e) => {decrementProduct('3', e)}}>-</button>
                      <span>{cartItems['3']}</span>
                      <button id="btn-increment-quantity-worcestershire" onClick={(e) => {incrementProduct('3', e)}}>+</button>
                    </div>
                  </div>
                </div>
                <div>{cartItems['3'] === 0 ? '$0.00' : `$${1.49 * cartItems['3']}`}</div>
              </li>
          }
        </ul>
      </div>
      <div id="div-total">Total: {total === 0 ? '$0.00' : `$${total}`}</div>
    </div>
  )
}

export default Checkout;