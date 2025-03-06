import { Transition } from 'react-transition-group';
import { useRef,useEffect, useState } from 'react';
import s from '../../assets/styles/components/Basket/BasketModal.module.scss';
import { BaseBasket } from './BaseBasket';
import { TotalPrice } from './TotalPrice';
import { ButtonsBasket } from './ButtonsBasket';

import productsList from '../../assets/json/basket.json';
import { BasketTitle } from './BasketTitle';
import { BaseEmptyBasket } from './BaseEmptyBasket';
import { useBasketStore } from '../../store/basketStore';
import { handleBackdropClick,handleEscapeClick,handleBlockBody,handleUnBlockBody } from "../../function";

const minAmount = 120;

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'scale(0.95)',
};

const transitionStyles = {
  entering: { opacity: 1, transform: 'scale(1)' },
  entered:  { opacity: 1, transform: 'scale(1)' },
  exiting:  { opacity: 0, transform: 'scale(0.95)' },
  exited:  { opacity: 0, transform: 'scale(0.95)' },
};

export const BasketModal = ({in: inProp,}) => {
    const nodeRef = useRef(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [basketList, setBasketList] = useState([]);
    const [isActiveCheckout, setIsActiveCheckout] = useState(false);
    const { closeBasket,isBasketOpen } = useBasketStore();
    
    useEffect(() => {
        handleEscapeClick(closeBasket);
    }, [closeBasket]);

    useEffect(() => {
        if (isBasketOpen) {
           return handleBlockBody();
        }
        handleUnBlockBody();
    }, [isBasketOpen]);

    useEffect(() => {
        setBasketList(productsList);
    }, []);

    useEffect(() => {
        setIsActiveCheckout(minAmount<totalPrice);
    }, [totalPrice]);
        
    useEffect(() => {
        const total = basketList.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    }, [basketList])
    
    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
            {state => (
                <div onClick={(e)=>handleBackdropClick(e,closeBasket)}  className={s.backdrop} ref={nodeRef} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>{
                        basketList.length !== 0?<div className={s['modal']}>
                            <BasketTitle/>
                        <BaseBasket totalPrice={totalPrice} minAmount={ minAmount} />
                        <div className={s['total-wrapper']}>
                            <TotalPrice total={totalPrice} />
                            <ButtonsBasket isActive={isActiveCheckout } />
                        </div>    
                     </div> : <BaseEmptyBasket/>
                }
            </div>)}
        </Transition>
    )
}