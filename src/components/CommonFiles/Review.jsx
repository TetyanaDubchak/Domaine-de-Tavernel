import { Transition } from 'react-transition-group';
import { useEffect,useRef } from "react";
import close from '../../assets/images/contacts/close.svg';
import sign from "../../assets/images/contacts/check_form.svg";
import s from '../../assets/styles/components/CommonFiles/Review.module.scss';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0},
};

export const Review = ({in: inProp, onClose, name='form' }) => {
    const nodeRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
            {state => (
                <div className={s.backdrop} onClick={handleBackdropClick} ref={nodeRef} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <div className={s.modal}>
                        <button className={s['close-btn']} onClick={onClose}>
                            <img src={close} alt="close-button" />
                        </button>
                        <div className={s.sign}><img src={sign} alt="checked-sign" /></div>
                        <p className={s.text}>{ name}</p>
                    </div>
                </div>)}
        </Transition>
    )
}