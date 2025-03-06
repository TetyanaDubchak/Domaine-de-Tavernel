import s from '../../assets/styles/components/Payment/ContactDetail.module.scss';
import { ChekInfoForm } from './ChekInfoForm';
import { OrderDetails } from './OrderDetails';
import { PricePayContainer } from './PricePayContainer';

export const ContactDetail = () => {
    

    return (
        <div className={s.wrapper}>
            <div className={s['order-wrapper']}>
                <OrderDetails />
                <PricePayContainer />
            </div>
            <div className={s['check-wrapper']}><ChekInfoForm/></div>
       </div>
    )
}