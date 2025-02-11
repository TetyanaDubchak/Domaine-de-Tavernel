import { StarsRating } from "components/CommonFiles/StarsRating";
import s from "../../assets/components/Product/ReviewChapter.module.scss";

import arrowBot from '../../assets/images/catalog/arrow-bot.svg';
import { useState } from "react";
import { ReviewForm } from "./ReviewForm";
import { Review } from '../CommonFiles/Review';

const reviewsList = [
    {
        name: 'Mark Bandy',
        date: '29.04.2024',
        stars: 4,
        id:1,
        status: 'Site user',
        comment: 'Smooth and rich, this wine boasts a delightful blend of fruity flavors with a subtle hint of oak. Its velvety texture and well-balanced acidity make it a pleasure to savor with every sip. Highly recommended for those seeking a refined and elegant wine experience.',
        advantages: 'Rich flavor profile, velvety texture, well-balanced acidity',
        disadvantages: 'Limited availability, higher price point.'
    },
    {
        name: 'Mark Bandy',
        date: '29.04.2024',
        stars: 4,
        id:2,
        status: 'Site user',
        comment: 'Smooth and rich, this wine boasts a delightful blend of fruity flavors with a subtle hint of oak. Its velvety texture and well-balanced acidity make it a pleasure to savor with every sip. Highly recommended for those seeking a refined and elegant wine experience.',
        advantages: 'Rich flavor profile, velvety texture, well-balanced acidity',
        disadvantages: 'Limited availability, higher price point.'
    },
    {
        name: 'Mark Bandy',
        date: '29.04.2024',
        stars: 3,
        id:3,
        status: 'Site user',
        comment: 'Smooth and rich, this wine boasts a delightful blend of fruity flavors with a subtle hint of oak. Its velvety texture and well-balanced acidity make it a pleasure to savor with every sip. Highly recommended for those seeking a refined and elegant wine experience.',
        advantages: 'Rich flavor profile, velvety texture, well-balanced acidity',
        disadvantages: 'Limited availability, higher price point.'
    },
    {
        name: 'Mark Bandy',
        date: '29.04.2024',
        stars: 4,
        id:4,
        status: 'Site user',
        comment: 'Smooth and rich, this wine boasts a delightful blend of fruity flavors with a subtle hint of oak. Its velvety texture and well-balanced acidity make it a pleasure to savor with every sip. Highly recommended for those seeking a refined and elegant wine experience.',
        advantages: 'Rich flavor profile, velvety texture, well-balanced acidity',
        disadvantages: 'Limited availability, higher price point.'
    }
]

export const ReviewChapter = () => {
    const [isModalReviewOpen, setIsModalReviewOpen] = useState(false);
    const [isSentReviewOpen, setIsSentReviewOpen] = useState(false);

    const handleOpenModalReview = () => {
            setIsModalReviewOpen(true);
        };
    
    const handleCloseModalReview = () => {
            setIsModalReviewOpen(false);
    };

    const handleOpenSentReview = () => {
            setIsSentReviewOpen(true);
        };
    
    const handleCloseSentReview = () => {
            setIsSentReviewOpen(false);
    };
    return ( 
        <div>
            <div className={s['write-review-wrapper']}>
                <p className={s['write-review-title']}>Write a review</p>
                <button onClick={handleOpenModalReview} className={s['write-review-button']}>
                    write
                </button>
            </div>
            <ul className={s['review-list']}>
                {reviewsList.map(item => {
                    return (
                        <li className={s['review-item']} key={item.id}>
                            <div className={s['top-wrapper']}>
                                <p className={s['name']}>{item.name}</p>
                                <p className={s['date']}>{item.date}</p>
                            </div>
                            <p className={s['status']}>{item.status}</p>
                            <StarsRating stars={item.stars} />
                            <p className={s['comment']}>{item.comment}</p>
                            <p className={s['advantages']}>Advantages: <span>{item.advantages}</span></p>
                            <p className={s['disadvantages']}>Disadvantages: <span>{ item.disadvantages}</span></p>
                        </li>
                    )
                })}
            </ul>
            <button className={s['more-button']}>See more <img src={arrowBot} alt="arrow-button" /></button>
            {isModalReviewOpen ? <ReviewForm openSentModal={handleOpenSentReview} onClose={handleCloseModalReview} /> : ''}
            {isSentReviewOpen ? <Review name='review'  onClose={ handleCloseSentReview} />:''}
        </div>
    )
}