import { useState } from 'react';
import s from '../../assets/styles/components/Payment/ShippingMethod.module.scss';
import { SelfShipping } from './SelfShipping';
import { PostShipping } from './PostShipping';
import { CourierShipping } from './CourierShipping';
import { ContinueBtn } from './ContinueBtn';
import {usePayLinkStore } from '../../store/paymentStore';

export const ShippingMethod = () => {
    const { setPaymentActive } = usePayLinkStore();

     const [isClicked, setIsClicked] = useState({
                self: false,
                post: false,
                courier: false,
     });
    
    const handleShippingChange = (e) => {
        const { value, checked } = e.target;
        setIsClicked({
            self: false,
            post: false,
            courier: false,
        })
        setIsClicked((prev) => ({ ...prev,[value]: checked }));
    };
    
    const isChooseMethod = isClicked.self || isClicked.post || isClicked.courier;

    return (<div className={s['main-wrapper']}>
        <div className={s.wrapper}>
            <h3 className={s.title}>Choose shipping method</h3>
            <form className={s.form}>
                <label className={s['value-wrapper']}>
                    <input className={s['click-sign']} onChange={handleShippingChange} type="radio" name='shipping' value='self' />
                    <span className={s['checkbox-decor']}></span>
                    <span className={s['value-name']}>Self-pickup</span> 
                </label>
                <label className={s['value-wrapper']}>
                    <input className={s['click-sign']} onChange={handleShippingChange} type="radio" name='shipping' value='post' />
                    <span className={s['checkbox-decor']}></span>
                    <span className={s['value-name']}>Post</span>
                </label>
                <label className={s['value-wrapper']}>
                    <input className={s['click-sign']} onChange={handleShippingChange} type="radio" name='shipping' value='courier' />
                    <span className={s['checkbox-decor']}></span>
                    <span className={s['value-name']}>By Courier</span>
                </label>

            </form>
        </div>
        {isClicked.self && <SelfShipping forButton={setPaymentActive} isBtnActive={ isChooseMethod} />}
        {isClicked.post && <PostShipping forButton={setPaymentActive} isBtnActive={ isChooseMethod}/>}
        {isClicked.courier && <CourierShipping forButton={setPaymentActive} isBtnActive={isChooseMethod} />}
        {!isChooseMethod && <ContinueBtn isActive={isChooseMethod}/>}
        </div>
    )
}