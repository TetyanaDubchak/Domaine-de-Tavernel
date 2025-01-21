import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from "./Gallery.module.scss";

import img1 from '../../../assets/images/main/gallery/img1.jpg';
import img2 from '../../../assets/images/main/gallery/img2.jpg';
import img3 from '../../../assets/images/main/gallery/img3.jpg';
import img4 from '../../../assets/images/main/gallery/img4.jpg';
import img5 from '../../../assets/images/main/gallery/img5.jpg';
import btn1 from '../../../assets/images/main/products/prod-arrow-left.svg';
import btn2 from '../../../assets/images/main/products/prod-arrow-right.svg';


export const Gallery = () => {
    return (
        <section className={s.wrapper}>
            <div>
                <div className={s['title-wrapper']}>
                    <h2 className={s.title}>Explore about our  gallery</h2>
                    <div className={s.line}></div>
                </div>
                <Swiper
                    className={s.list}
                    modules={[Navigation, Pagination]}
                    direction="horizontal"
                    loop={true}
                    speed={800}
                    slidesPerView="auto"
                    spaceBetween={8}
            
                    navigation={{
                    prevEl: `.${s['prev-btn']}`,
                    nextEl: `.${s['next-btn']}`,
                    }}
                    pagination= {{
                        el: `.${s['pagination-bullet']}`,
                        type: 'bullets',
                        clickable: true,
                        }}
                    breakpoints={{
                        991: {
                            slidesPerView: 5}
                        }}>
                        <SwiperSlide className={s.item}><Link to='/gallery'><img width='163'
                                src={img1}
                                alt="Bottle of wine"
                    />
                        <p className={s['img-title']}>winemaking</p>
                    </Link></SwiperSlide>
                        <SwiperSlide className={s.item}><Link to='/gallery'><img width='163'
                                src={img2}
                                alt="Bottle of wine"
                            /><p className={s['img-title']}>winemaking</p></Link></SwiperSlide>
                        <SwiperSlide className={s.item}><Link to='/gallery'><img width='163'
                                src={img3}
                                alt="Bottle of wine"
                            /><p className={s['img-title']}>winemaking</p></Link></SwiperSlide>
                        <SwiperSlide className={s.item}><Link to='/gallery'><img width='163'
                                src={img4}
                                alt="Bottle of wine"
                            /><p className={s['img-title']}>winemaking</p></Link></SwiperSlide>
                        <SwiperSlide className={s.item}><Link to='/gallery'><img width='163'
                                src={img5}
                                alt="Bottle of wine"
                            /><p className={s['img-title']}>winemaking</p></Link></SwiperSlide>
                        <SwiperSlide className={s.item}><Link to='/gallery'><img width='163'
                                src={img1}
                                alt="Bottle of wine"
                            /><p className={s['img-title']}>winemaking</p></Link></SwiperSlide>
                    </Swiper>
                    <button className={`swiper-button-prev ${s['prev-btn']}`} type="button">
                   <img src={btn1} alt="arrow" />
                </button>
                <button className={`swiper-button-next ${s['next-btn']}`} type="button">
                    <img src={btn2} alt="arrow" />
                </button>
            </div>
            <div className={s['pagination-bullet']}></div>
        </section>
    )
}