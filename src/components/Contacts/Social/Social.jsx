import sprite from '../../../assets/images/sprite.svg';

import s from './Social.module.scss';

export const Social = () => {
    return (
        <section className={s.wrapper}>
            <ul className={s['list']}>
                <li className={s.item}><a href="#link">
                    <svg width='12' height='12'>
                        <use href={ sprite + '#icon-facebook'}></use>
                    </svg></a></li>
                <li className={s.item}><a href="#link">
                    <svg width='17' height='17'>
                        <use href={ sprite + '#icon-viber'}></use>
                    </svg></a></li>
                <li className={s.item}><a href="#link">
                    <svg width='12' height='12'>
                        <use href={ sprite + '#icon-instagram'}></use>
                    </svg>
                </a></li>
            </ul>
        </section>
    )
}