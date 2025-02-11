import { Link } from 'react-router-dom';

import s from '../../assets/components/CommonFiles/NavigateTitle.module.scss';

export const Navigation = ({page,page1, link1, page2,link2,details}) => {
    return (
        <section className={s.wrapper}>
            <div className={s['navigate-wrapper']}>
                <Link to='/'>Main Page <span> / </span></Link>
                {link1 ? <Link to={`/${link1}`}>{page1} <span> / </span></Link> : ''}
                {link2 ? <Link to={`/${link2}`}>{page2} <span> / </span></Link>: ''}
                <p>{page} <span>{details}</span> </p>
            </div>
        </section>
    )
}