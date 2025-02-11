import s from '../../assets/components/Contacts/Social.module.scss';
import { Icon } from 'components/CommonFiles/Icon';

export const Social = () => {
    return (
        <section className={s.wrapper}>
            <ul className={s['list']}>
                <li className={s.item}><a href="#link">
                    <Icon type='facebook'/>
            </a></li>
                <li className={s.item}><a href="#link">
                    <Icon type='viber'/>
                    </a></li>
                <li className={s.item}><a href="#link">
                     <Icon type='instagram'/>
                </a></li>
            </ul>
        </section>
    )
}