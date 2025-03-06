import { Link } from 'react-router-dom';
import s from '../../assets/styles/components/Payment/PayInfo.module.scss';

export const PayInfo = () => {
    
    return (
       <div className={s.wrapper}>
            <p className={s.text}>Pressing the "Pay" button confirms that you have read the list of service information and <Link className={s.link} to='/term'>accept the terms of the public contract.</Link> </p>
       </div>
    )
}