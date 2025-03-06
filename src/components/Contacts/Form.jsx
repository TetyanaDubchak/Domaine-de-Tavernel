import { useState } from "react";
import s from '../../assets/styles/components/Contacts/Form.module.scss';
import { Review } from "../CommonFiles/Review";
import { Link } from "react-router-dom";

export const Form = () => {

    const [inputValues, setInputValues] = useState({
        userName: "",
        userLastName: "",
        userEmail: "",
        userTel: "",
        userComment: "",
     });
    
    const [isCheckedPolicy, setIsCheckedPolicy] = useState(false);
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    
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
        handleOpenReview();
        setInputValues({
        userName: "",
        userLastName: "",
        userEmail: "",
        userTel: "+38",
        userComment: "",})
    };

    const handleOpenReview = () => {
        setIsReviewOpen(true);
    };

    const handleCloseReview = () => {
        setIsReviewOpen(false);
    };
    
    return (
        <section className={s.wrapper}>
            <div className={s['form-wrapper']}>
                <h3 className={s.title}>Contact Form</h3>
                <form className={s.form} name='contact' autoComplete="on" onSubmit={handleOnSubmit}>
                    <div className={s['extra-wrapper']}>
                        <label className={s['contact-data-wrapper']}>
                        <input
                            className={`${s["contact-data-input"]} ${inputValues.userName ? s["is-value"] : ""}`}
                            name='userName'
                            type="text"
                            required
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
                            pattern="^[a-zA-Zа-яА-Я]+$"
                            minLength="2"
                            onChange={handleOnInputChange} />
                         <span className={s['contact-data-title']}>Your last name *</span>
                    </label>
                    </div>
                    <div className={s['extra-wrapper']}>
                        <label className={s['contact-data-wrapper']}>
                        
                        <input
                            className={`${s["contact-data-input"]} ${inputValues.userEmail ? s["is-value"] : ""}`}
                            name='userEmail'
                            type="email"
                            required
                            onChange={handleOnInputChange} />
                        <span className={s['contact-data-title']}>Your Email *</span>
                    </label>
                        <label className={s['contact-data-wrapper']}>
                            <input
                            className={`${s["contact-data-input"]} ${inputValues.userTel ? s["is-value"] : ""}`}
                            name='userTel'
                            type="tel"
                            pattern="^\d{3}-\d{3}-\d{2}-\d{2}$"
                            value={inputValues.userTel}
                            onChange={handleOnInputChange}
                        />  
                        <span className={s['contact-data-title']}>Your phone number</span>
                    </label>
                    </div>
                    
                    <label className={s['comment-data-wrapper']}>
                        <textarea
                            className={`${s["comment-data-input"]} ${inputValues.userComment ? s["is-value"] : ""}`}
                            name="userComment"
                            placeholder="Your Request.."
                            onChange={handleOnInputChange}
                        ></textarea>
                    </label>
                    <label className={s['policy-data-wrapper']}>
                        <div className={s['checkbox-wrapper']}>
                            <input className={s['checkbox']} type="checkbox" name="user-policy" onChange={handleCheckedPolicy}/>
                            <span className={s['checkbox-decor']}></span>
                        </div>
                        <p className={s['policy-text']}>I hereby confirm my consent to abide by the &nbsp;
                            <Link to="/term">terms and conditions.</Link></p>
                        </label>
                    <button className={`${s["form-button"]} ${isCheckedPolicy ? s["is-checked"] : ""}`} disabled={!isCheckedPolicy} type='submit'>send</button>
                </form>
            </div>
            <Review name= 'your CONTACT FORM was sent successfully!' in={isReviewOpen} onClose={ handleCloseReview} />
        </section>
    )
}