import img1 from "../../../assets/images/about/history/first/img-1.png";
import img2 from "../../../assets/images/about/history/first/img-2.png";

import s from './HistoryFirst.module.scss';

export const HistoryFirst = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['cycle-wrapper']}>
                <ul className={s['cycle-list']}>
                    <li className={s['cycle-item']}>
                        <div className={s['text-wrapper']}>
                            <div className={s['title-wrapper']}>
                                <h4>1980 year</h4>
                            </div>
                            <p className={s['content-text']}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.</p>
                        </div>
                        <div className={s['decor-wrapper']}><p>has been dedicated to the art of </p></div>
                    </li>
                    <li className={s['cycle-item']}>
                        <div className={s['text-wrapper']}>
                            <div className={s['title-wrapper']}> <h4>1980 year</h4></div>
                            <p className={s['content-text']}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.</p>
                        </div>
                        <div className={s['decor-wrapper']}><p>has been dedicated to the art of </p></div>
                    </li>
                    <li className={s['cycle-item']}>
                        <div className={s['text-wrapper']}>
                            <div className={s['title-wrapper']}><h4>1980 year</h4></div>
                            <p className={s['content-text']}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.</p>
                        </div>
                        <div className={s['decor-wrapper']}><p>has been dedicated to the art of</p></div>
                    </li>
                </ul>
            </div>
            <div className={s['photo-wrapper']}>
                <img className={s['photo1']} src={img1} alt="field" />
                <span className={s['photo-decor']}></span>
                <img className={s['photo2']} src={img2} alt="field" />
            </div>
        </section>
    )
}