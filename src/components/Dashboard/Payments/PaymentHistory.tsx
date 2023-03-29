import Image from 'next/image'
import React from 'react'

const PaymentHistory = () => {
  return (
    <div>
      {Array.from(Array(3).keys()).map((_v) => (
        <div className="w-full flex justify-between my-2  bg-white p-3 shadow-sm rounded-main border border-secondary ">
          <div className="space-y-2">
            <div>
              Payment ID :<b>#{(Math.random() * 1000000).toFixed(0)}</b>
            </div>
            <p>
              Total Amount :<b>${(Math.random() * 1000).toFixed(0)}</b>
            </p>
            <p>Date: 02-01-2023 at 12:30PM</p>
          </div>
          <Image
            alt="download_image"
            height={90}
            width={90}
            src="/download.png"
          />
        </div>
      ))}
    </div>
  )
}

export default PaymentHistory
