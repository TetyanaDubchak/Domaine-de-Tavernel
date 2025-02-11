import s from '../../assets/components/SearchPage/Title.module.scss'

export const Title = ({name='The French Touch', quality='0'}) => {
    return (
        <div className={s.wrapper}>
            <h3 className={s['title']}>Search result "{name }"</h3>
            <div className={s['quality-wrapper']}>{ quality}</div>
        </div>
    )
}