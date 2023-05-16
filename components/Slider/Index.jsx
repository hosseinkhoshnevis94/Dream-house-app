import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './index.module.css'
import { Pagination, Navigation } from "swiper";
import { Image } from '@chakra-ui/react';

export const Slider = ({images}) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        {images.map(image =>(
        <SwiperSlide id={image.id}><Image className={styles.swiperSlideImage} src={image.url}></Image> </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
