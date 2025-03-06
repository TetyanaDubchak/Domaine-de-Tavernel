import recomm1 from "../../assets/images/blog_page/article-1.png";
import recomm2 from "../../assets/images/blog_page/article-2.jpg";
import decorPhoto from "../../assets/images/blog_page/decor-photo.png";

import s from '../../assets/styles/components/BlogPage/ArticleContent.module.scss';

export const ArticleContent = () => {
    return (
        <section className={s.wrapper}>
            <div className={s['extra-wrapper']}>
                <div className={s['recommended-wrapper']}>
                    <h3 className={s['recommended-title']}>Recommended Article</h3>
                    <ul className={s['recommended-list']}>
                        <li className={s['recommended-item']}>
                            <img className={s['recommended-photo']} src={recomm1} alt="barrels" />
                            <h4 className={s['recommended-text']}>Fermentation: The Heart of Winemaking </h4>
                            </li>
                        <li className={s['recommended-item']}>
                            <img className={s['recommended-photo']} src={recomm2} alt="people are picking grapes" />
                            <h4 className={s['recommended-text']}>Fermentation: The Heart of Winemaking </h4>
                            </li>
                    </ul>
                </div>  
                <div className={s['location-wrapper']}>
                    <p>By Tavernel</p>
                    <span className={s['decor-point']}></span>
                    <p className={s['date']}>January 23, 2024</p>
                </div>
                <ul className={s['article-list']}>
                    <li className={s['article-item']}><p className={s['article-text']}>In the heart of the lush vineyards, where the soil is rich and the climate perfect for grape cultivation, lies the essence of winemaking—a blend of tradition and innovation that has been passed down through generations. This article explores the meticulous process of winemaking, from the selection of the finest grapes to the bottling of exquisite wines, and how modern techniques are seamlessly integrated with age-old traditions to produce flavors that captivate connoisseurs worldwide.</p></li>
                    <li className={s['article-item']}><h3 className={s['article-title']}>The Journey from Vine to Wine</h3><p className={s['article-text']}>The journey begins in the vineyard, where viticulturists combine their deep-rooted knowledge of the land with advanced agricultural practices to cultivate grapes that are full of flavor. Selection is paramount; only the best grapes make it to the next stage. This careful curation ensures that the wine's quality begins with its very source—the vine.</p></li>
                    <li className={s['article-item']}><h3 className={s['article-title']}>Fermentation: The Heart of Winemaking</h3><p className={s['article-text']}>Once harvested, the grapes undergo the critical process of fermentation. Here, tradition and science collide. Age-old methods, such as foot treading, are sometimes still employed to crush the grapes, though more often, modern mechanical presses are used for efficiency and hygiene. The fermentation process itself has been refined over centuries, with winemakers now able to monitor and control temperature and fermentation speed with precision, allowing for the consistent production of desired wine styles.</p></li>
                    <li className={s['article-item']}><h3 className={s['article-title']}>Aging: Time’s Influence on Flavor</h3><p className={s['article-text']}>Aging is another area where innovation has made its mark. While oak barrels are still favored for the unique flavors they impart, winemakers now also use stainless steel tanks and concrete vats to age their wines. This variety in aging techniques allows for a broader spectrum of wine profiles, enabling winemakers to experiment with and perfect their blends.</p></li>
                </ul>
                <div className={s['decor-photo-wrapper']}>
                    <img src={decorPhoto} alt="girl are drinking wine" />
                    <div className={s['decor-text-wrapper']}><p>Photo</p><span className={s['decor-point']}></span><span>Henri Cartier-Bresson</span></div>
                </div>
                <ul className={s['article-list']}>
                    <li className={s['article-item']}><h3 className={s['article-title']}>Bottling: The Final Touch</h3><p className={s['article-text']}>Bottling is the final step in a wine's journey from vine to consumer. Modern bottling lines are marvels of engineering, ensuring each bottle is filled, corked, sealed, and labeled with precision, without compromising the wine’s integrity. Yet, despite these technological advances, many wineries still choose to hand-label their most premium bottles, adding a personal touch to each one.</p></li>
                    <li className={s['article-item']}><h3 className={s['article-title']}>Sustainability: The Future of Winemakingottling: The Final Touch</h3><p className={s['article-text']}>As the world becomes increasingly aware of environmental issues, sustainability has become a significant focus in the winemaking process. Wineries are adopting eco-friendly practices, from organic farming methods that reduce pesticide use to solar-powered wineries that minimize carbon footprints. The industry's future lies in its ability to innovate in ways that preserve the planet while enhancing the wine-drinking experience.</p></li>
                    <li className={s['article-item']}><h3 className={s['article-title']}>Conclusion: A Timeless Craft</h3><p className={s['article-text']}>The art of winemaking stands at the intersection of tradition and innovation. It is a testament to the enduring passion of winemakers who respect their heritage while embracing the future. As technology continues to evolve, so too will the ways we create, age, and enjoy wine. Yet, at its core, winemaking remains an age-old art—a celebration of the earth's bounty and human ingenuity.</p></li>
                </ul>
            </div>
        </section>
    )
}