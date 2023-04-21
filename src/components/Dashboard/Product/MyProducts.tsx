import { JustifyCenter } from '@/components/twin'
import { products } from '@/constants/products'
import React from 'react'
import SingleProduct from './SingleProduct'

const MyProducts = () => {
  return (
    <>
      {true ? (
        <section aria-labelledby="cart-heading">
          <ul role="list" className=" ">
            {products.map((product) => (
              <SingleProduct product={product} />
            ))}
          </ul>
        </section>
      ) : (
        <JustifyCenter className="flex-col mt-20 h-full max-w-xs mx-auto">
          <p className="font-bold">No product added yet!</p>
          <p className="text-center">
            This section will contain the products, All added products will be
            show here
          </p>
          <button className="w-full my-4 py-3 flex justify-center px-4 border bg-primary rounded-main shadow-sm text-sm font-medium  text-white">
            Add Product
          </button>
        </JustifyCenter>
      )}
    </>
  )
}

export default MyProducts
