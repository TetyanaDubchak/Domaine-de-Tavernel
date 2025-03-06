import { useState } from "react";
import { ChapterSlider } from "./ChapterSlider";
import { Characteristic } from "./Characteristic";
import { PhotoSlider } from "./PhotoSlider";
import { PriceContainer } from "./PriceContainer";
import { Title } from "./Title";
import s from "../../assets/styles/components/Product/ProductInfo.module.scss";

export const ProductInfo = () => {
    const [isLikeSet, setIsLikeSet] = useState(false);

    const handleSetLike = () => {
        setIsLikeSet(prev=>!prev)
    }

    return (
        <div className={s.wrapper}>
            <div className={s['extra-wrapper']}>
                <Title isLike={ isLikeSet} setLike={handleSetLike} />
                <PhotoSlider isLike={ isLikeSet} setLike={handleSetLike} />
                <div className={s['characteristic-wrapper']}>
                    <Characteristic/>
                </div>
                <PriceContainer />                
            </div>
            <ChapterSlider />
        </div>
        
    )
}