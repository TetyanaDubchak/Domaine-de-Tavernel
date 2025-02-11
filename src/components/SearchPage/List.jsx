import { ProductsList } from 'components/Catalog/ProductsList';
import s from '../../assets/components/SearchPage/List.module.scss';

export const List = ({result}) => {
    return (
        <div className={s.wrapper}>
            <ProductsList list={ result} />
        </div>
    )
}