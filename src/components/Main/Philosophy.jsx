import { Link } from "react-router-dom";

import s from "../../assets/styles/components/Main/Philosophy.module.scss";

export const Philosophy = () => {
    return ( 
        <section className={s.wrapper}>
            <div className={s['main-wrapper']}>
                <div className={s['decor-wrapper']}> <div></div></div>
                <div className={s['content-wrapper']}>
                    <h2 className={s.title}>Company Philosophy</h2>
                    <p className={s.subtext}>has been dedicated to the art of  to the he art</p>
                    <p className={s.text}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.</p>
                    <Link className={s.button} to='/about'><p>See More</p></Link>
                </div> 
            </div>
            
        </section>
    )
}