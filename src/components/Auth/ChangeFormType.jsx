import s from '../../assets/styles/components/Auth/ChangeFormType.module.scss';


export const ChangeFormType = ({ text, click, link}) => {
    
    return (
        <div className={s.wrapper}>
            <p className={s.title}>{ text}</p>
            <button onClick={link} className={s.btn}>{click}</button>
        </div>
       
    )
}