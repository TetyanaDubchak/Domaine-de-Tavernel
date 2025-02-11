import s from '../../assets/components/Main/Information.module.scss';

export const Information = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['wine-wrapper']}>
                <div>
                    <p className={s.text}>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.</p> 
                </div>
                
                <p className={s.subtext}>has been dedicated to the art</p>
            </div>
            
        </section>
    )
}