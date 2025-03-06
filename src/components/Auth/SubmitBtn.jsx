import s from '../../assets/styles/components/Auth/SubmitBtn.module.scss';


export const SubmitBtn = ({ name, isActive=false }) => {
    
    return (
        <button className={`${s["button"]} ${isActive ? s["is-checked"] : ""}`} disabled={!isActive} type='submit'>{ name }</button>
    )
}