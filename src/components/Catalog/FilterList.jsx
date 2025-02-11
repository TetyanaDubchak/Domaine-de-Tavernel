import { useState } from 'react';
import s from '../../assets/components/Catalog/FilterList.module.scss';
import minus from '../../assets/images/catalog/minus-element.svg';
import plus from '../../assets/images/catalog/plus-element.svg';
import { Checkfilter } from './Checkfilter';

const colorWineList = [
    {
        type: "dry",
        value: 'dry',
        quality: 349,
    },
    {
        type: "Semi-dry",
        value: 'semiDry',
        quality: 249,
    },
    {
        type: "Semi-sweet",
        value: 'semiSweet',
        quality: 49,
    },
    {
        type: "Sweet",
        value: 'sweet',
        quality: 7,
    },
];
const yearsWineList = [
    {
        type: "2022",
        value: '2022',
        quality: 2,
    },
    {
        type: "2023",
        value: '2023',
        quality: 9,
    },
]


export const FilterList = () => {
    const [isColorClicked, setIsColorClicked] = useState(false);
    const [isYearClicked, setIsYearClicked] = useState(false);
    
    const handleColorOpen = (e) => {
        if (isColorClicked) {
             setIsColorClicked(false);
        }
        if (!isColorClicked) {
             setIsColorClicked(true);
        }
    };
    
    const handleYearOpen = (e) => {
        if (isYearClicked) {
             setIsYearClicked(false);
        }
        if (!isYearClicked) {
             setIsYearClicked(true);
        }
        };
    
    return (
            <ul className={s['button-list']}>
                <li className={s['button-item']}><button onClick={handleColorOpen} className={s['button-filter']} type='button'><p className={s['button-title']}>Color Wine</p><img src={isColorClicked? minus: plus} alt="button" /> </button>
                    {isColorClicked ? <Checkfilter list= {colorWineList}/>: ''}
                </li>
                <li className={s['button-item']}><button onClick={handleYearOpen} className={s['button-filter']} type='button'><p className={s['button-title']}>Vintage Year</p><img src={isYearClicked ? minus : plus} alt="button" /> </button>
                    {isYearClicked ? <Checkfilter list= {yearsWineList}/>: ''}
                </li>
                <li className={s['button-item']}><button className={s['button-filter']} type='button'><p className={s['button-title']}>Sweet <span>(2)</span></p> </button></li>
            </ul>
    )
}