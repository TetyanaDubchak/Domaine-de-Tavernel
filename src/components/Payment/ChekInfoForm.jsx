import { useState } from 'react';
import s from '../../assets/styles/components/Payment/ChekInfoForm.module.scss';
import { ContinueBtn } from './ContinueBtn';
import {usePayLinkStore } from '../../store/paymentStore';

export const ChekInfoForm = () => {
    const { setDeliveryActive , setContactDisactive} = usePayLinkStore();
    
    const [inputValues, setInputValues] = useState({
                userName: "",
                userLastName: "",
                userEmail: "",
                userTel: "",
             });
        
            const handleOnInputChange = (e) => {
                const { name, value } = e.target;
                setInputValues((prev) => ({ ...prev, [name]: value }));
            };
        
            const handleOnSubmit = (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                form.reset();
                setInputValues({
                userName: "",
                userLastName: "",
                userEmail: "",
                    userTel: "",
                })
                setDeliveryActive();
                setContactDisactive()
    };
    
    return (
        <div className={s['wrapper']}>
            <h3 className={s['main-title']}>Check your information</h3>
            <form className={s.form} onClick={handleOnSubmit}>
                 <label className={s['contact-data-wrapper']}>
                    <input
                        className={`${s["contact-data-input"]} ${inputValues.userName ? s["is-value"] : ""}`}
                        name='userName'
                        type="text"
                        required
                        value={inputValues.userName}
                        pattern="^[a-zA-Zа-яА-Я]+$"
                        minLength="2"
                        onChange={handleOnInputChange}/>
                    <span className={s['contact-data-title']}>Your name *</span>    
                    </label>
                <label className={s['contact-data-wrapper']}>
                       <input
                            className={`${s["contact-data-input"]} ${inputValues.userLastName ? s["is-value"] : ""}`}
                            name='userLastName'
                            type="text"
                            required
                            value={inputValues.userLastName}
                            pattern="^[a-zA-Zа-яА-Я]+$"
                            minLength="2"
                            onChange={handleOnInputChange} />
                    <span className={s['contact-data-title']}>Your last name *</span>
            </label>
            <label className={s['contact-data-wrapper']}>
                  <input
                    className={`${s["contact-data-input"]} ${inputValues.userEmail ? s["is-value"] : ""}`}
                    name='userEmail'
                    type="email"
                    value={inputValues.userEmail}
                    required
                    onChange={handleOnInputChange} />
                <span className={s['contact-data-title']}>Your Email *</span>
            </label>
            <label className={s['contact-data-wrapper']}>
                <input
                    className={`${s["contact-data-input"]} ${inputValues.userTel ? s["is-value"] : ""}`}
                    name='userTel'
                    type="tel"
                    required
                    pattern="^\d{3}-\d{3}-\d{2}-\d{2}$"
                    value={inputValues.userTel}
                    onChange={handleOnInputChange}
                />  
                <span className={s['contact-data-title']}>Phone Number *</span>
                </label>
                <ContinueBtn/>
            </form>
       </div>
    )
}