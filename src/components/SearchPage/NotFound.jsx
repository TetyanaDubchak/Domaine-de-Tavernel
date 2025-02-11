import s from '../../assets/components/SearchPage/NotFound.module.scss';
import bottle from '../../assets/images/search/wine-bottle.png';

export const NotFound = () => {
    return (
        <div className={s.wrapper}>
            <div className={s['wine-wrapper']}>
                 <img src={bottle} alt="wine bottle" />
            </div>
            <p className={s['title']}>Items not found!</p>
            <div className={s['button-wrapper']}>
                <button className={s['change-button']}>Change to request</button>
                <button className={s['ahead-button']}>go to shop</button>
            </div>
        </div>
    )
}