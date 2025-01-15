import { NavLink } from "react-router-dom";

import sprite from '../../assets/images/sprite.svg';

export const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <p>Route de Fourques - 1479, Chemin de Tavernel - 30300 Beaucaire</p>
                    <ul>
                        <li><NavLink to='/about'>About Company</NavLink></li>
                        <li><NavLink>Privacy policy</NavLink></li>
                        <li><NavLink to='/catalog'>Shop</NavLink></li>
                        <li><NavLink>Term and condition</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/contacts'>Сontacts</NavLink></li>
                    </ul>
                    <div>
                        <ul>
                            <li><a href="mailto:domaine@tavernel.fr">domaine@tavernel.fr</a></li>
                            <li><a href="tel:+04 66 58 57 01">+04 66 58 57 01</a></li> 
                        </ul>
                        <p>FAQ</p>
                    </div>
                    <ul>
                        <li><a href="#">
                            <svg width='12' height='12'>
                                <use href={ sprite + '#icon-facebook'}></use>
                            </svg></a></li>
                        <li><a href="#">
                            <svg width='12' height='12'>
                                <use href={ sprite + '#icon-viber'}></use>
                            </svg></a></li>
                        <li><a href="#">
                            <svg width='12' height='12'>
                                <use href={ sprite + '#icon-instagram'}></use>
                            </svg>
                        </a></li>
                    </ul>
                </div>
                <p>Developed by <span>GETWOW</span></p>
                <button type="button">
                    <svg width='12' height='12'>
                        <use href={ sprite + '#icon-arrow-top'}></use>
                    </svg></button>
            </div>
            <div>
                <p>© 2024 Lift Media. All rights reserved.</p>
            </div>
        </footer>
        
    )
}