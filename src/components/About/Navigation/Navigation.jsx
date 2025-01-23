import { Link } from 'react-router-dom';

import s from './Navigation.module.scss';

export const Navigation = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['navigate-wrapper']}>
                <Link to='/'>Main Page</Link>
                <span> / </span>
                <p>About Company</p>
            </div>
            <div className={s['text-wrapper']}>
                <p className={s.text}>“For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise.”</p>
            </div>
        </section>
    )
}