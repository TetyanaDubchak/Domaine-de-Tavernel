
import { Icon } from "components/Icon/Icon";
import s from "./Title.module.scss";
import { StarsRating } from "components/StarsRating/StarsRating";

export const Title = ({isLike,setLike}) => {


    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>The French Touch</h2>
            <div className={s['reviews-wrapper']}>
                <StarsRating stars='4'/>
                <p>(34 review)</p>
            </div>
            <button onClick={setLike} className={s['like-btn']} type='button'>
                 <Icon type={isLike? 'heart-dark-fill':'heart'}/>
            </button>
        </div>
        
    )
}