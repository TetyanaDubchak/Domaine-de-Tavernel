
import s from '../../assets/styles/components/Catalog/FilterDesk.module.scss';
import { FilterList } from './FilterList';


export const FilterDesk = () => {
    
    return (
        <div className={s.wrapper}>
            <div className={s['top-wrapper']}>
                <h4 className={s['title']}>Filter by</h4>
            </div>
            <FilterList />
            <div className={s['decor-wrapper']}>
                <span className={s['decor-wrapper-arrow-1']}></span>
                <div className={s['text-decor-wrapper']}>
                    <p>Tavernel</p>
                </div>
                <span className={s['decor-wrapper-arrow-2']}></span>
            </div>
        </div>
    )
}