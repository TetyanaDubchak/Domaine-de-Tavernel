import { useState } from 'react';
import s from '../../assets/styles/components/Payment/CourierShipping.module.scss';
import { ContinueBtn } from './ContinueBtn';

export const CourierShipping = ({isBtnActive,forButton}) => {
    const [inputValues, setInputValues] = useState({
                city: "",
                post: "",
                build: ''
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
                city: "",
                post: "",
                build: ''})
        };
    return (
        <div className={s['wrapper']}>
            <form className={s.form} onClick={handleOnSubmit}>
                 <label className={s['contact-data-wrapper']}>
                    <input
                        className={`${s["contact-data-input"]} ${inputValues.userName ? s["is-value"] : ""}`}
                        name='city'
                        type="text"
                        required
                        value={inputValues.city}
                        pattern="^[a-zA-Zа-яА-Я]+$"
                        minLength="2"
                        onChange={handleOnInputChange}/>
                    <span className={s['contact-data-title']}>Your city *</span>    
                    </label>
                <label className={s['contact-data-wrapper']}>
                       <input
                            className={`${s["contact-data-input"]} ${inputValues.userLastName ? s["is-value"] : ""}`}
                            name='post'
                            type="text"
                            required
                            value={inputValues.post}
                            pattern="^[a-zA-Zа-яА-Я]+$"
                            minLength="2"
                            onChange={handleOnInputChange} />
                    <span className={s['contact-data-title']}>Choose address *</span>
                </label>
                 <label className={s['contact-data-wrapper']}>
                       <input
                            className={`${s["contact-data-input"]} ${inputValues.userLastName ? s["is-value"] : ""}`}
                            name='build'
                            type="text"
                            required
                            value={inputValues.build}
                            pattern="^[a-zA-Zа-яА-Я]+$"
                            minLength="2"
                            onChange={handleOnInputChange} />
                    <span className={s['contact-data-title']}>Your build/ apartment number *</span>
                </label>
                <ContinueBtn forButton={forButton} linkTo='/payment/pay' isActive={ isBtnActive} />
            </form>
       </div>
    )
}