import { Hero } from "components/HeroPages/HeroPages";
import bg from "../assets/images/catalog/bg-filter.png";
import { Navigation } from "components/NavigateTitle/NavigateTitle";
import { ProductsSection } from "components/Catalog/ProductsSection/ProductsSection";

const Catalog = () => {
    
    return (
        <main>
            <Hero bg={bg} />
            <Navigation page='Shop' details='All wine (1400)' />
            <ProductsSection/>
        </main>
    )
}

export default Catalog;