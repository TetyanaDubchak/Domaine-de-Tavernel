import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from "../../assets/components/Gallery/Albums.module.scss";

import img1 from '../../assets/images/gallery/albums/album-1.png';
import img2 from '../../assets/images/gallery/albums/album-2.png';
import img3 from '../../assets/images/gallery/albums/album-3.png';
import btn1 from '../../assets/images/gallery/prod-arrow-left.svg';
import btn2 from '../../assets/images/gallery/prod-arrow-right.svg';


export const Albums = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['title-wrapper']}>
                <h2 className={s.title}>Our Albums</h2>
                <div className={s.line}></div>
            </div>
            <Swiper
                className={s.list}
                modules={[Navigation, Pagination, Autoplay]}
                direction="horizontal"
                loop={true}
                speed={800}
                slidesPerView="auto"
                spaceBetween={10}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }
        
                }
                navigation={{
                    prevEl: `.${s['prev-btn']}`,
                    nextEl: `.${s['next-btn']}`,
                }}
                pagination={{
                    el: `.${s['pagination-wrapper']} .${s.pagination}`,
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
                        <img width="335" src={img1} alt="Bottle of wine" />
                        <div className={s['img-title']}>
                            <p className={s['photos-name']}>Name of album</p>
                             <p className={s['photos-number']}>103 Photos</p>
                        </div>
                    </Link>
          
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link>
                        <img width="335" src={img2} alt="Bottle of wine" />
                    </Link>
                    <div className={s['img-title']}>
                        <p className={s['photos-name']}>Name of album</p>
                        <p className={s['photos-number']}>103 Photos</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link>
                        <img width="335" src={img3} alt="Bottle of wine" />
                    </Link>
                    <div className={s['img-title']}>
                        <p className={s['photos-name']}>Name of album</p>
                        <p className={s['photos-number']}>103 Photos</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link>
                        <img width="335" src={img1} alt="Bottle of wine" />
                    </Link>
                    <div className={s['img-title']}>
                        <p className={s['photos-name']}>Name of album</p>
                        <p className={s['photos-number']}>103 Photos</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link>
                        <img width="335" src={img2} alt="Bottle of wine" />
                    </Link>
                    <div className={s['img-title']}>
                        <p className={s['photos-name']}>Name of album</p>
                        <p className={s['photos-number']}>103 Photos</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link>
                        <img width="335" src={img3} alt="Bottle of wine" />
                    </Link>
                    <div className={s['img-title']}>
                        <p className={s['photos-name']}>Name of album</p>
                        <p className={s['photos-number']}>103 Photos</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <button className={`swiper-button-prev ${s['prev-btn']}`} type="button">
                <img src={btn1} alt="button" />
            </button>
            <button className={`swiper-button-next ${s['next-btn']}`} type="button">
                <img src={btn2} alt="button" />
            </button>
            <div className={s['pagination-wrapper']}>
                <div className={s.pagination}>
                    <span className={s['swiper-pagination-progressbar-fill']}>
                    </span>
                </div>
            </div>
            <div className={s['pagination-bullet']}></div>
        </section>
    );
}