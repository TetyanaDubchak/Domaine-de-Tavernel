import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components/Header/SharedLayout";
import { PaymentLayout } from "./components/Header/PaymentLayout";
import  Main  from "./pages/Main";
const About = lazy(() => import("./pages/About"));
const Search = lazy(() => import("./pages/Search"));
const Blog = lazy(() => import("./pages/Blog"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const Product = lazy(() => import("./pages/Product"));
const Term = lazy(() => import("./pages/Term"));

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route path='about' element={<About />}/>
        <Route path='gallery' element={<Gallery />} />
        <Route path='blog' element={<Blog/>} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='catalog/:product' element={<Product />} />
        <Route path='contacts' element={<Contact />} />
        <Route path='blog-page' element={<BlogPage/>}/> 
        <Route path='term' element={<Term />} />
        <Route path='search' element={<Search />} />
        <Route index element={<Main />} />
      </Route>
    <Route path='/payment' element={<PaymentLayout />}>
    </Route>
    </Routes>
   );
};
