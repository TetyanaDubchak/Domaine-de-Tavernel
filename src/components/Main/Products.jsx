import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from "../../assets/styles/components/Main/Products.module.scss";

import img1 from '../../assets/images/main/products/img1.jpg';
import img2 from '../../assets/images/main/products/img2.jpg';
import img3 from '../../assets/images/main/products/img3.jpg';
import btn1 from '../../assets/images/main/products/prod-arrow-left.svg';
import btn2 from '../../assets/images/main/products/prod-arrow-right.svg';


export const Products = () => {
  return (
    <section className={s.wrapper}>
      <div className={s['title-wrapper']}>
        <h2 className={s.title}>Explore our promotional products</h2>
        <div className={s.line}></div>
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
          el: `.${s['pagination-wrapper']}`,
          type: 'progressbar',
        }}
        breakpoints={{
          991: {
            slidesPerView: 3,
            pagination: {
            el: `.${s['pagination-bullet']}`,
            type: 'bullets',
            clickable: true,
                },
          }
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
        <img src={btn1} alt="button" />
      </button>
      <button className={`swiper-button-next ${s['next-btn']}`} type="button">
        <img src={btn2} alt="button" />
          </button>
          <div className={`${s['pagination-wrapper']} ${['progressbar-wrapper-products']}`}>
                  <span className={s['swiper-pagination-progressbar-fill']}>
                  </span>
      </div>
      <div className={`${s['pagination-bullet']} ${['bullet-wrapper']}`}></div>
      <div className={s['sign-wrapper']}>
        <p>Tavernel</p>
      </div>
    </section>
  );
};
