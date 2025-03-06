import { useState } from "react";
import s from '../../assets/styles/components/Auth/LoginForm.module.scss';
import { SubmitBtn } from "./SubmitBtn";

export const LoginForm = ({openForget}) => {

    const [inputValues, setInputValues] = useState({
            userEmail: "",
            userPassword: "",
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
            userEmail: "",
            userPassword: "",})
    };
    
    return (
        <form onSubmit={handleOnSubmit}>
            <label className={s['contact-data-wrapper']}>
                  <input
                    className={`${s["contact-data-input"]} ${inputValues.userEmail ? s["is-value"] : ""}`}
                    name='userEmail'
                    type="email"
                    value={inputValues.userEmail}
                    required
                    onChange={handleOnInputChange} />
                <span className={s['contact-data-title']}>Your email *</span>
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
                <span className={s['contact-data-title']}>Your password *</span>
            </label>
            <button onClick={openForget} className={s['forget-btn']} type="button">Forget Password?</button>
            <SubmitBtn isActive={true} name='Authorization'/>
        </form>
    )
}