import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from "./Products.module.scss";

import img1 from '../../../assets/images/main/products/img1.jpg';
import img2 from '../../../assets/images/main/products/img2.jpg';
import img3 from '../../../assets/images/main/products/img3.jpg';

import sprite from '../../../assets/images/sprite.svg';

export const Products = () => {
  return (
    <section className={s.wrapper}>
      <div className={s['title-wrapper']}>
        <h3 className={s.title}>Explore our promotional products</h3>
      </div>
    <Swiper
        className={s.list}
        modules={[Navigation, Pagination,Autoplay]}
        direction="horizontal"
        loop={true}
        speed={800}
        slidesPerView="auto"
        spaceBetween={10}
        autoplay= {{delay: 3000,
        disableOnInteraction:false }
        
    }
        navigation={{
          prevEl: `.${s['prev-btn']}`,
          nextEl: `.${s['next-btn']}`,
        }}
        pagination={{
          el: `.${s['pagination-wrapper']} .${s.pagination}`,
          type: 'progressbar',
        }}
      >
        <SwiperSlide className={s.item}>
          <Link>
            <img width="163" src={img1} alt="Bottle of wine" />
            <div className={s['img-title']}>
            <p>The French Touch</p>
          </div>
          </Link>
          
        </SwiperSlide>
        <SwiperSlide className={s.item}>
          <Link>
            <img width="163" src={img2} alt="Bottle of wine" />
          </Link>
          <div className={s['img-title']}>
            <p>The French Touch</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.item}>
          <Link>
            <img width="163" src={img3} alt="Bottle of wine" />
          </Link>
          <div className={s['img-title']}>
            <p>The French Touch</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.item}>
          <Link>
            <img width="163" src={img1} alt="Bottle of wine" />
          </Link>
          <div className={s['img-title']}>
            <p>The French Touch</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.item}>
          <Link>
            <img width="163" src={img2} alt="Bottle of wine" />
          </Link>
          <div className={s['img-title']}>
            <p>The French Touch</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.item}>
          <Link>
            <img width="163" src={img3} alt="Bottle of wine" />
          </Link>
          <div className={s['img-title']}>
            <p>The French Touch</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className={`swiper-button-prev ${s['prev-btn']}`} type="button">
        <svg width="54" height="54">
          <use href={`${sprite}#icon-arrow-left`}></use>
        </svg>
      </button>
      <button className={`swiper-button-next ${s['next-btn']}`} type="button">
        <svg width="54" height="54">
          <use href={`${sprite}#icon-arrow-right`}></use>
        </svg>
          </button>
          <div className={s['pagination-wrapper']}>
              <div className={s.pagination}>
                  <span className={s['swiper-pagination-progressbar-fill']}>
                  </span>
              </div>
          </div>
      <div className={s['sign-wrapper']}>
        <p>Tavernel</p>
      </div>
    </section>
  );
};
