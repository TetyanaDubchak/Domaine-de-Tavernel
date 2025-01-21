import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from './Photo.scss';

import img1 from '../../../assets/images/main/areasPhoto/img1.jpg';
import img1desc from '../../../assets/images/main/areasPhoto/img1-desc.png';
import btn1 from '../../../assets/images/main/arrow-left.svg';
import btn2 from '../../../assets/images/main/arrow-right.svg';

export const AreasPhoto = () => {
    return (
        <section className='wrapper'>
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
          prevEl: `.${'prev-btn'}`,
          nextEl: `.${'next-btn'}`,
        }}
        pagination={{
          el: `.${'pagination'}`,
          clickable: true,
          type: 'bullets',
        }}
      >
          <SwiperSlide className={s.item}><Link to='/about'><picture>
              <source
                srcSet={img1desc}
                media="(min-width: 991px)"
              />
              <source
                srcSet={img1}
                media="(max-width: 990px)"
              />
              <img
                src={img1desc}
              alt="wine"
              className="picture"
              />
            </picture></Link></SwiperSlide>
                <SwiperSlide className={s.item}><Link to='/about'><picture>
              <source
                srcSet={img1desc}
                media="(min-width: 991px)"
              />
              <source
                srcSet={img1}
                media="(max-width: 990px)"
              />
              <img
                src={img1desc}
              alt="wine"
              className="picture"
              />
            </picture></Link></SwiperSlide>
                <SwiperSlide className={s.item}><Link to='/about'><picture>
              <source
                srcSet={img1desc}
                media="(min-width: 991px)"
              />
              <source
                srcSet={img1}
                media="(max-width: 990px)"
              />
              <img
                src={img1desc}
              alt="wine"
              className="picture"
              />
            </picture></Link></SwiperSlide>
            </Swiper>
            <button className={`swiper-button-prev ${'prev-btn'}`}><img src={btn1} alt="button" /></button>
            <button className={`swiper-button-next ${'next-btn'}`}><img src={btn2} alt="button" /></button>
            <div className="pagination"></div>
        </section>
    )
}