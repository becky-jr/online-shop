import './ProductCard.css'
import React from 'react'


type ProductProps = {
  productImg: string,
  productName: string,
  productDesc: string,
  productPrice: number
}

const ProductCard = ({ productImg, productName, productDesc, productPrice }: ProductProps) => {
  return (
    <div className='ProductCard'>


      <div className="product-img">
        <img src={productImg} alt="" />
      </div>

      <div className="product-content">

        <div className="product-name">
          {productName.slice(0, 25)}
        </div>

        {/* <div className="product-descr">
        {productDesc}
      </div> */}

        <div className="product-price">
          {productPrice}
        </div>
      </div>


    </div>
  )
}

export default ProductCard