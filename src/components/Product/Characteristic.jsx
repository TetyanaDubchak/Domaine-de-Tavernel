import s from "../../assets/components/Product/Characteristic.module.scss";

export const Characteristic = () => {
    return (
        <div className={s['wrapper']}>
            <ul className={s['list']}>
                <li className={s['item']}>
                    <p>Color:</p>
                    <span>Red</span>
                </li>
                <li className={s['item']}>
                    <p>Sweetness:</p>
                    <span>Semi-sweet</span>
                </li>
                <li className={s['item']}>
                    <p>Vintage Year:</p>
                    <span>2002</span>
                </li>
                <li className={s['item']}>
                    <p>Country:</p>
                    <span>France</span>
                </li>
                <li className={s['item']}>
                    <p>Volume:</p>
                    <span>750ml</span>
                </li>
                <li className={s['item']}>
                    <p>Alcohol content: </p>
                    <span>12.5% vol.</span>
                </li>
                <li className={s['item']}>
                    <p>Grape variety: </p>
                    <span>Cabernet Sauvignon</span>
                </li>
            </ul>
        </div>
    )
}