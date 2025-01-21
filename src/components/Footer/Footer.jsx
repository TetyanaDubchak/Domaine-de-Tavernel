import { NavLink, Link } from "react-router-dom";

import s from "./Footer.module.scss";

import sprite from '../../assets/images/sprite.svg';
import tree from '../../assets/images/main/tree-all.svg';

export const Footer = () => {
    return (
        <footer>
            <div className={s['first-wrapper']}>
                <div className={s['extra-wrapper']}>
                    <div className={s['address-wrapper']}>
                        <p>Route de Fourques - 1479, Chemin de Tavernel - 30300 Beaucaire</p>
                    </div>
                    
                    <ul className={s['nav-list']}>
                        <li><NavLink to='/about'>About Company</NavLink></li>
                        <li><NavLink to='/catalog'>Shop</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        
                    </ul>
                    <ul className={s['conditions-list']}>
                        <li><Link>Privacy policy</Link></li>
                        <li><Link>Term and condition</Link></li>
                        <li className={s['mobile-blog']}><Link to='/blog'>FAQ</Link></li>
                        <li><Link to='/contacts'>Сontacts</Link></li>
                    </ul>
                    <div>
                        <ul className={s['contact-list']}>
                            <li><a href="mailto:domaine@tavernel.fr">
                                <svg width='20' height='20'>
                                    <use href={ sprite + '#icon-mail'}></use>
                                </svg>
                                <p>domaine@tavernel.fr</p>
                                </a></li>
                            <li><a href="tel:+04 66 58 57 01">
                                <svg width='20' height='20'>
                                    <use href={ sprite + '#icon-call'}></use>
                                </svg>
                                <p>+04 66 58 57 01</p>
                                </a></li>
                            <li><Link to='/blog'><p>FAQ</p></Link></li>
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
                    <svg width='14' height='14'>
                        <use href={ sprite + '#icon-arrow-top'}></use>
                    </svg></button>
                <div className={s.tree}><img src={tree} alt="tree and house" /></div>
            </div>
            <div className={s['second-wrapper']}>
                <p>© 2024 Lift Media. All rights reserved.</p>
            </div>
        </footer>
        
    )
}