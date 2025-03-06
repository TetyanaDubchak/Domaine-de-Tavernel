import { Hero } from "../components/Main/Hero";
import { Tradition } from "../components/Main/Tradition";
import { Products } from "../components/Main/Products";
import { AreasPhoto } from "../components/Main/AreasPhoto";
import { About } from "../components/Main/About";
import  {Gallery}  from "../components/Main/Gallery";
import { Field } from "../components/Main/Field";
import { Philosophy } from "../components/Main/Philosophy";
import { Information } from "components/Main/Information";
import { FormBlock } from "components/Auth/FormBlock";

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
            <Philosophy />
            <FormBlock/>
        </main>
    )
}

export default Main;