import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <section className='mt-3 relative overflow-hidden text-white'>
      <div className='container max-w-screen-xl mx-auto h-3/4'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src='/1st.jpg' alt='' className='rounded-md h-1/2 md:h-auto object-cover w-full' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/2nd.png' alt='' className='rounded-md h-1/2 md:h-auto object-cover w-full' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/3rd.jpg' alt='' className='rounded-md h-1/2 md:h-auto object-cover w-full ' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Hero;
