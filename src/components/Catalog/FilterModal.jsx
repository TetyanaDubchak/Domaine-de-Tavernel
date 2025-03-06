import { useEffect } from 'react';
import s from '../../assets/styles/components/Catalog/FilterModal.module.scss';
import close from '../../assets/images/catalog/close.svg';
import { FilterList } from './FilterList';


export const FilterModal = ({ onClose }) => {

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
                    <h4>Filter by</h4>
                    <button onClick={onClose}><img src={close} alt="close button" /></button>
                </div>
                <FilterList/>
            </div>
        </div>
    )
}