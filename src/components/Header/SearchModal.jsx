import { Transition } from 'react-transition-group';
import { useRef } from 'react';

import s from '../../assets/styles/components/Header/SearchModal.module.scss'

import searchIcon from '../../assets/images/header/search.svg';
import closeIcon from '../../assets/images/header/close.svg';

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

export const SearchModal = ({ in: inProp, onClose }) => {
    const nodeRef = useRef(null);

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
            {state => (
                <div className={s.wrapper} ref={nodeRef} style={{
                ...defaultStyle,
                ...transitionStyles[state]
                }}>
                <div className={s['search-wrapper']}>
                    <button className={s['search-btn']} type='button'><img src={searchIcon} alt="search button"/></button>
                    <input className={s['search-text']} type="text" placeholder='Search...'/>
                    <button onClick={onClose} className={s['close-btn']} type='button'><img src={closeIcon} alt="close button"/></button>
                </div>
                <div className={s['result-wrapper']}></div>
                </div>
      )}
        </Transition>   
    )
}