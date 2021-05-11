import React from 'react'
import Item from '../item/item'
import ScrollToTop from '../scrollToTop/scrollToTop'
import './shoes.css'

class Shoes extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			search: ''
		}
		this.handleList = this.handleList.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		this.setState({search: e.target.value})
	}
	
	handleList(){
		const  goods = this.props.shoes.data.data
		
		if (this.props.shoes && this.props.shoes.data && this.props.shoes.data.data) {
			 return (
					goods.filter((val) => {
						if(this.state.search === ''){
							return val
						}else if(val.brand.toLowerCase().includes(this.state.search.toLowerCase())
						||val.brand.toUpperCase().includes(this.state.search.toUpperCase())){
							return val
						}
					}).map((item, index) => <Item name = {item.name}
						key = {index}
						brand = {item.brand}
						img = {item.img}
						price = {item.price}
						/>
					)
			 )
				
					
		} else {
			  return <li>Data is loading</li>
		}
	}

	componentDidMount(){
		this.props.getShoes();
	}


	render(){
		return(
			<div  className = 'itemPos'>
				<div className = 'search'>
						<input type = 'text'
							placeholder = 'Search...'
							onChange ={this.handleChange}
						/>
				</div>
				<div className = 'items'>
						{this.handleList()}
				</div>
				<ScrollToTop />
			</div>
		)
	}
}

export default Shoes