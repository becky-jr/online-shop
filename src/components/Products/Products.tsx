import './Products.css'
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

import type { Products } from '../../Models'

const Products = () => {

  const [data, setData] = useState<Products[]>([])

  const [error, setError] = useState<string | null>(null)


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error('HTTP error occured')
        }

        const json = await response.json()
        setData(json)
      }
      catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    }

    fetchData()


  }, [])

  console.log(data);



  return (
    <div className='Products'>


      {/* <ProductCard productImg=''/> */}


      <div className="title">
        Каталог
      </div>

      <div className="filter">

        

      </div>

      <div className="products-parent">




        {data.map(
          (item, index) => (

            <ProductCard
              key={index}
              productImg={item.image}
              productName={item.title}
              productDesc={item.description}
              productPrice={item.price} />

          )
        )}

      </div>


    </div>
  )
}

export default Products