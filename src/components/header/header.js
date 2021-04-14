import react from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
 } from "react-router-dom";
import Home from '../home/home'
import Accessories from '../accessories/accessories'
import Shoes from '../shoes/shoes'
import Clothes from '../clothes/clothes'
import ContactUs from '../contact/contact'
import Basket from '../basket/basket'


function Header(){

	return (
		<Router>
			<ul>
				<li><a href = '/'>Home</a></li>
				<li><a href = '/accessories'>Accessories</a></li>
				<li><a href = '/shoes'>Shoes</a></li>
				<li><a href = '/clothes'>Clothes</a></li>
				<li><a href = '/contact'>Contact us</a></li>
			</ul>
			<a href = 'basket'>BASKET</a>
			<Switch>
				<Route exact path = '/' component = {Home}/>
				<Route exact path = '/accessories' component = {Accessories}/>
				<Route exact path = '/shoes' component = {Shoes}/>
				<Route exact path = '/clothes' component = {Clothes}/>
				<Route exact path = '/contact' component = {ContactUs}/>
				<Route exact path = '/basket' component = {Basket}/>

			</Switch>
		</Router>
	)
};

export default Header