import { Transition } from 'react-transition-group';
import { useEffect,useRef  } from 'react';
import { Link, NavLink } from 'react-router-dom';
import closeBtn from '../../assets/images/header/close.svg';

import s from '../../assets/styles/components/CommonFiles/MobileMenu.module.scss';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'scale(0.95)',
};

const transitionStyles = {
  entering: { opacity: 1, transform: 'scale(1)' },
  entered:  { opacity: 1, transform: 'scale(1)' },
  exiting:  { opacity: 0, transform: 'scale(0.95)' },
  exited:  { opacity: 0, transform: 'scale(0.95)' },
};

export const MobileMenu = ({in: inProp, onClose, favorite = 0 }) => {
    const nodeRef = useRef(null);
    
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
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
            {state => (
                <div className={s.wrapper} ref={nodeRef} style={{
                ...defaultStyle,
                ...transitionStyles[state]
                }}>
                 <div className={s['top-wrapper']}>
                <h3 className={s['title']}> Menu</h3>
                <button onClick={onClose} className={s['close-btn']} type='button'><img src={closeBtn} alt="close button" /></button>
            </div>
            <div className={s['navigation-wrapper']}>
                <nav className={s.navigation}>
                        <NavLink className={s['navigate-link']} onClick={onClose} to='/about'>About Company</NavLink>
                        <NavLink className={s['navigate-link']} onClick={onClose} to='/gallery'>Gallery</NavLink>
                        <NavLink className={s['navigate-link']} onClick={onClose} to='/blog'>Blog</NavLink>
                        <NavLink className={s['navigate-link']} onClick={onClose} to='/catalog'>Shop</NavLink>
                        <NavLink className={s['navigate-link']} onClick={onClose} to='/contacts'>Сontacts</NavLink>
                    </nav>
            </div>
                <ul className={s['user-list']}>
                    <li className={s['user-item']}><Link onClick={onClose} className={`${s['user-link']} ${s['navigate-link']}` }>Favorite <span>/</span>  <p>{ favorite}</p></Link> </li>
                    <li className={s['user-item']}><Link onClick={onClose} className={`${s['user-link']} ${s['navigate-link']}`}>FAQ</Link></li>
                    <li className={s['user-item']}><Link onClick={onClose} className={`${s['user-link']} ${s['navigate-link']}`}>order hisrory</Link></li>
                </ul>
         
            <div className={s['language-wrapper']}>
                <ul className={s['language-list']}>
                    <li><p>FR</p></li>
                    <li><p>EN</p></li>
                </ul>
            </div>
        </div>
      )}
        </Transition>
    )
}