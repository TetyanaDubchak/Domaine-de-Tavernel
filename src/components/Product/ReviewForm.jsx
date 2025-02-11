import { useEffect,useState } from "react";
import close from '../../assets/images/contacts/close.svg';
import starGray from "../../assets/images/catalog/star-gray.svg";
import starFill from "../../assets/images/catalog/star-fill.svg";
import s from '../../assets/components/Product/ReviewForm.module.scss';

export const ReviewForm = ({openSentModal, onClose }) => {
        const [inputValues, setInputValues] = useState({
            userName: "",
            userEmail: "",
            userAdventages: "",
            userDisadventages: "",
            userComment: "",
        });
    
        const [starsQuantity,setStarsQuantity] = useState(0);
    
    const maxStars = 5;
    
    const handleSetStars = (index) => {
        setStarsQuantity(index+1);
    }
    
        const handleOnInputChange = (e) => {
            const { name, value } = e.target;
            setInputValues((prev) => ({ ...prev, [name]: value }));
        };
    
        const handleOnSubmit = (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            form.reset();
            setStarsQuantity(0)
            onClose();
            openSentModal();
            setInputValues({
            userName: "",
            userLastName: "",
            userEmail: "",
            userTel: "",
            userComment: "",})
        };

    
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

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
        <div className={s.backdrop} onClick={handleBackdropClick}>
            <div className={s.modal}>
                <button className={s['close-btn']} onClick={onClose}>
                    <img src={close} alt="close-button" />
                </button>
                <h3 className={s['title']}>write review</h3>
                <div className={s['star-wrapper']}>
                    <p>Apriciate</p>
                    <div className={s.rating}>
                    {[...Array(maxStars)].map((_, index) => (
                            <img onClick={()=>handleSetStars(index)} src={index < starsQuantity ? `${starFill}` : `${starGray}`} key={index} className={s.star} alt='rating'/>
                    ))}
                </div>
                </div>
                <form className={s.form} name='contact' autoComplete="on" onSubmit={handleOnSubmit}>
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
                            className={`${s["contact-data-input"]} ${inputValues.userEmail ? s["is-value"] : ""}`}
                            name='userEmail'
                            type="email"
                            required
                            onChange={handleOnInputChange} />
                        <span className={s['contact-data-title']}>Your Email *</span>
                    </label>
                    <label className={s['contact-data-wrapper']}>   
                        <textarea
                            className={`${s["contact-data-input"]} ${inputValues.userTel ? s["is-value"] : ""}`}
                            name='userAdventages'
                            type="text"
                            onChange={handleOnInputChange} />
                        <span className={s['contact-data-title']}>Advantages</span>
                    </label>
                     <label className={s['contact-data-wrapper']}>   
                        <textarea
                            className={`${s["contact-data-input"]} ${inputValues.userTel ? s["is-value"] : ""}`}
                            name='userDisadventages'
                            type="text"
                            onChange={handleOnInputChange} />
                        <span className={s['contact-data-title']}>Disadvantages</span>
                    </label>
                    
                    <label className={s['comment-data-wrapper']}>
                        <textarea
                            className={`${s["comment-data-input"]} ${inputValues.userComment ? s["is-value"] : ""}`}
                            name="userComment"
                            placeholder="Your Request.."
                            onChange={handleOnInputChange}
                        ></textarea>
                    </label>
                    <p className={s['info-text']}>A reply will be sent to your email!</p>
                    <button className={`${s["form-button"]}`} type='submit'>send</button>
                </form>
           </div>
            </div>
            </>
    )
}