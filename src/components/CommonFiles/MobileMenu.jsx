import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import closeBtn from '../../assets/images/header/close.svg';

import s from '../../assets/components/CommonFiles/MobileMenu.module.scss';

export const MobileMenu = ({ onClose, favorite = 0 }) => {
    
    useEffect(() => {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "auto";
            };
        }, []);
    
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
    
    return (
        <div className={s.wrapper}>
            <div className={s['top-wrapper']}>
                <h3 className={s['title']}> Menu</h3>
                <button onClick={onClose} className={s['close-btn']} type='button'><img src={closeBtn} alt="close button" /></button>
            </div>
            <div className={s['navigation-wrapper']}>
                <nav className={s.navigation}>
                        <NavLink onClick={onClose} to='/about'>About Company</NavLink>
                        <NavLink onClick={onClose} to='/gallery'>Gallery</NavLink>
                        <NavLink onClick={onClose} to='/blog'>Blog</NavLink>
                        <NavLink onClick={onClose} to='/catalog'>Shop</NavLink>
                        <NavLink onClick={onClose} to='/contacts'>Сontacts</NavLink>
                    </nav>
            </div>
                <ul className={s['user-list']}>
                    <li className={s['user-item']}><Link onClick={onClose} className={s['user-link']}>Favorite <span>/</span>  <p>{ favorite}</p></Link> </li>
                    <li className={s['user-item']}><Link onClick={onClose} className={s['user-link']}>FAQ</Link></li>
                    <li className={s['user-item']}><Link onClick={onClose} className={s['user-link']}>order hisrory</Link></li>
                </ul>
         
            <div className={s['language-wrapper']}>
                <ul className={s['language-list']}>
                    <li><p>FR</p></li>
                    <li><p>EN</p></li>
                </ul>
            </div>
        </div>
    )
}