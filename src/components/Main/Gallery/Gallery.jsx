import img1 from '../../../assets/images/main/gallery/img1.jpg';
import img2 from '../../../assets/images/main/gallery/img2.jpg';
import img3 from '../../../assets/images/main/gallery/img3.jpg';
import img4 from '../../../assets/images/main/gallery/img4.jpg';
import img5 from '../../../assets/images/main/gallery/img5.jpg';

import sprite from '../../../assets/images/sprite.svg';

export const Gallery = () => {
    return (
        <section>
            <div>
                <h2>Explore about our  gallery</h2>
                <div>
                    <ul>
                        <li><img width='163'
                                src={img1}
                                alt="Bottle of wine"
                            /></li>
                        <li><img width='163'
                                src={img2}
                                alt="Bottle of wine"
                            /></li>
                        <li><img width='163'
                                src={img3}
                                alt="Bottle of wine"
                            /></li>
                        <li><img width='163'
                                src={img4}
                                alt="Bottle of wine"
                            /></li>
                        <li><img width='163'
                                src={img5}
                                alt="Bottle of wine"
                            /></li>
                        <li><img width='163'
                                src={img1}
                                alt="Bottle of wine"
                            /></li>
                    </ul>
                    <button type="button">
                    <svg width='54' height='54'>
                        <use href={ sprite + '#icon-arrow-left'}></use>
                    </svg>
                </button>
                <div></div>
                <button type="button">
                    <svg width='54' height='54'>
                        <use href={ sprite + '#icon-arrow-right'}></use>
                    </svg>
                </button>
                </div>
            </div>
        </section>
    )
}