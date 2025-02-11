import street from "../../assets/images/contacts/content.png";

import s from '../../assets/components/Contacts/Information.module.scss';

export const Information = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['extra-wrapper']}>
                <div className={s['picture-wrapper']}>
                    <img className={s['picture']} src={street} alt="street" />
                </div>
                <div className={s['info-wrapper']}>
                    <h2 className={s['info-title']}>Contact With us</h2>
                    <p className={s['info-text']}>Please submit your application through our form. Our team will diligently review your request and aims to process it within approximately 24 hours. Following the review, we will reach out to you to discuss the next steps or provide the necessary information. </p>
                    <p className={s['info-text']}>We are located at <span>Route de Fourques - 1479, Chemin de Tavernel - 30300 Beaucaire, France</span>,  in the heart of the historic 6th arrondissement of Paris. You can contact us by phone  or through our social media channels.</p>
                    <div className={s['phone-wrapper']}>
                        <p className={s['phone-text']}>Phone number</p>
                        <p className={s['phone-number']}>+04 66 58 57 01</p>
                    </div>
                </div>
            </div>
        </section>
    )
}