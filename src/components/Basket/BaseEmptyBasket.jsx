import s from '../../assets/styles/components/Basket/BaseEmptyBasket.module.scss';
import { BasketTitle } from './BasketTitle';
import bocal from '../../assets/images/basket/bocal.svg';
import { Link } from 'react-router-dom';

export const BaseEmptyBasket = () => {
    
    return (
        <div className={s.wrapper}>
            <BasketTitle/>
            <div className={s['middle-wrapper']}>
                <div className={s['bocal-wrapper']}><img src={bocal} alt="bocal" />
                </div>
                <h3 className={s['bocal-title']}>Your Basket empty!</h3>
            </div>
            <div className={s['button-wrapper']}>
                <button><Link to='/catalog'>continue shopping</Link></button>
            </div>
        </div>
    )
}