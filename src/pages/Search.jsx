import { Hero } from "components/CommonFiles/HeroPages";
import { Navigation } from "components/CommonFiles/NavigateTitle";

import bg from '../assets/images/search/bg-search.png';
import { ResultSection } from "components/SearchPage/ResultSection";


const Search = () => {
    
    return (
        <main>
            <Hero bg={ bg} />
            <Navigation page1='Shop' link1='catalog' page='Search result' />
            <ResultSection/>
        </main>
    )
}

export default Search;