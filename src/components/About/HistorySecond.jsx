import img1mob from "../../assets/images/about/history/second/img1-mob.png";
import img2mob from "../../assets/images/about/history/second/img2-mob.png";
import img1desc from "../../assets/images/about/history/second/img1-desc.png";
import img2desc from "../../assets/images/about/history/second/img2-desc.png";

import s from '../../assets/components/About/HistorySecond.module.scss';

export const HistorySecond = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['cycle-wrapper-1']}>
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
                </ul>
            </div>
            <div className={s['photo-wrapper']}>
            <picture>
              <source
                srcSet={img1desc}
                media="(min-width: 991px)"
              />
              <source
                srcSet={img1mob}
                media="(max-width: 990px)"
              />
              <img
                src={img1desc}
                alt="field"
                className={s.photo1}
              />
            </picture>
            <span className={s['photo-decor']}></span>
            <picture>
              <source
                srcSet={img2desc}
                media="(min-width: 991px)"
              />
              <source
                srcSet={img2mob}
                media="(max-width: 990px)"
              />
              <img
                src={img2desc}
                alt="field"
                className={s.photo2}
              />
            </picture>
            </div>
            <div className={s['cycle-wrapper-2']}>
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
                </ul>
            </div>
        </section>
    )
}