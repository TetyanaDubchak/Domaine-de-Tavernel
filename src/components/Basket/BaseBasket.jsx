
import s from '../../assets/styles/components/Basket/BaseBasket.module.scss';
import { BasketElement } from './BasketElement';


export const BaseBasket = ({totalPrice,minAmount}) => {
    
    return (
            <div className={s['info-wrapper']}>
                <div className={s.wrapper}>
                    <button className={s.delete} type='button'>Delete All</button>
                </div>
                <BasketElement />
                {totalPrice < minAmount ? <p className={s['min-value']}>Minimum order amount is {minAmount} EUR.</p> : ''}            
            </div>
    )
}