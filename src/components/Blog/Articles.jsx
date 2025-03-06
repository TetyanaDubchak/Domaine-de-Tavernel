import { Link } from 'react-router-dom';

import s from '../../assets/styles/components/Blog/Articles.module.scss';

import img1 from '../../assets/images/blogs/article-1.png';
import img2 from '../../assets/images/blogs/article-2.png';
import img3 from '../../assets/images/blogs/article-3.png';
import img4 from '../../assets/images/blogs/article-4.png';
import arrow from '../../assets/images/blogs/arrow-right.svg';

export const Articles = () => {
    return (
        <section className={s.wrapper}>
            <ul className={s.list}>
                <li className={s.item}>
                    <Link to='/blog-page'><h3 className={s.title}>The Art of Winemaking</h3></Link>
                    <Link to='/blog-page'><div className={s['img-wrapper']}><img src={img1} alt="barrels" /></div></Link>
                    <div className={s['location-wrapper']}><p>France, Produce</p><span className={s.point}></span><span>By Tavernel</span></div>
                    <span className={s['decor-line']}></span>
                    <div className={s['subscribe-wrapper']}><p>In the heart of the lush vineyards, where the soil is rich and the climate perfect for grape cultivation, lies the essence of winemaking—a blend of tradition and innovation that has been passed down through generations. This article explores the meticulous process of winemaking, from the selection of... </p></div>
                    <div className={s['date-wrapper']}><p>January 23, 2024</p></div>
                    <div className={s['line-wrapper']}><span className={s['line']}></span></div>
                    <Link to='/blog-page' className={s['link-wrapper']}><span>explore</span><img src={arrow} alt="arrow" /></Link>
                </li>
                <li className={s.item}>
                    <Link to='/blog-page'><h3 className={s.title}>The Art of Winemaking</h3></Link>
                    <Link to='/blog-page'><div className={s['img-wrapper']}><img src={img2} alt="barrels" /></div></Link>
                    <div className={s['location-wrapper']}><p>France, Produce</p><span className={s.point}></span><span>By Tavernel</span></div>
                    <span className={s['decor-line']}></span>
                    <div className={s['subscribe-wrapper']}><p>In the heart of the lush vineyards, where the soil is rich and the climate perfect for grape cultivation, lies the essence of winemaking—a blend of tradition and innovation that has been passed down through generations. This article explores the meticulous process of winemaking, from the selection of... </p></div>
                    <div className={s['date-wrapper']}><p>January 23, 2024</p></div>
                    <div className={s['line-wrapper']}><span className={s['line']}></span></div>
                    <Link to='/blog-page' className={s['link-wrapper']}><span>explore</span><img src={arrow} alt="arrow" /></Link>
                </li>
                <li className={s.item}>
                    <Link to='/blog-page'><h3 className={s.title}>The Art of Winemaking</h3></Link>
                    <Link to='/blog-page'><div className={s['img-wrapper']}><img src={img3} alt="barrels" /></div></Link>
                    <div className={s['location-wrapper']}><p>France, Produce</p><span className={s.point}></span><span>By Tavernel</span></div>
                    <span className={s['decor-line']}></span>
                    <div className={s['subscribe-wrapper']}><p>In the heart of the lush vineyards, where the soil is rich and the climate perfect for grape cultivation, lies the essence of winemaking—a blend of tradition and innovation that has been passed down through generations. This article explores the meticulous process of winemaking, from the selection of... </p></div>
                    <div className={s['date-wrapper']}><p>January 23, 2024</p></div>
                    <div className={s['line-wrapper']}><span className={s['line']}></span></div>
                    <Link to='/blog-page' className={s['link-wrapper']}><span>explore</span><img src={arrow} alt="arrow" /></Link>
                </li>
                <li className={s.item}>
                    <Link to='/blog-page'><h3 className={s.title}>The Art of Winemaking</h3></Link>
                    <Link to='/blog-page'><div className={s['img-wrapper']}><img src={img4} alt="barrels" /></div></Link>
                    <div className={s['location-wrapper']}><p>France, Produce</p><span className={s.point}></span><span>By Tavernel</span></div>
                    <span className={s['decor-line']}></span>
                    <div className={s['subscribe-wrapper']}><p>In the heart of the lush vineyards, where the soil is rich and the climate perfect for grape cultivation, lies the essence of winemaking—a blend of tradition and innovation that has been passed down through generations. This article explores the meticulous process of winemaking, from the selection of... </p></div>
                    <div className={s['date-wrapper']}><p>January 23, 2024</p></div>
                    <div className={s['line-wrapper']}><span className={s['line']}></span></div>
                    <Link to='/blog-page' className={s['link-wrapper']}><span>explore</span><img src={arrow} alt="arrow" /></Link>
                </li>
            </ul>
        </section>
    )
}