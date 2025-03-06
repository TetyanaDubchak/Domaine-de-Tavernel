import closeBtn from '../../assets/images/basket/close.svg';
import s from '../../assets/styles/components/Basket/BasketTitle.module.scss';
import { useBasketStore } from '../../store/basketStore';

export const BasketTitle = () => {
    const {closeBasket } = useBasketStore();

    return (
        <div className={s['top-wrapper']}>
            <h3 className={s.title}>Your basket</h3>
            <button onClick={closeBasket} className={s['close-button']} type='button'><img src={closeBtn} alt="exit button" /></button>
        </div>
    )
}