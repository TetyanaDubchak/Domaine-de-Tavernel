import { useEffect } from 'react';
import s from '../../assets/styles/components/Catalog/SortModal.module.scss';
import close from '../../assets/images//catalog/close.svg'

export const SortModal = ({ onClose }) => {
    
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
        <div className={s.wrapper} onClick={handleBackdropClick}>
            <div className={s.modal}>
                <div className={s['top-wrapper']}>
                    <h4>Sort by</h4>
                    <button onClick={onClose}><img src={close} alt="close button" /></button>
                </div>
                <ul className={s['button-list']}>
                    <li className={s['button-item']}><button type='button'>New</button></li>
                    <li className={s['button-item']}><button type='button'>Rating</button></li>
                    <li className={s['button-item']}><button type='button'>Price: Higt-Low</button></li>
                    <li className={s['button-item']}><button type='button'>Price: Low-Higt</button></li>
                    <li className={s['button-item']}><button type='button'>Availability</button></li>
                </ul>
            </div>
        </div>
    )
}