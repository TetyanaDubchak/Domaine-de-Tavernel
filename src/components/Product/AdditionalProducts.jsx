import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import picture from '../../assets/images/catalog/products/product-1.png';
import listProduct from "../../assets/json/products.json";

import s from "../../assets/components/Product/AdditionalProducts.module.scss";
import { StarsRating } from "components/CommonFiles/StarsRating";
import { Icon } from "components/CommonFiles/Icon";

export const AdditionalProducts = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['title-wrapper']}>
                <h2 className={s.title}>Explore  our  aditional products</h2>
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
                pagination={{
                    el: `.${s['pagination-wrapper']} .${s.pagination}`,
                    type: 'progressbar',
                }}
                breakpoints={{
                    991: {
                        slidesPerView: 3,
                    }
                }}>
                {listProduct.map((item) => {
                    return <SwiperSlide className={s['products-item']} key={item.id}>
                        <Link to={`/catalog/${item.id}`}>
                        <img className={s['products-picture']} src={picture} alt={item.name} />
                        <div className={s['content-wrapper']}>
                            <div className={s['reviews-wrapper']}>
                                    <StarsRating stars={ item.stars} />
                                <p>{item.review} review</p>
                            </div>
                            <h3 className={s['wine-name']}>{item.name}</h3>
                            <p className={s['wine-taste']}>{item.taste}</p>
                            <div className={s['price-wrapper']}>
                                {item.lastPrice ? <p className={s['last-price']}>{item.lastPrice} EUR</p> : ''}
                                <div className={s['current-price-wrapper']}>
                                    <div className={`${s.availibility} ${item.available ? s['is-available'] : s['is-not-available']}`}><p>{item.available? 'Available': 'Unailable'}</p></div>
                                    <p className={s.price}>{item.price} EUR</p>
                                </div>
                            </div>
                            <button className={s['add-button']} type="button">{item.available? 'add to card': 'Notify me' }</button>
                        </div>
                        <button className={s['like-button']} type='button'><Icon className={s['heart-icon']} type='heart-light'/></button>
                        {item.new ? <div className={s['new-sign']}>new</div> : ''}
                        {item.sale? <div className={s['sale-sign']}>sale</div>: ''}
                        </Link> 
                    </SwiperSlide>
                })}
            </Swiper>
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