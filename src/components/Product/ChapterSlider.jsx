import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import s from "../../assets/components/Product/ChapterSlider.module.scss";
import { useState } from 'react';
import { Characteristic } from './Characteristic';
import { Description } from './Description';
import { ReviewChapter } from './ReviewChapter';
import { Delivery } from './Delivery';
import { Payment } from './Payment';



export const ChapterSlider = () => {
    const [isCharacteristicVisible, setIsCharacteristicVisible] = useState(false);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
    const [isReviewVisible, setIsReviewVisible] = useState(false);
    const [isDeliveryVisible, setIsDeliveryVisible] = useState(false);
    const [isPaymentVisible, setIsPaymentVisible] = useState(false);

    const handleOpenChapter = (e) => {
        const name = e.currentTarget.className;
        if (name === 'characteristic') {
            setIsCharacteristicVisible(true);
            setIsDeliveryVisible(false);
            setIsDescriptionVisible(false);
            setIsPaymentVisible(false);
            setIsReviewVisible(false);
        }
        if (name === 'description') {
            setIsCharacteristicVisible(false);
            setIsDeliveryVisible(false);
            setIsDescriptionVisible(true);
            setIsPaymentVisible(false);
            setIsReviewVisible(false);
        }
        if (name === 'review') {
            setIsCharacteristicVisible(false);
            setIsDeliveryVisible(false);
            setIsDescriptionVisible(false);
            setIsPaymentVisible(false);
            setIsReviewVisible(true);
        }
        if (name === 'delivery') {
            setIsCharacteristicVisible(false);
            setIsDeliveryVisible(true);
            setIsDescriptionVisible(false);
            setIsPaymentVisible(false);
            setIsReviewVisible(false);
        }
        if (name === 'payment') {
            setIsCharacteristicVisible(false);
            setIsDeliveryVisible(false);
            setIsDescriptionVisible(false);
            setIsPaymentVisible(true);
            setIsReviewVisible(false);
        }
    }

    return (
        <div className={s['wrapper']}>
            <div className={s['swiper-wrapper']}>
                <Swiper
                    className={s.list}
                    modules={[Navigation]}
                    direction="horizontal"
                    loop={true}
                    speed={800}
                    spaceBetween={10}
                    slidesPerView="auto"
                    >
                        <SwiperSlide className={`${s.item} ${isCharacteristicVisible? s.visible: ''} `}>
                            <button onClick={handleOpenChapter} className='characteristic'><p >Сharacteristic</p></button>
                            </SwiperSlide>
                        <SwiperSlide className={`${s.item} ${isDescriptionVisible? s.visible: ''} `}>
                            <button onClick={handleOpenChapter} className='description'>Description</button>
                            </SwiperSlide>
                        <SwiperSlide className={`${s.item} ${isReviewVisible? s.visible: ''} `}>
                            <button onClick={handleOpenChapter} className='review'>Review(34)</button>
                            </SwiperSlide>
                        <SwiperSlide className={`${s.item} ${isDeliveryVisible? s.visible: ''} `}>
                            <button onClick={handleOpenChapter} className='delivery'>Delivery</button>
                        </SwiperSlide>
                        <SwiperSlide className={`${s.item} ${isPaymentVisible? s.visible: ''} `}>
                            <button onClick={handleOpenChapter} className='payment'>Payment</button>
                            </SwiperSlide>
                </Swiper>
            </div>
            <div className={s['characteristic-wrapper']}>
                {isCharacteristicVisible ? <Characteristic /> : ""}
            </div>
            <div className={s['description-wrapper']}>
                {isDescriptionVisible ? <Description /> : ""}
            </div>
            
            {isReviewVisible ? <ReviewChapter /> : ""}
            {isDeliveryVisible ? <Delivery /> : ""}
            {isPaymentVisible? <Payment/>:""}
        </div>
    )
}