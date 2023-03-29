import React, { useState } from 'react'
import { Flex, JustifyBetween } from '../../twin'
import AddProduct from './AddProduct'
import MyAgencyProducts from './MyAgencyProducts'
import MyProducts from './MyProducts'

const Products = () => {
  const [product, setProduct] = useState<'my' | 'agency' | 'add'>('my')
  return (
    <div className="lg:pl-80 flex flex-col flex-1">
      <div className=" flex max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 ">
        <main className="flex-1 pb-8">
          <div className="mt-8">
            {/* Activity table (small breakpoint and up) */}
            <div className="flex flex-col mt-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <JustifyBetween>
                    <div>
                      <p className="pt-3 text-lg font-bold ">Products</p>
                      <p className="py-1 text-sm text-secondary font-medium tracking-wider">
                        All products are here to manage easily{' '}
                      </p>
                    </div>
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
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Products
