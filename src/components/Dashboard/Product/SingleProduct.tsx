import { agencies } from '@/constants/agencies'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import ProductImagesCarousel from '@/components/Carousel/ProductImages'

const SingleProduct = ({ product }: { product: any }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-white my-2 border border-secondary py-2 rounded-main px-2">
      <li key={product.id} className="flex ">
        {/* <div className="h-fit border rounded-main">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-24 h-24 rounded-md sm:w-40 sm:h-40"
                  />
                </div> */}
        <ProductImagesCarousel />

        <div className="ml-4 flex-1 flex flex-col sm:ml-6">
          <div>
            <div className="flex justify-between">
              <h4 className="text-sm">
                <a
                  href={product.href}
                  className="font-semibold text-2xl text-gray-700 hover:text-gray-800"
                >
                  {product.name}
                </a>
              </h4>
              <button
                className={`  bg-primary text-xs rounded-md px-2 py-0.5 text-white`}
              >
                Add Baak Slot
              </button>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Product Size:<b>{product.size}</b>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Product Category:<b>{product.color}</b>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, enim
              perspiciatis libero nobis tempore at dolorem quia, incidunt nisi
              quibusdam eum quasi inventore optio,
            </p>
          </div>

          <div className="">
            <button
              className="flex w-full pr-4 py-2 text-sm font-medium text-primary bg-transparent focus:outline-none  focus:ring-none focus:ring-transparent"
              onClick={() => setIsOpen(!isOpen)}
            >
              Book Slots
              <ChevronDownIcon
                className={` ${
                  isOpen ? ' lg:rotate-[-180deg] ' : ''
                } h-5 w-5 ml-2 text-primary transition-all`}
              />
            </button>
          </div>
        </div>
      </li>
      {isOpen && (
        <div className=" overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            {/* <thead className="bg-white">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium tracking-wider"
                >
                  Agency name
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium  tracking-wider"
                >
                  Products
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium  tracking-wider"
                >
                  Booked slots
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium  tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead> */}
            <tbody className="bg-white divide-y divide-gray-200">
              {agencies.map((agency) => (
                <tr key={agency.agencyName}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-black">
                    {agency.id}
                  </td>
                  <td className="px-6 py-4 lg:w-96 whitespace-nowrap text-sm font-normal text-black">
                    Baak Slot no: {(Math.random() * 1000000).toFixed(0)}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap  font-normal text-right text-sm text-black">
                    <button className="bg-secondary rounded-md px-2 py-1 text-white">
                      Track
                    </button>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap font-normal text-right text-sm text-black">
                    <button className="bg-primary rounded-md px-2 py-1 text-white">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default SingleProduct
