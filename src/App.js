import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route}  from 'react-router-dom';
import BestSeller from './components/BestSeller';
import BlogSection from './components/BlogSection';
import Bodyholder from './components/Bodyholder';
import CategorySection from './components/CategorySection';
import FooterMain from './components/FooterMain';
import Header from './components/Header';
import HoverImage from './components/HoverImage';
import MainHeader from './components/MainHeader';
import MainSponsors from './components/MainSponsors';
import SingleProduct from './components/singleproduct/SingleProduct';
import fullpage from './image/fullpage.jpg'


function App() {
  return (
    <div className="holder">
      <Router>
        <Header />   
        <MainHeader />
        <Switch>
          <Route exact path="/">
        {/* <Bodyholder  fullpage={fullpage} />
        <CategorySection />
        <HoverImage /> */}
        <SingleProduct />
         <BestSeller />
        </Route>
        <Route path="/blog">
        <BlogSection />
        </Route>
        </Switch>
        <MainSponsors />
        <FooterMain /> 
        </Router>
        </div>
  );
}

export default App;
