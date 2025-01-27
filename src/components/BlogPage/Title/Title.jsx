
import s from './Title.module.scss';

export const Title = () => {
    return (
        <section className={s.wrapper}>
            <h2 className={s.title}>The Art of Winemaking: Tradition Meets Innovation</h2>
            <div className={s['line-wrapper']}><span className={s['line']}></span></div>
        </section>
    )
}