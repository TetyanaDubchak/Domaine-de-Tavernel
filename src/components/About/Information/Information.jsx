import { Link } from 'react-router-dom';

import s from './Information.module.scss';

export const Information = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['text-wrapper']}>
                <p className={s.text}>“For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise.”</p>
            </div>
        </section>
    )
}