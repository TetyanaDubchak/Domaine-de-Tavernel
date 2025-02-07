import { useState } from "react";
import { ChapterSlider } from "../ChapterSlider/ChapterSlider";
import { Characteristic } from "../Characteristic/Characteristic";
import { PhotoSlider } from "../PhotoSlider/PhotoSlider";
import { PriceContainer } from "../PriceContainer/PriceContainer";
import { Title } from "../Title/Title";
import s from "./ProductInfo.module.scss";

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