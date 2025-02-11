import starGray from "../../assets/images/catalog/star-gray.svg";
import starFill from "../../assets/images/catalog/star-fill.svg";
import s from '../../assets/components/CommonFiles/StarsRating.module.scss'

export const StarsRating = ({stars}) => {

    const maxStars = 5; 

    return (
                <div className={s.rating}>
                    {[...Array(maxStars)].map((_, index) => (
                            <img src={index < stars ? `${starFill}` : `${starGray}`} key={index} className={s.star} alt='rating'/>
                    ))}
                </div>
        
    )
}