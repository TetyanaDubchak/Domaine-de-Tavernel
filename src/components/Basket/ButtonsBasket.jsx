
import { Link } from 'react-router-dom';
import s from '../../assets/styles/components/Basket/ButtonsBasket.module.scss';
import { useBasketStore } from '../../store/basketStore';
import { usePaymentStore } from '../../store/paymentStore';

export const ButtonsBasket = ({isActive}) => {
    const { closeBasket } = useBasketStore();
    const { openPaymentPage } = usePaymentStore();
    const handleOnCheckout = () => {
        closeBasket();
        openPaymentPage();
    }
    
    return (
        <div className={s.wrapper}>
            <button onClick={closeBasket} className={s['continue-btn']}><Link to='/catalog'>continue shoping</Link></button>
            <button onClick={handleOnCheckout}  className={`${s["checkout-btn"]} ${isActive ? s["is-checked"] : ""}`} disabled={!isActive}><Link to='/payment'>To checkout</Link> </button>
        </div>
        
    )
}