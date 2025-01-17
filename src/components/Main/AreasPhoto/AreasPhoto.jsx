import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from './AreasPhoto.scss';

import img1 from '../../../assets/images/main/areasPhoto/img1.jpg';
import btn1 from '../../../assets/images/main/arrow-left.svg';
import btn2 from '../../../assets/images/main/arrow-right.svg';

export const AreasPhoto = () => {
    return (
        <section className={s['wrapper']}>
    <Swiper
        className={s.list}
        modules={[Navigation, Pagination,Autoplay]}
        direction="horizontal"
        loop={true}
        speed={800}
        slidesPerView={1}
        spaceBetween={10}
        autoplay= {{delay: 3000,
        disableOnInteraction:false }
        
    }
      navigation={{
          prevEl: 'swiper-button-prev',
          nextEl: 'swiper-button-next',
        }}
        pagination={{
          el: `.${s.pagination}`,
          clickable: true,
          type: 'bullets',
        }}
      >
                <SwiperSlide className={s.item}><Link to='/about'><img className={s.picture} width='375' src={img1} alt="wine" /></Link></SwiperSlide>
                <SwiperSlide className={s.item}><Link to='/about'><img className={s.picture} width='375' src={img1} alt="wine" /></Link></SwiperSlide>
                <SwiperSlide className={s.item}><Link to='/about'><img className={s.picture} width='375' src={img1} alt="wine" /></Link></SwiperSlide>
            </Swiper>
            <button className={`swiper-button-prev ${s['prev-btn']}`}><img src={btn1} alt="button" /></button>
            <button className={`swiper-button-next ${s['next-btn']}`}><img src={btn2} alt="button" /></button>
            <div className="pagination"></div>
        </section>
    )
}