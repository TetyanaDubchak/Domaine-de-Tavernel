import { Transition } from 'react-transition-group';
import React,{ useRef } from "react";
import s from "../../assets/styles/components/CommonFiles/CookieConsent.module.scss";
import close from "../../assets/images/header/close.svg";

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

export const CookieConsent = ({in: inProp, onAccept,onReject,onClose }) => {
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
            {state => (
                <div className={s.modal} ref={nodeRef} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <button className={s['close-btn']} onClick={onClose} type="button"><img src={close} alt="close button" /></button>
                    <h3 className={s['title']}>We use cookies!</h3>
                    <p className={s['text']}>We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit "Cookie Settings" to provide a controlled consent.</p>
                    <div className={s['btn-wrapper']}>
                        <button className={s['reject-btn']} onClick={onReject}>Reject all</button>
                        <button className={s['accept-btn']} onClick={onAccept}>Accept all</button>
                    </div>
                </div>
            )}
        </Transition>
    )
}