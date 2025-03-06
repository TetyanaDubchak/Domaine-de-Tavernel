import { Link } from 'react-router-dom';
import s from '../../assets/styles/components/Payment/ContinueBtn.module.scss';

export const ContinueBtn = ({isActive=true, name='Continue',linkTo, forButton}) => {
    
    return (
        <div className={s.wrapper}>
            <button onClick={forButton} className={`${s["button"]} ${isActive ? s["is-checked"] : ""}`} disabled={!isActive} type='submit'><Link to={linkTo}>{ name}</Link></button>
       </div>
    )
}