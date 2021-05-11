import React from 'react'

import Item from '../item/item'
import ScrollToTop from '../scrollToTop/scrollToTop'
import './clothes.css'

class Clothes extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			search:''
		}
		this.handleList = this.handleList.bind(this)
		this.handleChange = this.handleChange.bind(this)		
	}

	handleChange(e){
		this.setState({search: e.target.value})
	}
	
	handleList(){
		const  goods = this.props.clothes.data.data

		if (this.props.clothes && this.props.clothes.data && this.props.clothes.data.data) {
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
		this.props.getClothes();
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

export default Clothes