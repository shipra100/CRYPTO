import React from 'react'
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Feature from './components/Features/Feature';
 import Pricing from './components/Pricing/Pricing';
import Coin from './pages/Home/Coin/Coin';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/Feature' element={<Feature/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Blog' element={<Blog/>}/>

        <Route path='/coin/:coinId' element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;