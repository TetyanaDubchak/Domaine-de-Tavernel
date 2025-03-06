import { Icon } from 'components/CommonFiles/Icon';
import s from '../../assets/styles/components/Auth/ExtraSocials.module.scss';

import facebook from '../../assets/images/auth/facebook-icon.svg';

export const ExtraSocials = () => {
    
    return (
        <div className={s['buttons-wrapper']}>
            <div className={s['or-wrapper']}>
                <p>or</p>
            </div>
                <button className={s['button-google']}>
                        <Icon type='google'/>
                        Google
                    </button>
                    <button className={s['button-facebook']}>
                        <img src={facebook} alt="facebook" />
                        Facebook
                    </button>
        </div>
    )
}