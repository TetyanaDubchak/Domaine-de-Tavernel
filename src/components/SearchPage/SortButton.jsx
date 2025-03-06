
import { useState } from 'react';
import s from '../../assets/styles/components/SearchPage/SortButton.module.scss';
import { SortModal } from '../Catalog/SortModal';

export const SortButton = () => {

    const [isSortOpen, setIsSortOpen] = useState(false);

    const handleSortOpen = () => {
        setIsSortOpen(true);
    }
    const handleSortClose = () => {
        setIsSortOpen(false);
    }

    return (
        <div className={s.wrapper}>
            <button onClick={handleSortOpen} className={s['sort-btn']}>Sort by</button>
            {isSortOpen && <SortModal onClose={handleSortClose} />}
        </div>
    )
}