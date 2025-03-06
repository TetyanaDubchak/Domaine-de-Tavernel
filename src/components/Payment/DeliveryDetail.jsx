import s from '../../assets/styles/components/Payment/DeliveryDetail.module.scss';
import { OrderDetails } from './OrderDetails';
import { PricePayContainer } from './PricePayContainer';
import { ShippingMethod } from './ShippingMethod';


export const DeliveryDetail = () => {
    
    return (
       <div className={s.wrapper}>
            <div className={s['order-wrapper']}>
                <OrderDetails />
                <PricePayContainer />
            </div>
            <div className={s['check-wrapper']}>
                <ShippingMethod/>
            </div>
       </div>
    )
}