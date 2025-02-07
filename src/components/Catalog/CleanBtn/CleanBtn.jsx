import s from './CleanBtn.module.scss';
import close from "../../../assets/images/catalog/close.svg";

export const CleanBtn = ({list}) => {
    
    return (
        <div className={s.wrapper}>
            {list ? <button className={s['clean-btn']} type='button'>Clean all</button> : ''}
            {list.map((item, inx) => {
                return <button className={s['filter-btn']} type='button' key={inx}><p>{item}</p><img src={close} alt="close button" /></button>
            })}
        </div>
    )
}