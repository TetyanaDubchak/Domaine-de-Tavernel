import s from "../../assets/styles/components/Main/Tradition.module.scss";

import tradition from "../../assets/images/main/tradition/tradition.png";
import tradition2x from "../../assets/images/main/tradition/tradition@2x.png";
import elegance from "../../assets/images/main/tradition/elegance.png";
import elegance2x from "../../assets/images/main/tradition/elegance@2x.png";
import exclusivity from "../../assets/images/main/tradition/exclusivity.png";
import exclusivity2x from "../../assets/images/main/tradition/exclusivity@2x.png";

export const Tradition = () => {
    return (
        <section className={s.wrapper}>
            <ul className={s.list}>
                <li>
                    <div className={s['wrapper-img']}>
                        <picture>
                            <source
                                srcSet={`${tradition} 1x, ${tradition2x} 2x`}
                            />
                            <img
                                src={tradition}
                                alt="tradition"
                            />
                        </picture>
                    <span></span></div>
                    <div className={s['wrapper-title']}>
                        <h2 className={s.title}>Tradition</h2>
                    </div>
                </li>
                <li>
                    <div className={s['wrapper-img']}>
                        <picture>
                            <source
                                srcSet={`${elegance} 1x, ${elegance2x} 2x`}
                            />
                            <img
                                src={elegance}
                                alt="elegance"
                            />
                        </picture>
                    <span></span></div>
                    <div className={s['wrapper-title']}>
                        <h2 className={s.title}>Elegance</h2>
                    </div>
                </li>
                <li>
                    <div className={s['wrapper-img']}>
                        <picture>
                            <source
                                srcSet={`${exclusivity} 1x, ${exclusivity2x} 2x`}
                            />
                            <img
                                src={exclusivity}
                                alt="exclusivity"
                            />
                        </picture>
                    <span></span></div>
                    <div className={s['wrapper-title']}>
                        <h2 className={s.title}>Exclusivity</h2>
                    </div>
                </li>
            </ul>
        </section>
    )
}