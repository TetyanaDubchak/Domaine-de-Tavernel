import s from '../../assets/styles/components/Basket/BasketElement.module.scss';

import closeBtn from '../../assets/images/basket/close.svg';
import minusBtn from '../../assets/images/basket/minus.svg';
import plusBtn from '../../assets/images/basket/plus.svg';
import img1 from '../../assets/images/product/img-1.png';
import productsList from '../../assets/json/basket.json';

export const BasketElement = () => {

    return (
        <ul className={s.list}>
            {productsList.map((item) => {
                return <li className={s.item} key={item.id}>
                  <div className={s['picture-wrapper']}>
                      <img src={img1} alt="product" />
                      <div className={s['picture-wrapper-quantity']}>1</div>
                    </div>
                    <div>
                        <div className={s['top-wrapper']}>
                        <h4 className={s['top-title']}>{item.name}</h4>
                        <button className={s['close-button']}><img src={closeBtn} alt="delete button" /></button>
                  </div>    
                  <div className={s['info-wrapper']}>
                        <p className={s['info-taste']}>{item.taste}</p>
                        <div className={s['bottom-wrapper']}>
                        <div className={s['quantity-wrapper']}>
                          <button className={s['quantity-button']}>
                              <img src={minusBtn} alt="minus button"/>
                          </button>
                          <span className={s['quantity-number']}>{ item.quantity}</span>
                          <button className={s['quantity-button']}>
                              <img src={plusBtn} alt="plus button"/>
                          </button>
                            </div>
                           <p className={s['price']}>{item.price } EUR</p> 
                        </div> 
                    </div>
                    </div>
                </li>
            })}
        </ul>
    )
}