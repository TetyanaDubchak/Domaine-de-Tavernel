import React from "react";
import s from "../../assets/components/CommonFiles/CookieConsent.module.scss";
import close from "../../assets/images/header/close.svg";

export const CookieConsent = ({ onAccept,onReject,onClose }) => {

    return (
            <div className={s.modal}> 
                <button className={s['close-btn']} onClick={onClose} type="button"><img src={close} alt="close button" /></button>
                <h3 className={s['title']}>We use cookies!</h3>
                <p className={s['text']}>We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit "Cookie Settings" to provide a controlled consent.</p>
                <div className={s['btn-wrapper']}>
                    <button className={s['reject-btn']} onClick={onReject}>Reject all</button>
                    <button className={s['accept-btn']} onClick={onAccept}>Accept all</button>
                </div>
            </div>
    )
}