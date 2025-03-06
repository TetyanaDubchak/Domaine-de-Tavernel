import list from "../../assets/json/products.json";
import s from '../../assets/styles/components/Catalog/ProductsList.module.scss';
import picture from '../../assets/images/catalog/products/product-1.png';
import { Icon } from "components/CommonFiles/Icon";

import { Link } from "react-router-dom";
import { StarsRating } from "components/CommonFiles/StarsRating";

export const ProductsList = () => {

    return (
        <div className={s.wrapper}>
            <ul className={s['products-list']}>
                {list.map((item) => {
                    return <li className={s['products-item']} key={item.id}>
                        <Link to={`/catalog/${item.id}`}>
                        <img className={s['products-picture']} src={picture} alt={item.name} />
                        <div className={s['content-wrapper']}>
                            <div className={s['reviews-wrapper']}>
                                    <StarsRating stars={ item.stars} />
                                <p>{item.review} review</p>
                            </div>
                            <h3 className={s['wine-name']}>{item.name}</h3>
                            <p className={s['wine-taste']}>{item.taste}</p>
                            <div className={s['price-wrapper']}>
                                {item.lastPrice ? <p className={s['last-price']}>{item.lastPrice} EUR</p> : ''}
                                <div className={s['current-price-wrapper']}>
                                    <div className={`${s.availibility} ${item.available ? s['is-available'] : s['is-not-available']}`}><p>{item.available? 'Available': 'Unailable'}</p></div>
                                    <p className={s.price}>{item.price} EUR</p>
                                </div>
                            </div>
                            <button className={s['add-button']} type="button">{item.available? 'add to card': 'Notify me' }</button>
                        </div>
                        <button className={s['like-button']} type='button'><Icon className={s['heart-icon']} type='heart-light'/></button>
                        {item.new ? <div className={s['new-sign']}>new</div> : ''}
                        {item.sale ? <div className={s['sale-sign']}>sale</div> : ''}
                        <div className={s['extra-information']}>
                            <p>Color: <span>{item.color}</span></p>  
                            <p>Sweetness: <span>{item.taste}</span></p>
                            <p>Vintage year: <span>{item.year }</span></p>    
                        </div>
                        </Link> 
                    </li>
                })}
            </ul>
        </div>
    )
}