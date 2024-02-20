import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation,Pagination } from 'swiper/modules';
// import { luffy, onep } from '../assets';
import { AspectRatio } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { IAnimeResult, IMovieResult } from '../interfaces/type';
import ImageContainer from './ImageContainer';

export type SliderProps={ 
  content:IMovieResult[] | IAnimeResult[] | null | undefined,
  space?:number,
  slide?:number,
  page?:boolean,
  play?:boolean,
  ratio?:number,
  type?:string
}
const Slider = (props:SliderProps ) => {
  const { content,space,slide,page,play,ratio,type }=props;
  const [activeSlide,setActiveSlide]=useState<number>(0)
  const handleSlideChange=(swiper:{activeIndex:React.SetStateAction<number>})=>{
    setActiveSlide(swiper.activeIndex)
  }
  return (
      <Swiper
          modules={[Navigation,Pagination]}
          pagination={page??page}
          spaceBetween={space??space}
          slidesPerView={slide??slide}
          draggable={true}
          autoplay={play??play}
          onSlideChange={handleSlideChange}
      >
        {content?.map((i, index) => {  //Data replaces with content
          return <SwiperSlide key={index}>
            
              <NavLink to={`/sourcedetail/${type?`anime/${i.id}`:i.id}`} className={activeSlide===index?"active-slide":""}>
                <AspectRatio ratio={ratio?ratio:16/9} >
                    <ImageContainer props={i}/>
                </AspectRatio>
              </NavLink>
          </SwiperSlide>
      })}
      </Swiper>
  );
};

export default Slider;
