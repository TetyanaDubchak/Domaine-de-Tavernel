import s from './Field.module.scss'

export const Field = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['content-wrapper']}>
                <div className={s['title-wrapper']}> 
                    <p>Tavernel</p>
                </div>
                <div>
                    <p className={s['content-text']}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry</p>
                    <p className={s['subtext']}>has been dedicated to the art</p>
                    <p className={s['content-text']}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. </p>
                </div>
            </div>
        </section>
    )
}