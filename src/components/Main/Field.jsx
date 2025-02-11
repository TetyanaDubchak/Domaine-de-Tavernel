import s from '../../assets/components/Main/Field.module.scss'

import img1 from '../../assets/images/main/field/bg-maps-philos.png';
import map from '../../assets/images/main/field/bg-map.png';

export const Field = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['content-wrapper']}>
                <div className={s['title-wrapper']}>
                    <div>
                        <p>Tavernel</p>
                    </div>
                </div>
                <div className={s['text-wrapper']}>
                    <p className={s['content-text']}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry</p>
                    <p className={s['subtext']}>has been dedicated to the art</p>
                    <p className={s['content-text']}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. </p>
                </div>
                <div className={s['img-wrapper']}>
                    <img className={s['city']} src={img1} alt="view of the city"/>
                    <img className={s['map']} src={map} alt="map of the city"/>
                </div>
            </div>
        </section>
    )
}