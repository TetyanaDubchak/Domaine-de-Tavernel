import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from '../../assets/styles/components/About/SlidersFirst.module.scss';

import btn1 from "../../assets/images/about/arrow-left.svg";
import btn2 from "../../assets/images/about/arrow-right.svg";
import grape from "../../assets/images/about/swipers/grape.png";

export const SlidersFirst = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['img-wrapper']}><img width='280' src={grape} alt="grape" /></div>
            <div className={s['swiper-wrapper']}>
                <Swiper
                    className={s.list}
                    modules={[Navigation, Pagination]}
                    direction="horizontal"
                    loop={true}
                    speed={800}
                    slidesPerView={1}
                    navigation={{
                    prevEl: `.${s['prev-btn']}`,
                    nextEl: `.${s['next-btn']}`,
                    }}
                    pagination= {{
                        el: `.${s['pagination-bullet']}`,
                        type: 'bullets',
                        clickable: true,
                        }}
                    >
                        <SwiperSlide className={s.item}><div>
                            <h3 className={s.title}>About Company</h3>
                            <p className={s.text}>
                                For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.
                                For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. 
                            </p>
                            </div></SwiperSlide>
                        <SwiperSlide className={s.item}><div>
                            <h3 className={s.title}>About Company</h3>
                            <p className={s.text}>
                                For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.
                                For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. 
                            </p>
                            </div></SwiperSlide>
                        <SwiperSlide className={s.item}><div>
                            <h3 className={s.title}>About Company</h3>
                            <p className={s.text}>
                                For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.
                                For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. 
                            </p>
                            </div></SwiperSlide>
                        <SwiperSlide className={s.item}><div>
                            <h3 className={s.title}>About Company</h3>
                            <p className={s.text}>
                                For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.
                                For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. 
                            </p>
                            </div></SwiperSlide>
                    </Swiper>
                <button className={`swiper-button-prev ${s['prev-btn']}`} type="button">
                   <img src={btn1} alt="arrow" />
            </button>
            <div className={`${s['pagination-bullet']} ${['bullet-wrapper-about'] }`}></div>
                <button className={`swiper-button-next ${s['next-btn']}`} type="button">
                    <img src={btn2} alt="arrow" />
            </button>
            </div>
        </section>
    )
}