import street from "../../assets/images/contacts/content.png";

import s from './Information.module.scss';

export const Information = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['picture-wrapper']}>
                <img src={street} alt="street" />
            </div>
            <div className={s['info-wrapper']}>
                <h2>Contact With us</h2>
                <p>Please submit your application through our form. Our team will diligently review your request and aims to process it within approximately 24 hours. Following the review, we will reach out to you to discuss the next steps or provide the necessary information. </p>
                <p>We are located at Route de Fourques - 1479, Chemin de Tavernel - 30300 Beaucaire, France, in the heart of the historic 6th arrondissement of Paris. You can contact us by phone  or through our social media channels.</p>
                <div>
                    <p>Phone number</p>
                    <p>+04 66 58 57 01</p>
                </div>
                
            </div>
        </section>
    )
}