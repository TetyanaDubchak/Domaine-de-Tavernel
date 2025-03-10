import { useState } from 'react';
import s from '../../assets/styles/components/Payment/PaymentMethod.module.scss';
import { ContinueBtn } from './ContinueBtn';
import { PayInfo } from './PayInfo';


export const PaymentMethod = () => {

     const [isClicked, setIsClicked] = useState({
                card: false,
                post: false,
     });
    
    const handlePaymentChange = (e) => {
        const { value, checked } = e.target;
        setIsClicked({
            card: false,
            post: false,
        })
        setIsClicked((prev) => ({ ...prev,[value]: checked }));
    };
    
    const isChooseMethod = isClicked.card || isClicked.post;

    return (<div className={s['main-wrapper']}>
        <div className={s.wrapper}>
            <h3 className={s.title}>Choose Payment Method</h3>
            <form className={s.form}>
                <label className={s['value-wrapper']}>
                    <input className={s['click-sign']} onChange={handlePaymentChange} type="radio" name='shipping' value='card' />
                    <span className={s['checkbox-decor']}></span>
                    <span className={s['value-name']}>Credit Card</span> 
                </label>
                <label className={s['value-wrapper']}>
                    <input className={s['click-sign']} onChange={handlePaymentChange} type="radio" name='shipping' value='post' />
                    <span className={s['checkbox-decor']}></span>
                    <span className={s['value-name']}>Post-payment</span>
                </label>
                <ContinueBtn isActive={isChooseMethod} name='Pay'/>
            </form>
            {isChooseMethod && <PayInfo/>}
        </div>
        </div>
    )
}