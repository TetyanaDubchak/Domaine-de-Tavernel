import { Hero } from 'components/HeroPages/HeroPages';
import { Navigation } from 'components/NavigateTitle/NavigateTitle';

import bg from '../assets/images/blog_page/bg-grape.png';
import { Title } from 'components/BlogPage/Title/Title';
import { ArticleContent } from 'components/BlogPage/ArticleContent/ArticleContent';
import { OtherArticle } from 'components/BlogPage/OtherArticle/OtherArticle';

const BlogPage = () => {
    
    return (
        <main>
            <Hero bg={bg} /> 
            <Navigation page='About wine' page1='About Company' link1='about' page2='Blog' link2='blog' />
            <Title />
            <ArticleContent />
            <OtherArticle/>
        </main>
    )
}

export default BlogPage;