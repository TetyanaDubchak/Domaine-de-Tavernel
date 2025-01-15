import { Link } from "react-router-dom";

export const Philosophy = () => {
    return ( 
        <section>
            <div>
                <h2>Company Philosophy</h2>
                <p>has been dedicated to the art of  to the he art</p>
                <p>For 36 years, our company has been dedicated to the art of winemaking, consistently delivering exceptional wines that reflect our passion and expertise. With a legacy of excellence, we take pride in crafting wines of the highest quality, making us a standout in the industry.</p>
                <div>
                    <Link to='/about'>See More</Link>
                </div>
            </div>
        </section>
    )
}