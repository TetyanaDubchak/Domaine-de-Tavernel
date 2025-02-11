import s from '../../assets/components/Header/SearchModal.module.scss'

import searchIcon from '../../assets/images/header/search.svg';
import closeIcon from '../../assets/images/header/close.svg';

export const SearchModal = ({onClose}) => {
    return (
        <div className={s.wrapper}>
            <div className={s['search-wrapper']}>
                <button className={s['search-btn']} type='button'><img src={searchIcon} alt="search button"/></button>
                <input className={s['search-text']} type="text" placeholder='Search...'/>
                <button onClick={onClose} className={s['close-btn']} type='button'><img src={closeIcon} alt="close button"/></button>
            </div>
            <div className={s['result-wrapper']}></div>
        </div>
    )
}