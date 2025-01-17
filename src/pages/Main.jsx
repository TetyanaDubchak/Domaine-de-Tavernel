import { Hero } from "../components/Main/Hero/Hero";
import { Tradition } from "../components/Main/Tradition/Tradition";
import { Products } from "../components/Main/Products/Products";
import { AreasPhoto } from "../components/Main/AreasPhoto/AreasPhoto";
import { About } from "../components/Main/About/About";
import  {Gallery}  from "../components/Main/Gallery/Gallery";
import { Field } from "../components/Main/Field/Field";
import { Philosophy } from "../components/Main/Philosophy/Philosophy";
import { Information } from "components/Main/Information/Information";

const Main = () => {
    
    return (
        <main>
            <h2>Main</h2>
            <Hero />
            <Tradition />
            <Products />
            <AreasPhoto />
            <About />
            <Information/>
            <Gallery />
            <Field />
            <Philosophy/>
        </main>
    )
}

export default Main;