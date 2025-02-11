import { useEffect } from "react";
import close from '../../assets/images/contacts/close.svg';
import sign from "../../assets/images/contacts/check_form.svg";
import s from '../../assets/components/CommonFiles/Review.module.scss';

export const Review = ({ onClose, name='form' }) => {

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

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <div className={s.backdrop} onClick={handleBackdropClick}>
            <div className={s.modal}>
                <button className={s['close-btn']} onClick={onClose}>
                    <img src={close} alt="close-button" />
                </button>
                <div className={s.sign}><img src={sign} alt="checked-sign" /></div>
                <p className={s.text}>your {name} was sent successfully!</p>
           </div>
        </div>
    )
}