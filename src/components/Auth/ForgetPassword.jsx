import { useState } from "react";
import {useModalStore} from '../../store/authStore';
import s from '../../assets/styles/components/Auth/ForgetPassword.module.scss';
import { SubmitBtn } from "./SubmitBtn";
import { Review } from "components/CommonFiles/Review";

export const ForgetPassword = () => {

    const [inputValues, setInputValues] = useState({
            userEmail: "",
    });
    const [isOpenSentReview,setIsOpenSentReview] = useState(false);
    const { closeForgetPassword , openLogin} = useModalStore();
    const handleOnInputChange = (e) => {
            const { name, value } = e.target;
            setInputValues((prev) => ({ ...prev, [name]: value }));
        };
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
        setIsOpenSentReview(true);
        closeForgetPassword();
        setInputValues({
            userEmail: "",})
    };
    
    return (
        <>
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
            <button onClick={openLogin} className={s['know-btn']} type="button">I know password</button>
            <SubmitBtn isActive={true} name='Remind password'/>
            </form>
            <Review name="a new password will be sent to your email!" in={ isOpenSentReview} onClose={()=>setIsOpenSentReview(false)} />
        </>
    )
}