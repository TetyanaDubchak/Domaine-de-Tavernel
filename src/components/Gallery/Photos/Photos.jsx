
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from "./Photos.module.scss";

import img1 from '../../../assets/images/gallery/photos/img-1.jpg';
import img2 from '../../../assets/images/gallery/photos/img-2.jpg';
import img3 from '../../../assets/images/gallery/photos/img-3.jpg';
import img4 from '../../../assets/images/gallery/photos/img-4.jpg';
import img5 from '../../../assets/images/gallery/photos/img-5.jpg';
import img6 from '../../../assets/images/gallery/photos/img-6.jpg';
import img7 from '../../../assets/images/gallery/photos/img-7.jpg';
import img8 from '../../../assets/images/gallery/photos/img-8.jpg';
import img9 from '../../../assets/images/gallery/photos/img-9.jpg';
import img10 from '../../../assets/images/gallery/photos/img-10.jpg';
import img11 from '../../../assets/images/gallery/photos/img-11.jpg';
import img12 from '../../../assets/images/gallery/photos/img-12.jpg';

import btn1 from '../../../assets/images/gallery/prod-arrow-left.svg';
import btn2 from '../../../assets/images/gallery/prod-arrow-right.svg';


export const Photos = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['title-wrapper']}>
                <h2 className={s.title}>Name of album</h2>
                <p className={s.subtitle}>103 Photos</p>
            </div>
            <Swiper
                className={s.list}
                modules={[Navigation, Pagination, Autoplay]}
                direction="horizontal"
                loop={true}
                speed={800}
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: `.${s['prev-btn']}`,
                    nextEl: `.${s['next-btn']}`,
                }}
                pagination={{
                    el: `.${s['pagination-bullet']}`,
                    type: 'bullets',
                    clickable: true,
                }}
                breakpoints={{
                    991: {
                        slidesPerView: 3,
                        // spaceBetween:6,
                    }
                }}
            >
                <SwiperSlide className={s.item}>
                    <div className={s['images-wrapper-grid']}>
                        <div className={s['img-wrapper-grid-1']}><img className={s.picture} src={img1} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-2']}><img className={s.picture} src={img2} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-3']}><img className={s.picture} src={img3} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-4']}><img className={s.picture} src={img4} alt="wine" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <div className={s['images-wrapper-grid']}>
                        <div className={s['img-wrapper-grid-1']}><img className={s.picture} src={img5} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-2']}><img className={s.picture} src={img6} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-3']}><img className={s.picture} src={img7} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-4']}><img className={s.picture} src={img8} alt="wine" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <div className={s['images-wrapper-grid']}>
                        <div className={s['img-wrapper-grid-1']}><img className={s.picture} src={img9} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-2']}><img className={s.picture} src={img10} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-3']}><img className={s.picture} src={img11} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-4']}><img className={s.picture} src={img12} alt="wine" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <div className={s['images-wrapper-grid']}>
                        <div className={s['img-wrapper-grid-1']}><img className={s.picture} src={img1} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-2']}><img className={s.picture} src={img2} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-3']}><img className={s.picture} src={img3} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-4']}><img className={s.picture} src={img4} alt="wine" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <div className={s['images-wrapper-grid']}>
                        <div className={s['img-wrapper-grid-1']}><img className={s.picture} src={img5} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-2']}><img className={s.picture} src={img6} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-3']}><img className={s.picture} src={img7} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-4']}><img className={s.picture} src={img8} alt="wine" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <div className={s['images-wrapper-grid']}>
                        <div className={s['img-wrapper-grid-1']}><img className={s.picture} src={img9} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-2']}><img className={s.picture} src={img10} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-3']}><img className={s.picture} src={img11} alt="wine" /></div>
                        <div className={s['img-wrapper-grid-4']}><img className={s.picture} src={img12} alt="wine" /></div>
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