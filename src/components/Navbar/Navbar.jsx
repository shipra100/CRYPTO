import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import {CoinContext} from '../../context/CoinContext'
import { Link } from 'react-router-dom'

import Home from '../../assets/Home.png'
import Contact from '../../assets/Contact.png'
import Features from  '../../assets/Features.png'
import Blog from '../../assets/Blog.png'
const Navbar =() => {

  const{setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) =>{
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"});
        break;
    }
    case "inr": {
      setCurrency({name: "inr", symbol: "₹"});
      break;
  }
  default : {
    setCurrency({name: "usd", symbol: "$"});
    break;
  }
} 
  }
  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img  src={logo} alt=" " className='logo'/>
        </Link>
        <ul>
          <Link to={'/'} > <li>Home</li></Link>
         
          <Link  to={`/Feature`}><li>Features</li>
       </Link>
       <Link  to={`/Pricing`}><li>Pricing</li>
       </Link>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
       <select onChange={currencyHandler}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="inr">INR</option>
       </select>
       <button>Sign up <img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar