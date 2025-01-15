import img1 from '../../../assets/images/main/areasPhoto/img1.jpg';

import btn1 from '../../../assets/images/main/arrow-left.svg';
import btn2 from '../../../assets/images/main/arrow-right.svg';

export const AreasPhoto = () => {
    return (
        <section>
            <ul>
                <li><img src={img1} alt="wine" /></li>
                <li><img src={img1} alt="wine" /></li>
                <li><img src={img1} alt="wine" /></li>
            </ul>
            <button><img src={btn1} alt="button" /></button>
            <button><img src={btn2} alt="button" /></button>
            <div></div>
        </section>
    )
}