import { NavLink } from "react-router-dom";

import s from "./Footer.module.scss";

import sprite from '../../assets/images/sprite.svg';

export const Footer = () => {
    return (
        <footer>
            <div className={s['first-wrapper']}>
                <div>
                    <div className={s['address-wrapper']}>
                        <p>Route de Fourques - 1479, Chemin de Tavernel - 30300 Beaucaire</p>
                    </div>
                    
                    <ul className={s['nav-list']}>
                        <li><NavLink to='/about'>About Company</NavLink></li>
                        <li><NavLink to='/catalog'>Shop</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink>Privacy policy</NavLink></li>
                        <li><NavLink>Term and condition</NavLink></li>
                        <li><NavLink to='/blog'>FAQ</NavLink></li>
                        <li><NavLink to='/contacts'>Сontacts</NavLink></li>
                    </ul>
                    <div>
                        <ul className={s['contact-list']}>
                            <li><a href="mailto:domaine@tavernel.fr">domaine@tavernel.fr</a></li>
                            <li><a href="tel:+04 66 58 57 01">+04 66 58 57 01</a></li> 
                        </ul>
                    </div>
                    <ul className={s['social-list']}>
                        <li><a href="#link">
                            <svg width='12' height='12'>
                                <use href={ sprite + '#icon-facebook'}></use>
                            </svg></a></li>
                        <li><a href="#link">
                            <svg width='17' height='17'>
                                <use href={ sprite + '#icon-viber'}></use>
                            </svg></a></li>
                        <li><a href="#link">
                            <svg width='12' height='12'>
                                <use href={ sprite + '#icon-instagram'}></use>
                            </svg>
                        </a></li>
                    </ul>
                </div>
                <p className={s.developed}>Developed by <span>GETWOW</span></p>
                <button className={s['top-button']} type="button">
                    <svg width='12' height='12'>
                        <use href={ sprite + '#icon-arrow-top'}></use>
                    </svg></button>
            </div>
            <div className={s['second-wrapper']}>
                <p>© 2024 Lift Media. All rights reserved.</p>
            </div>
        </footer>
        
    )
}