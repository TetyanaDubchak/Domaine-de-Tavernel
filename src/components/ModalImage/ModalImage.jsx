import { useEffect,useState } from "react";

import close from '../../assets/images/gallery/close-thin.svg';
import btn1 from '../../assets/images/gallery/img-left.svg';
import btn2 from '../../assets/images/gallery/img-right.svg';
import plus from '../../assets/images/gallery/ic-plus.svg';
import minus from '../../assets/images/gallery/ic-minus.svg';
import s from './ModalImage.module.scss';

export const ModalImage = ({image, onClose,onPrev, onNext }) => {
    const [scale, setScale] = useState(1);
    
        useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowLeft") {
                onPrev();
            } else if (e.key === "ArrowRight") {
                onNext();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
        }, [onClose, onPrev, onNext]);
    
    const handleZoomChange = (e) => {
        setScale(e.target.value);
    };

    const handleZoomPlus = (e) => {

        setScale(prev => (prev >= 2 ? 2 : prev + 0.1));
        console.log(scale);
    };

    const handleZoomMinus = (e) => {

        setScale(prev => (prev <= 1 ? 1 : prev - 0.1));
        console.log(scale);
    };

    return (
        <div className={s.backdrop}>
            <div className={s.modal}>
                <button className={s['close-btn']} onClick={onClose}>
                    <img src={close} alt="close-button" />
                </button>
                <div className={s['img-wrapper']}>
                    <img src={image} alt="wine" style={{ transform: `scale(${scale})` }}/>
                </div>
                <button className={s['prev-btn']} onClick={onPrev}>
                    <img src={btn1} alt="prev" />
                </button>
                <button className={s['next-btn']} onClick={onNext}>
                    <img src={btn2} alt="next" />
                </button>
                <div className={s['zoomSlider-wrapper']}>
                    <button className={s['zoomSlider-minus']} onClick={handleZoomMinus}><img src={minus} alt="button" /></button>
                <input
                    className={s.zoomSlider}
                    type="range"
                    min="1"
                    max="2"
                    step="0.1"
                    value={scale}
                    onChange={handleZoomChange}
                    />
                    <button className={s['zoomSlider-plus']} onClick={handleZoomPlus}><img src={plus} alt="button" /></button>
                </div>
           </div>
        </div>
    )
}