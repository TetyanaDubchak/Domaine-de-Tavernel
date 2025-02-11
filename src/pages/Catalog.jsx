import { Hero } from "components/CommonFiles/HeroPages";
import bg from "../assets/images/catalog/bg-filter.png";
import { Navigation } from "components/CommonFiles/NavigateTitle";
import { ProductsSection } from "components/Catalog/ProductsSection";

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