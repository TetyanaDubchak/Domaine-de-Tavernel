import s from '../../assets/styles/components/Payment/PriceContainer.module.scss';


export const PricePayContainer = () => {
    
    return (<>
            <ul className={s['list']}>
                <li className={s['item']}>
                    <p className={s['extra-info']}>Delivery</p>
                    <span className={s['extra-info']}>0 EUR</span>
                </li>
                <li className={s['item']}>
                    <p className={s['extra-info']}>Taxes</p>
                    <span className={s['extra-info']}>2 EUR</span>
            </li>
             </ul>
                <div className={s['item-total']}>
                    <p className={s['main-title']}>Total price</p>
                    <span className={s['main-info']}>152 EUR</span>
                </div>
           </>
    )
}