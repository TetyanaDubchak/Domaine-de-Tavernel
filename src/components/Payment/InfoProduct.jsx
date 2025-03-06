import s from '../../assets/styles/components/Payment/InfoProduct.module.scss';
import img1 from "../../assets/images/product/img-1.png";

export const InfoProduct = () => {
    
    return (
        <div className={s['main-wrapper']}>
            <button className={s['edit-btn']} type='button'>Edit</button>
        <div className={s.wrapper}> 
            <div className={s['img-wrapper']}>
                <img src={img1} alt="wine" />
                <div className={s['img-quantity-wrapper']}><span>2</span></div>
            </div>
            <div className={s['info-wrapper']}>
                <h5 className={s['title']}>The French Touch</h5>
                <p className={s['taste']}>Sweet</p>
                <div className={s['quantity-wrapper']}>
                    <p className={s['quantity']}>Quantity 2</p>
                    <p className={s['price']}>75 EUR</p>
                </div>
            </div>
       </div>
        </div>
        
    )
}