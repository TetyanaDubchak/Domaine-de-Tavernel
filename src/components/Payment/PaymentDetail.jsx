import s from '../../assets/styles/components/Payment/PaymentDetail.module.scss';

import { OrderDetails } from './OrderDetails';
import { PaymentMethod } from './PaymentMethod';
import { PricePayContainer } from './PricePayContainer';


export const PaymentDetail = () => {
    
    return (
       <div className={s.wrapper}>
            <div className={s['order-wrapper']}>
                <OrderDetails />
                <PricePayContainer />
            </div>
            <div className={s['check-wrapper']}>
               <PaymentMethod/>
            </div>
       </div>
    )
}