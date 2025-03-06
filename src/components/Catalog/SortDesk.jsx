
import s from '../../assets/styles/components/Catalog/SortDesk.module.scss';
import  arrowBtn  from "../../assets/images/catalog/arrow-bot.svg";
import { useState } from 'react';

export const SortDesk = () => {
    const [isSortCklicked, setIsSortCklicked] = useState(false);

    const handleOpenSort = () => {
        setIsSortCklicked((prev) => !prev); 
    }
    
    return (
        <div className={s.wrapper}>
            <div onClick={handleOpenSort} className={s['select-main-wrapper']}>
                <div className={s['title-wrapper']}>
                    <p className={s['select-title']}>Sort by</p>
                </div>
                <div className={s['visible-item']}>Popular</div>
                <img className={`${s.arrow} ${isSortCklicked ? s.rotate : ''}`} src={arrowBtn} alt="arrow" />
                <div className={s['select-list-wrapper']} style={{
                        height: isSortCklicked ? "100px" : "0px",
                        overflow: isSortCklicked ? "auto" : "hidden",
                    }}>
                    <div>
                        <ul className={s['select-list']}>
                            <li><button type='button' className={s['select-btn']}>New</button></li>
                            <li><button type='button' className={s['select-btn']}>Rating</button></li>
                            <li><button type='button' className={s['select-btn']}>Price: Higt-Low</button></li>
                            <li><button type='button' className={s['select-btn']}>Price: Low-Higt</button></li>
                            <li><button type='button' className={s['select-btn']}>Availability</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}