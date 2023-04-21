import Header from '@/components/Header'
import React, { useState } from 'react'
import { Flex, JustifyBetween } from '../../twin'
import AddProduct from './AddProduct'
import MyAgencyProducts from './MyAgencyProducts'
import MyProducts from './MyProducts'

const Products = () => {
  const [product, setProduct] = useState<'my' | 'agency' | 'add'>('my')
  return (
    <div>
      <div>
        <JustifyBetween>
          <Header
            title="Products"
            description="All products are here to manage easily"
          />

          <button
            onClick={() => setProduct('add')}
            className={` ${
              product == 'add' ? 'hidden' : ''
            } bg-primary rounded-md px-2 py-1 text-white`}
          >
            Add Product
          </button>
        </JustifyBetween>
        <div className="border-b border-b-primary-light" />
        {product == 'add' ? (
          <AddProduct />
        ) : (
          <>
            <Flex className="space-x-2">
              <button
                onClick={() => setProduct('my')}
                className={` ${
                  product == 'my'
                    ? 'bg-primary text-white'
                    : 'text-primary bg-white shadow-lg'
                } w-fit my-4 py-3 flex justify-center px-4 rounded-main shadow-sm text-sm font-medium `}
              >
                My Products
              </button>
              <button
                onClick={() => setProduct('agency')}
                className={` ${
                  product == 'agency'
                    ? 'bg-primary text-white'
                    : 'text-primary bg-white shadow-lg'
                } w-fit my-4 py-3 flex justify-center px-4  rounded-main shadow-sm text-sm font-medium `}
              >
                My Agency Products
              </button>
            </Flex>

            {product == 'my' ? (
              <MyProducts />
            ) : product == 'agency' ? (
              <MyAgencyProducts />
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}

export default Products
