import food1 from '..//../../assets/images/product/recommended/pasta.png';
import food2 from '..//../../assets/images/product/recommended/mushrooms.png';
import food3 from '..//../../assets/images/product/recommended/fish.png'
import food4 from '..//../../assets/images/product/recommended/chees.png';
import food5 from '..//../../assets/images/product/recommended/meat.png';
import food6 from '..//../../assets/images/product/recommended/bacon.png';

import s from "./Description.module.scss";

export const Description = () => {

    return (
        <div className={s.wrapper}>
            <div className={s['extra-wrapper']}>
             <div className={s['wine-wrapper']}>
                <h3 className={s['wine-title']}>About Wine</h3>
                <p className={s['wine-text']}>The French Touch Cabernet Sauvignon is not just a wine; it's a journey to the heart of France with every sip. Its deep, rich flavor with notes of blackcurrant, cherry, and a hint of oak leaves an unforgettable impression. The refined aroma and long finish make this wine the perfect companion for elegant evenings. The French Touch is not just a wine; it's a work of art.</p>
            </div>
            <div className={s['taste-wrapper']}>
                <h3 className={s['taste-name']}>About taste</h3>
                <ul className={s['taste-list']}>
                    <li className={s['taste-item']}>
                        <p>Savoury</p>
                        <span className={s['taste-line']}></span>
                        <p>Fruty</p>
                    </li>
                    <li className={s['taste-item']}>
                        <p>sweet</p>
                        <span className={s['taste-line']}></span>
                        <p>dry</p>
                    </li>
                    <li className={s['taste-item']}>
                        <p>Vibrant</p>
                        <span className={s['taste-line']}></span>
                        <p>mellow</p>
                    </li>
                </ul>
            </div>
            </div>
           
            <div className={s['recomm-wrapper']}>
                <h3 className={s['recomm-title']}>Usage recommendations</h3>
                <ul className={s['recomm-list']}>
                    <li className={s['recomm-item']}>
                        <div className={s['food-wrapper']}>
                            <img src={food1 } alt="Pasta" />
                        </div>
                        <h4 className={s['food-title']}>
                            Pasta
                        </h4>
                    </li>
                    <li className={s['recomm-item']}>
                        <div className={s['food-wrapper']}>
                            <img src={food2 } alt="mushrooms" />
                        </div>
                        <h4 className={s['food-title']}>
                            mushrooms
                        </h4>
                    </li>
                    <li className={s['recomm-item']}>
                        <div className={s['food-wrapper']}>
                            <img src={food3 } alt="Fish" />
                        </div>
                        <h4 className={s['food-title']}>
                            Fish
                        </h4>
                    </li>
                    <li className={s['recomm-item']}>
                        <div className={s['food-wrapper']}>
                            <img src={food4 } alt="chees" />
                        </div>
                        <h4 className={s['food-title']}>
                            chees
                        </h4>
                    </li>
                    <li className={s['recomm-item']}>
                        <div className={s['food-wrapper']}>
                            <img src={ food5} alt="meat" />
                        </div>
                        <h4 className={s['food-title']}>
                            meat
                        </h4>
                    </li>
                    <li className={s['recomm-item']}>
                        <div className={s['food-wrapper']}>
                            <img src={ food6} alt="bacon" />
                        </div>
                        <h4 className={s['food-title']}>
                            bacon
                        </h4>
                    </li>
                </ul>
            </div>
        </div>  
    )
}