import React from 'react'

import Item from '../item/item'
import './clothes.css'

class Clothes extends React.Component{
	constructor(props){
		super(props)
		this.state ={
		}
		this.handleList = this.handleList.bind(this)

	}
	
	handleList(){
		const  goods = this.props.clothes.data.data

		if (this.props.clothes && this.props.clothes.data && this.props.clothes.data.data) {
			 return (
					goods.map((item, index) => <Item name = {item.name}
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
			<div className = 'items'>
					{this.handleList()}
			</div>
		)
	}
}

export default Clothes