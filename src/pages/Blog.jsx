
import { Hero } from 'components/HeroPages/HeroPages';
import bg from '../assets/images/blogs/bg-grape.png';
import { Navigation } from 'components/NavigateTitle/NavigateTitle';
import { Articles } from 'components/Blog/Articles/Articles';

const Blog = () => {
    
    return (
        <main>
            <Hero bg={bg} /> 
            <Navigation page='Blog' page1='About Company' link1='about' />
            <Articles/>
        </main>
    )
}

export default Blog;