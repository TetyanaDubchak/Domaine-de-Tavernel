
import s from '../../assets/components/CommonFiles/HeroPages.module.scss';

export const Hero = ({bg}) => {
    return ( <section style={{backgroundImage: `url(${bg})`}}  className={s.wrapper}>
       
            <div className={s['content-wrapper']}>
                <div className={s['title-wrapper']}> 
                     <h2 className={s.title}>Domaine <span>de</span>  Tavernel </h2>
                </div>
               
                <p className={s.text}>“For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise.”</p>
            </div>
        </section>
    )
}