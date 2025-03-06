import { useState } from 'react';
import s from '../../assets/styles/components/Payment/SelfShipping.module.scss';
import { ContinueBtn } from './ContinueBtn';

export const SelfShipping = ({isBtnActive, forButton}) => {
    const [inputValues, setInputValues] = useState({
                city: "",
                post: "",
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
                post: "",})
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
                    <span className={s['contact-data-title']}>Number of Post *</span>
                </label>
                <ContinueBtn linkTo='/payment/pay' forButton={forButton} isActive={ isBtnActive}/>
            </form>
            <p className={s['information']}>Physical points of delivery of goods operate from 9:00 a.m. to
            7:00 p.m</p>
       </div>
    )
}