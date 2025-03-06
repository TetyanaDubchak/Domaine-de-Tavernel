import s from '../../assets/styles/components/Header/PaymentLayout.module.scss';
import React from "react";
import { Link } from "react-router-dom";
import { usePaymentStore,usePayLinkStore } from '../../store/paymentStore';

import arrowLeft from "../../assets/images/payment/arrow-left.svg";
import logo from '../../assets/images/header/logo.svg';
import { ContactDetail } from 'components/Payment/ContactDetail';
import { DeliveryDetail } from 'components/Payment/DeliveryDetail';
import { PaymentDetail } from 'components/Payment/PaymentDetail';


export const PaymentLayout = () => {
    const { closePaymentPage } = usePaymentStore();
    const {isContactActive,isDeliveryActive,isPaymentActive,wasContactSent,wasDeliverySent, wasPaymentSent} = usePayLinkStore();

    return (
        <div>
            <header className={s.wrapper}>
                <Link onClick={closePaymentPage} className={s['exit-btn']} to='/catalog'><img src={arrowLeft} alt="exit button" /> <p className={s['exit-text']}>continue Shopping</p></Link>
                <Link onClick={closePaymentPage} to='/'><img className={s['logo']} src={logo} alt="logotype" /></Link>
            </header>
            <main className={s['main-section']}>
                <div className={s['chapter-wrapper']}>
                    <ul className={s['chapter-list']}>
                        <li className={s['chapter-item']}><button className={`${s["button-link"]} ${wasContactSent ? s["is-active"] : ""}`} disabled={!wasContactSent} type='button'>Contact details</button> </li>
                        <li className={s['chapter-item']}><button className={`${s["button-link"]} ${isDeliveryActive ? s["is-active"] : ""}`} disabled={!isDeliveryActive} type='button'>Delivery</button> </li>
                        <li className={s['chapter-item']}><button className={`${s["button-link"]} ${isPaymentActive ? s["is-active"] : ""}`} disabled={!isPaymentActive} type='button'>Payment</button></li>
                    </ul>
                </div>
                {isContactActive && <ContactDetail />}
                {isDeliveryActive && <DeliveryDetail />}
                {isPaymentActive && <PaymentDetail/>}
            </main>
        </div>
    )
}