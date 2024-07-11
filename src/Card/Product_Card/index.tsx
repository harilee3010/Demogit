import React from 'react';
import './style.scss';
import imgcard from './assets/NikeZoomKD12.png';

export default function Product() {
  return (
    <div className="productCard">
      <span className="productLike"><i className='bx bx-heart'></i></span>
      <span className="productCart"><i className='bx bx-cart-alt'></i></span>
      <div className="productCard__img">
        <img src= {imgcard} alt="" />
      </div>
      <h2 className="productCard__title">Nike Zoom KD 12</h2>
      <p className="productCard__price">$99</p>
      <div className="productCard__size">
        <h3>Size:</h3>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </div>
      <div className="productCard__color">
        <h3>Color:</h3>
        <span className="green"></span>
        <span className="red"></span>
        <span className="black"></span>
      </div>
      <div className="productCard__action">
        <button>Buy now</button>
        <button>Add cart</button>
      </div>
    </div>
  );
}

