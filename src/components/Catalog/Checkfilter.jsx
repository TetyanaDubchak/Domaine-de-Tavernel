
import s from '../../assets/components/Catalog/Checkfilter.module.scss';

export const Checkfilter = ({list}) => {
    
    return (
        <div className={s.wrapper}>
            <ul className={s.list}>
               {list.map((item,idx) => {
                
                   return (
                       <li key={idx} className={s.item}>
                           <label className={s['checkbox-label']}>
                               <input className={s['checkbox']} type="checkbox" value={item.value} />
                               <span className={s['checkbox-decor']}></span>
                               <p className={s['checkbox-name']}>{item.type}</p> <span className={s['checkbox-quality']}>({ item.quality})</span>
                           </label>
                       </li>
                   )
            })} 
            </ul>
            
        </div>
    )
}