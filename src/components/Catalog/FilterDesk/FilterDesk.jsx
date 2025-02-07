
import s from './FilterDesk.module.scss';
import { FilterList } from '../FilterList/FilterList';


export const FilterDesk = () => {
    
    return (
        <div className={s.wrapper}>
            <div className={s['top-wrapper']}>
                <h4 className={s['title']}>Filter by</h4>
            </div>
            <FilterList/>
        </div>
    )
}