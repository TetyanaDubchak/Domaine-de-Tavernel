import { Hero } from "components/HeroPages/HeroPages";


import bg from '../assets/images/product/bg-img.png';
import { Navigation } from "components/NavigateTitle/NavigateTitle";
import { ProductInfo } from "components/Product/ProductInfo/ProductInfo";
import { AdditionalProducts } from "components/Product/AdditionalProducts/AdditionalProducts";

const Product = () => {
    
    return (
        <main>
            <Hero bg={bg} />
            <Navigation link1='catalog' page1='Shop All wine (1400)' page='The French Touch' />
            <ProductInfo />
            <AdditionalProducts/>
        </main>
    )
}

export default Product;