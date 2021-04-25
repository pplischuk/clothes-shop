import {
	BrowserRouter as Router,
	Switch,
	Route,
 } from "react-router-dom";
import Home from '../home/home'
import AccessoriesContainer from '../../redux/containers/AccessoriesContainer'
import ShoesContainer from '../../redux/containers/shoesContainer'
import ClothesContainer from '../../redux/containers/clothesContainer'
import ContactUs from '../contact/contact'
import Basket from '../basket/basket'
import './header.css'


function Header(){

	return (
		<Router>
			<div className='wrapper'>
				<div className = 'header'>
					<h2 className = 'logo'>FASHION</h2>
					<ul className = 'navList'>
						<li><a href = '/'>Home</a></li>
						<li><a href = '/accessories'>Accessories</a></li>
						<li><a href = '/shoes'>Shoes</a></li>	
						<li><a href = '/clothes'>Clothes</a></li>
						<li><a href = '/contact'>Contact us</a></li>
					</ul>
					<a href = 'basket' className = 'basket'><img src ='https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png' alt = 'basket'/></a>
				</div>
			</div>
			<Switch>
				<Route exact path = '/' component = {Home}/>
				<Route exact path = '/accessories' component = {AccessoriesContainer}/>
				<Route exact path = '/shoes' component = {ShoesContainer}/>
				<Route exact path = '/clothes' component = {ClothesContainer}/>
				<Route exact path = '/contact' component = {ContactUs}/>
				<Route exact path = '/basket' component = {Basket}/>
			</Switch>
		</Router>
	)
};

export default Header