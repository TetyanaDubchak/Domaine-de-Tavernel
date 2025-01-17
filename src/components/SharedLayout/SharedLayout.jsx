import { Suspense } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

import s from "./SharedLayout.module.scss";

import image from '../../assets/images/header/logo.svg';
import burger from '../../assets/images/header/menu-burger.svg';
import sprite from '../../assets/images/sprite.svg';

import { Footer } from "components/Footer/Footer";



export const SharedLayout = () => {
    return (
        <div>
            <header className={s.wrapper}>
                <div className={s['burger-wrapper']}>
                    <button className={s['burger-btn']}>
                        <img src={burger} alt="mobile menu" width='24' height='24' />
                    </button>
                    <nav className={s.navigation}>
                        <NavLink to='/about'>About Company</NavLink>
                        <NavLink to='/gallery'>Gallery</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/catalog'>Shop</NavLink>
                        <NavLink to='/contacts'>Сontacts</NavLink>
                    </nav>
                    <button className={s['search-btn']}>
                        <svg width='24' height='24'>
                            <use href={ sprite + '#icon-search'}></use>
                        </svg>
                    </button>
                </div>
                
                <Link className={s['logo']} to='/'><img width='80' height="58" src={image} alt="logotype" /></Link>

                <button className={s['search-btn-desc']}>
                    <svg width='24' height='24'>
                        <use href={ sprite + '#icon-search'}></use>
                    </svg>
                </button>
                <ul className={s['language-list']}>
                    <li><p>FR</p></li>
                    <li><p>EN</p></li>
                </ul>
                <div className={s['buy-wrapper']}>
                    <button className={s['account-btn']}>
                        <svg width='24' height='24'>
                            <use href={ sprite + '#icon-account'}></use>
                        </svg>
                    </button>
                    <div className={s['buy-wrapper-liked']}>
                        <button className={s['liked-btn']}>
                            <svg width='24' height='24'>
                                <use href={ sprite + '#icon-heart'}></use>
                            </svg>
                        </button>
                       <span>0</span>
                    </div>
                    
                    <div className={s['buy-wrapper-shoper']}>
                        <button className={s['shoper-btn']}>
                        <svg width='24' height='20'>
                            <use href={ sprite + '#icon-shoper'}></use>
                        </svg>
                        </button>
                        <span>0</span>
                    </div>
                    
                </div>

            </header>
            <Suspense>
                <Outlet/>
            </Suspense>
            <Footer/>
        </div>
    )
}