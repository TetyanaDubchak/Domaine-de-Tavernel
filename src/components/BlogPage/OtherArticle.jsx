import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from "../../assets/styles/components/BlogPage/OtherArticle.module.scss";

import img1 from '../../assets/images/blog_page/img-1.png';
import img2 from '../../assets/images/blog_page/img-2.png';
import img3 from '../../assets/images/blog_page/img-3.png';
import btn1 from '../../assets/images/blog_page/arrow-left.svg';
import btn2 from '../../assets/images/blog_page/arrow-right.svg';


export const OtherArticle = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['title-wrapper']}>
                <h2 className={s.title}>Explore our Article</h2>
                <div className={s.line}></div>
            </div>
            <Swiper
                className={s.list}
                modules={[Navigation, Pagination, Autoplay]}
                direction="horizontal"
                loop={true}
                speed={800}
                slidesPerView="auto"
                spaceBetween={20}
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
                    <Link to='/blog-page'><div className={s['article-picture-wrapper']}>
                        <img className={s['article-picture']} width="250" src={img1} alt="grapes" />
                    </div></Link>
                    <div className={s['article-wrapper']}>
                        <Link to='/blog-page'><h3 className={s['article-title']}>The Heart of our Winemaking </h3></Link>
                        <p className={s['article-date']}>January 23, 2024</p>
                        <Link to='/blog-page' className={s['article-button']}>
                            <p>explore</p>
                            <img src={btn2} alt="arrow" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link to='/blog-page'><div className={s['article-picture-wrapper']}>
                        <img className={s['article-picture']} width="250" src={img2} alt="grapes" />
                    </div></Link>
            
                    <div className={s['article-wrapper']}>
                        <Link to='/blog-page'><h3 className={s['article-title']}>The Heart of our Winemaking </h3></Link>
                        <p className={s['article-date']}>January 23, 2024</p>
                        <Link to='/blog-page' className={s['article-button']}>
                            <p>explore</p>
                            <img src={btn2} alt="arrow" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link to='/blog-page'><div className={s['article-picture-wrapper']}>
                        <img className={s['article-picture']} width="250" src={img3} alt="grapes" />
                    </div></Link>
                    
                    <div className={s['article-wrapper']}>
                        <Link to='/blog-page'><h3 className={s['article-title']}>The Heart of our Winemaking </h3></Link>
                        <p className={s['article-date']}>January 23, 2024</p>
                        <Link to='/blog-page' className={s['article-button']}>
                            <p>explore</p>
                            <img src={btn2} alt="arrow" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link to='/blog-page'><div className={s['article-picture-wrapper']}>
                        <img className={s['article-picture']} width="250" src={img1} alt="grapes" />
                    </div></Link>
                   
                    <div className={s['article-wrapper']}>
                        <Link to='/blog-page'><h3 className={s['article-title']}>The Heart of our Winemaking </h3></Link>
                        <p className={s['article-date']}>January 23, 2024</p>
                        <Link to='/blog-page' className={s['article-button']}>
                            <p>explore</p>
                            <img src={btn2} alt="arrow" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link to='/blog-page'><div className={s['article-picture-wrapper']}>
                        <img className={s['article-picture']} width="250" src={img2} alt="grapes" />
                    </div></Link>
                    
                    <div className={s['article-wrapper']}>
                        <Link to='/blog-page'><h3 className={s['article-title']}>The Heart of our Winemaking </h3></Link>
                        <p className={s['article-date']}>January 23, 2024</p>
                        <Link to='/blog-page' className={s['article-button']}>
                            <p>explore</p>
                            <img src={btn2} alt="arrow" />
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.item}>
                    <Link to='/blog-page'><div className={s['article-picture-wrapper']}>
                        <img className={s['article-picture']} width="250" src={img3} alt="grapes" />
                    </div></Link>
                   
                    <div className={s['article-wrapper']}>
                        <Link to='/blog-page'><h3 className={s['article-title']}>The Heart of our Winemaking </h3></Link>
                        <p className={s['article-date']}>January 23, 2024</p>
                        <Link to='/blog-page' className={s['article-button']}>
                            <p>explore</p>
                            <img src={btn2} alt="arrow" />
                        </Link>
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
            <div className={`${s['pagination-bullet']} ${['bullet-wrapper-gallery']}`}></div>
        </section>
    );
}