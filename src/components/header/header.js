import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
 } from "react-router-dom";
import Home from '../home/home'
import AccessoriesContainer from '../../redux/containers/AccessoriesContainer'
import ShoesContainer from '../../redux/containers/shoesContainer'
import ClothesContainer from '../../redux/containers/clothesContainer'
import ContactUs from '../contact/contact'
import Basket from '../basket/basket'
import Footer from '../footer/footer'
import moreAboutItem from '../../redux/containers/moreAboutItem'
import './header.css'


function Header(props){

	return (
		<>
		<Router>
			<div className='wrapper'>
				<div className = 'header'>
					<h2 className = 'logo'>FASHION</h2>
					<ul className = 'navList'>
						<li><Link to= '/'>Home</Link></li>
						<li><Link to= '/accessories'>Accessories</Link></li>
						<li><Link to= '/shoes'>Shoes</Link></li>	
						<li><Link to= '/clothes'>Clothes</Link></li>
						<li><Link to= '/contact'>Contact us</Link></li>
					</ul>
					<a href = 'basket' className = 'basket'>
					<img src ='https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png'
					alt = 'basket'/>
					</a>
				</div>
			</div>
			<Switch>
				<Route exact path = '/' component = {Home}/>
				<Route exact path = '/accessories' component = {AccessoriesContainer}/>
				<Route exact path = '/shoes' component = {ShoesContainer}/>
				<Route exact path = '/clothes' component = {ClothesContainer}/>
				<Route exact path = '/contact' component = {ContactUs}/>
				<Route exact path = '/basket' component = {Basket}/>
				
					<Route path = '/item/:id' component = {moreAboutItem}/>
			</Switch>
		</Router>
		<Footer />
		</>
	)
};


export default Header