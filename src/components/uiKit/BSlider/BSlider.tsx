import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
   Navigation, Pagination,
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./styles.css";
import { SliderTitleWrapper, SliderWrapper, SliderWrapperImage, SwiperWrapper } from './StyledComponents'

SwiperCore.use([Navigation, Pagination]);



const BSlider = (props) => {
   const { slideList, slideListMob } = props;

   return (
      <SwiperWrapper>
         <SliderWrapper>
            <SliderTitleWrapper>
               <h1>
                  6RMB is the DeFi ecosystem
                  for sustainable mining
               </h1>
               <h3>
                  Enjoy profitable yield farming and exchanges with the lowest fees in DeFi space!
               </h3>
            </SliderTitleWrapper>

            <SliderWrapperImage className='slider-uper-image' src='/images/slider/SliderTopWrapper.png' alt='' />

         </SliderWrapper>


         <Swiper
            slidesPerView={1}
            className='swiperCustom'
            navigation
            pagination={{ clickable: true }}
         >
            {/* eslint-disable-next-line react/no-array-index-key */}

            {slideListMob && slideListMob.map((item, index) =>

               <SwiperSlide key={item.id} className='swiper-slide-custom-mob'>

                  <a href={item.href} >

                     <img className='swiper-slide-image' src={item.image} alt="" />

                  </a>

               </SwiperSlide>)}

            {slideList && slideList.map((item, index) =>

               <SwiperSlide key={item.id} className='swiper-slide-custom'>

                  <a href={item.href} >

                     <img className='swiper-slide-image' src={item.image} alt="" />

                  </a>

               </SwiperSlide>)}

         </Swiper>

      </SwiperWrapper>
   );
}

export default BSlider
