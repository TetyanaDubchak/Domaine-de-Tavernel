
import s from '../../assets/styles/components/Auth/Checkbox.module.scss';
import { Link } from 'react-router-dom';


export const Checkbox = ({changePolicy}) => {
    return (
        <label className={s['policy-data-wrapper']}>
            <div className={s['checkbox-wrapper']}>
                    <input className={s['checkbox']} type="checkbox" name="user-policy" onChange={changePolicy}/>
                    <span className={s['checkbox-decor']}></span>
                </div>
            <p className={s['policy-text']}>I hereby confirm my consent to abide by the &nbsp; <br/>
                <Link to="/term">terms and conditions.</Link></p>
            </label>
    )
}