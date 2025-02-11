
import s from "../../assets/components/Product/PriceContainer.module.scss";

export const PriceContainer = () => {

    return (
        <div className={s.wrapper}>
            <div className={`${s.availibility} ${true ? s['is-available'] : s['is-not-available']}`}><p>{true ? 'Available' : 'Unailable'}</p></div>
            <div className={s['price-wrapper']}>
                <p>Price: 75 EUR</p>
                <button type='button'>to checkout</button>
            </div>
        </div>
        
    )
}