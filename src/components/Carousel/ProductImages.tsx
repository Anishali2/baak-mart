import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (_index: any, className: string) {
      return '<span class="' + className + '"></span>'
    }
  }

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper max-w-[176px] max-h-[160px]"
      >
        {Array.from(Array(5).keys()).map((_v) => (
          <SwiperSlide>
            <div className="h-fit border rounded-main">
              <img
                src={'/product.png'}
                className="w-24 h-24 rounded-md sm:w-44 sm:h-40"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
