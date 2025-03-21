import React, { Suspense, useState,useEffect } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { CookieConsent } from "../CommonFiles/CookieConsent";
import s from "../../assets/styles/components/Header/SharedLayout.module.scss";

import image from '../../assets/images/header/logo.svg';
import burger from '../../assets/images/header/menu-burger.svg';
import search from '../../assets/images/header/search.svg'

import { Footer } from "components/CommonFiles/Footer";
import { MobileMenu } from "components/CommonFiles/MobileMenu";
import { Icon } from "components/CommonFiles/Icon";
import { SearchModal } from "./SearchModal";
import { FormBlock } from "components/Auth/FormBlock";
import { BasketModal } from "components/Basket/BasketModal";
import { useModalStore } from '../../store/authStore';
import { useBasketStore } from '../../store/basketStore';


export const SharedLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showCookieConsent, setShowCookieConsent] = useState(false);
    const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
    const { openRegistration, isRegistrationFormOpen, isLoginFormOpen, isForgetPasswordOpen } = useModalStore();

    const { isBasketOpen, openBasket } = useBasketStore();

    useEffect(() => {
        if (!Cookies.get('cookieConsent')) {
            setShowCookieConsent(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookieConsent', 'true', { expires: 30, path: '/' });
        setShowCookieConsent(false);
    };

    const handleReject = () => {
        Cookies.set('cookieConsent', 'false', { expires: 30, path: '/' });
        setShowCookieConsent(false);
    };

    const handleClose = () => {
        setShowCookieConsent(false);
    };

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    }

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    }

    const handleSearchbarClose = () => {
        setIsSearchbarOpen(false);
    };

    const handleSearchbarOpen = () => {
        setIsSearchbarOpen(true);
    }
    
    return (
        
    (<div>
        <header className={s.wrapper}>
            <div className={s['burger-wrapper']}>
                <button className={s['burger-btn']} onClick={handleMenuOpen}>
                    <img src={burger} alt="mobile menu" width='24' height='24' />
                </button>
                <nav className={s.navigation}>
                    <NavLink className={({ isActive }) => isActive ? `${s.active} ${s['navigate-link']}` : s['navigate-link']} to='/about'>About Company</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${s.active} ${s['navigate-link']}` : s['navigate-link']} to='/gallery'>Gallery</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${s.active} ${s['navigate-link']}` : s['navigate-link']} to='/blog'>Blog</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${s.active} ${s['navigate-link']}` : s['navigate-link']} to='/catalog'>Shop</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${s.active} ${s['navigate-link']}` : s['navigate-link']} to='/contacts'>Сontacts</NavLink>
                </nav>
                <button onClick={handleSearchbarOpen} className={s['search-btn']}>
                    <img src={search} alt="search button" />
                </button>
            </div>
                
            <Link className={s['logo']} to='/'><img src={image} alt="logotype" /></Link>

            <button onClick={handleSearchbarOpen} className={s['search-btn-desc']}>
                <img src={search} alt="search button" />
            </button>
            <ul className={s['language-list']}>
                <li><p>FR</p></li>
                <li><p>EN</p></li>
            </ul>
            <div className={s['buy-wrapper']}>
                <button onClick={openRegistration} className={s['account-btn']}>
                    <Icon type='account' />
                </button>
                <div className={s['buy-wrapper-liked']}>
                    <button className={s['liked-btn']}>
                        <Icon type='heart' />
                    </button>
                    <span>0</span>
                </div>
                    
                <div className={s['buy-wrapper-shoper']}>
                    <button onClick={openBasket} className={s['shoper-btn']}>
                        <Icon type='shoper' />
                    </button>
                    <span>0</span>
                </div>
            </div>
        </header>
        <Suspense>
            <Outlet />
        </Suspense>
        <Footer />
        <MobileMenu in={isMenuOpen} onClose={handleMenuClose} />
        <CookieConsent
            in={showCookieConsent}
            onAccept={handleAccept}
            onReject={handleReject}
            onClose={handleClose}
        />
        <SearchModal in={isSearchbarOpen} onClose={handleSearchbarClose} />
        <FormBlock in={isRegistrationFormOpen || isLoginFormOpen || isForgetPasswordOpen} />
        <BasketModal in={isBasketOpen} />
    </div>)
    )
}