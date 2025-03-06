import { Transition } from 'react-transition-group';
import { useEffect, useRef } from 'react';
import s from '../../assets/styles/components/Auth/FormBlock.module.scss';

import closeBtn from '../../assets/images/auth/close.svg';
import { RegistrationForm } from './RegistrationForm';
import { ChangeFormType } from './ChangeFormType';
import {useModalStore} from '../../store/authStore';
import { LoginForm } from './LoginForm';
import { ForgetPassword } from './ForgetPassword';
import { ExtraSocials } from './ExtraSocials';
import { handleBackdropClick, handleEscapeClick} from '../../function';
import {handleBlockBody,handleUnBlockBody } from "../../function";

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

export const FormBlock = ({ in: inProp, }) => {
    const { isRegistrationFormOpen, isLoginFormOpen, isForgetPasswordOpen, openRegistration, closeRegistration, openLogin, closeLogin, openForgetPassword, closeForgetPassword } = useModalStore();
    const nodeRef = useRef(null);

    useEffect(() => {
        if (isRegistrationFormOpen || isLoginFormOpen || isForgetPasswordOpen) {
               return handleBlockBody();
            }
            handleUnBlockBody();
        }, [isForgetPasswordOpen, isLoginFormOpen,isRegistrationFormOpen]);

    useEffect(() => {
        if (isRegistrationFormOpen) {
            handleEscapeClick(closeRegistration);
        }
        if (isLoginFormOpen) {
            handleEscapeClick(closeLogin);
        }
        if (isForgetPasswordOpen) {
            handleEscapeClick(closeForgetPassword);
        }
        }, [isRegistrationFormOpen,isLoginFormOpen,isForgetPasswordOpen,closeRegistration,closeLogin,closeForgetPassword]);
    
    const onBackdropClick = (e) => {
        if (isRegistrationFormOpen) {
            handleBackdropClick(e,closeRegistration);
        }
        if (isLoginFormOpen) {
            handleBackdropClick(e,closeLogin);
        }
        if (isForgetPasswordOpen) {
            handleBackdropClick(e,closeForgetPassword);
        }
    }
    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
            {state => (
                <div onClick={onBackdropClick} className={s.backdrop} ref={nodeRef} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <div className={s.modal}>
                        {isRegistrationFormOpen && <h2 className={s.title}>Registration</h2>}
                        {isLoginFormOpen && <h2 className={s.title}>Authorization</h2>}
                        {isForgetPasswordOpen && <h2 className={s.title}>password recovery</h2>}
                        {isRegistrationFormOpen && <button onClick={closeRegistration} className={s['close-btn']}> <img src={closeBtn} alt="close button" /> </button>}
                        {isLoginFormOpen && <button onClick={closeLogin} className={s['close-btn']}> <img src={closeBtn} alt="close button" /> </button>}
                        {isForgetPasswordOpen && <button onClick={closeForgetPassword} className={s['close-btn']}> <img src={closeBtn} alt="close button" /> </button>}
                        

                        {isRegistrationFormOpen && <RegistrationForm />}
                        {isLoginFormOpen && <LoginForm openForget={ openForgetPassword} />}
                        {isForgetPasswordOpen && <ForgetPassword />}
                
                        {isRegistrationFormOpen && <ChangeFormType text='Already have account.' click="Authorization" link={openLogin} />}
                        {isLoginFormOpen && <ChangeFormType text='Do you not have an account? ' click="Registr" link={ openRegistration} />}
                
                        {isRegistrationFormOpen && <ExtraSocials />}
                        {isLoginFormOpen && <ExtraSocials />}
                
                    </div>
                </div>)}
    </Transition>
    )
}