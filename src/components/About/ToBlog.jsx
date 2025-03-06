import { Link } from 'react-router-dom';

import s from '../../assets/styles/components/About/ToBlog.module.scss';

export const ToBlog = () => {
    return (
        <section className={s.wrapper}>
            <p className={s.text}>“For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise.”</p>
            <Link className={s.button} to='/blog'><p className={s['button-text']}>see more</p></Link>
        </section>
    )
}