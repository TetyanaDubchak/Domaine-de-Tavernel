
import s from '../../assets/styles/components/Basket/TotalPrice.module.scss';


export const TotalPrice = ({total}) => {

    return (
        <div className={s.wrapper}>
            <div className={s['extra-wrapper']}>
                <p className={s['title-taxes']}>Taxes</p>
                <span className={s['price-taxes']}>2 EUR</span>
            </div>
            <div className={s['extra-wrapper']}>
                <p className={s['title-total']}>Total price</p>
                <span className={s['price-total']}>{total } EUR</span>
            </div>
        </div>
        
    )
}