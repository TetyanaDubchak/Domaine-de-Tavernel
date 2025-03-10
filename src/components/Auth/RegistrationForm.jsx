import { useState } from "react";
import s from '../../assets/styles/components/Auth/RegistrationForm.module.scss';
import { Checkbox } from "./Checkbox";
import { SubmitBtn } from "./SubmitBtn";

export const RegistrationForm = () => {

    const [inputValues, setInputValues] = useState({
            userName: "",
            userLastName: "",
            userEmail: "",
            userPassword: "",
         });
        
        const [isCheckedPolicy, setIsCheckedPolicy] = useState(false);
        
        const handleCheckedPolicy = (e) => {
             const {  checked } = e.target;
            setIsCheckedPolicy(checked);
        };
    
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
            userPassword: "",})
    };
    
    return (
        <form onSubmit={handleOnSubmit}>
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
                    name='userPassword'
                    type="password"
                    required
                    minLength="6"
                    value={inputValues.userPassword}
                    onChange={handleOnInputChange}
                    maxLength="12"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                    title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                />  
                <span className={s['contact-data-title']}>Your Password *</span>
            </label>
            <Checkbox changePolicy={handleCheckedPolicy} />
            <SubmitBtn isActive={isCheckedPolicy} name='registration'/>
        </form>
    )
}