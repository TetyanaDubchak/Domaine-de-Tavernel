import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from "../../assets/components/Product/PhotoSlider.module.scss";

import img1 from "../../assets/images/product/img-1.png";
import btn1 from "../../assets/images/product/arrow-left.svg";
import btn2 from "../../assets/images/product/arrow-right.svg";
import { Icon } from 'components/CommonFiles/Icon';


export const PhotoSlider = ({isLike,setLike}) => {
    return (
        <div className={s['wrapper']}>
            <ul className={s['extra-wrapper']}>
                <li className={s['extra-item']}><img src={img1} alt="wine"/></li>
                <li className={s['extra-item']}><img src={img1} alt="wine"/></li>
            </ul>
            <div className={s['swiper-wrapper']}>
                <Swiper
                    className={s.list}
                    modules={[Navigation]}
                    direction="horizontal"
                    loop={true}
                    speed={800}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                    prevEl: `.${s['prev-btn']}`,
                    nextEl: `.${s['next-btn']}`,
                    }}
                    >
                        <SwiperSlide className={s.item}>
                            <img src={img1} alt="wine" />
                            </SwiperSlide>
                        <SwiperSlide className={s.item}>
                                <img src={img1} alt="wine" />
                            </SwiperSlide>
                        <SwiperSlide className={s.item}>
                            <img src={img1} alt="wine" />
                            </SwiperSlide>
                        <SwiperSlide className={s.item}>
                            <img src={img1} alt="wine" />
                            </SwiperSlide>
                    </Swiper>
                <button className={`swiper-button-prev ${s['prev-btn']}`} type="button">
                   <img src={btn1} alt="arrow-button" />
            </button>
                <button className={`swiper-button-next ${s['next-btn']}`} type="button">
                   <img src={btn2} alt="arrow-button" />
            </button>
            </div>
            <button onClick={setLike} className={s['like-btn']} type='button'>
               <Icon type={isLike? 'heart-fill':'heart-light'}/>
            </button>
           
        </div>
    )
}