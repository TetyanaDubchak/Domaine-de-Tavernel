
import { FilterAndSortBtnMob } from "./FilterAndSortBtnMob"
import { FilterDesk } from "./FilterDesk"
import { ProductsList } from "./ProductsList"
import { SortDesk } from "./SortDesk"
import s from '../../assets/styles/components/Catalog/ProductsSection.module.scss'
import { CleanBtn } from "./CleanBtn"

export const ProductsSection = () => {
    const addedFilter=["Red", '2002 year'];

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