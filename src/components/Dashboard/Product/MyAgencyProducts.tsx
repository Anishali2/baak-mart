import { JustifyCenter } from '@/components/twin'
import React from 'react'

const MyAgencyProducts = () => {
  return (
    <JustifyCenter className="flex-col mt-20 h-full max-w-xs mx-auto">
      <p className="font-bold text-xl ">No Agency products found!</p>
      <p className="text-center">
        This section will contain the products, All added products will be show
        here
      </p>
      {/* <button className="w-full my-4 py-3 flex justify-center px-4 border bg-primary rounded-main shadow-sm text-sm font-medium  text-white">
        Add Product
      </button> */}
    </JustifyCenter>
  )
}

export default MyAgencyProducts
