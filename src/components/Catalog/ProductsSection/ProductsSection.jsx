import { useState } from "react"
import { FilterAndSortBtnMob } from "../FilterAndSortBtnMob/FilterAndSortBtnMob"
import { FilterDesk } from "../FilterDesk/FilterDesk"
import { ProductsList } from "../ProductsList/ProductsList"
import { SortDesk } from "../SortDesk/SortDesk"
import s from './ProductsSection.module.scss'
import { CleanBtn } from "../CleanBtn/CleanBtn"

export const ProductsSection = () => {
    const [addedFilter, setAddedFilter] = useState(["Red", '2002 year']);

    return (
        <section className={s.wrapper}>
            <FilterAndSortBtnMob />
            <FilterDesk />
            <div className={s['products-wrapper']}>
                <div className={s['sort-wrapper']}>
                    <CleanBtn list={addedFilter } />
                    <SortDesk/>
                </div>
                <ProductsList/>
            </div>
        </section>
    )
}