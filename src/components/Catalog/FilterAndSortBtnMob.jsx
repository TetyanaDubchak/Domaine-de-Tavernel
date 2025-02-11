
import { useState } from 'react';
import s from '../../assets/components/Catalog/FilterAndSortBtnMob.module.scss';
import { SortModal } from './SortModal';
import { FilterModal } from './FilterModal';

export const FilterAndSortBtnMob = () => {

    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleSortOpen = () => {
        setIsSortOpen(true);
    }
    const handleSortClose = () => {
        setIsSortOpen(false);
    }
    const handleFilterOpen = () => {
        setIsFilterOpen(true);
    }
    const handleFilterClose = () => {
        setIsFilterOpen(false);
    }
    return (
        <section className={s.wrapper}>
            <button onClick={handleFilterOpen} className={s['filter-btn']}>Filter by</button>
            <button onClick={handleSortOpen} className={s['sort-btn']}>Sort by</button>
            {isSortOpen ? <SortModal onClose={handleSortClose} /> : ''}
            {isFilterOpen ? <FilterModal onClose={ handleFilterClose} />: ''}
        </section>
    )
}