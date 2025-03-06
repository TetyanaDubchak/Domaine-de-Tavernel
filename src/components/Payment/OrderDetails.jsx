import s from '../../assets/styles/components/Payment/OrderDetails.module.scss';
import arrowTop from '../../assets/images/payment/arrow-top.svg';
import arrowBot from '../../assets/images/payment/arrow-bottom.svg';
import { InfoProduct } from './InfoProduct';
import { useState } from 'react';

export const OrderDetails = () => {
    const [isInfoOpen, setIsInfoOpen] = useState(true);
    return (
        <div className={s.wrapper}> 
            <div className={s['visible-wrapper']}>
                <h4 className={s['visible-title']}>Your order</h4>
                <button onClick={()=>setIsInfoOpen((prev)=>!prev)} className={s['arrow-button']}><img src={isInfoOpen?arrowTop: arrowBot} alt='arrow' /></button>
            </div>
           {isInfoOpen && <InfoProduct/>} 
       </div>
    )
}