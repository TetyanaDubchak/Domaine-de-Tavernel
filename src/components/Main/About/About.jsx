import { Link } from "react-router-dom";

import s from './About.module.scss'

export const About = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['content-wrapper']}>
                <h2 className={s.title}>About Company</h2>
                <span className={s.decor}>has been dedicated to the art of  to the he art</span>
                <p className={s.text}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.</p>
                <Link className={s.button} to='/about'><p>See More</p></Link>
            </div>
            <span></span>
        </section>
    )
}