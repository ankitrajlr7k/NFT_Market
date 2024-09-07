

import React, { useRef, useState } from 'react';
import users from '../../public/data/users';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import Avatarcard from './Avatarcard';

const Avatar = () => {
  return (
    <div className='text-white h-full max-w-6xl container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          users.map((user, idx) => (
            <SwiperSlide key={idx}>
              <div>
                <Avatarcard
                  img={user.img}
                  name={user.name}
                  handle={user.handle}
                  gradient={user.gradient}



                />

              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  )
}

export default Avatar