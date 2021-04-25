import React from 'react'
import Item from '../item/item'

import './accessories.css'

class Accessories extends React.Component{
	constructor(props){
		super(props)
		this.state ={
		}
		this.handleList = this.handleList.bind(this)

	}
	
	handleList(){
		const goods = this.props.accessories.data.data

		if (this.props.accessories
			&& this.props.accessories.data
			&& this.props.accessories.data.data) {
			 return (
				goods.map((item, index) => <Item name = {item.name}
				key = {index}
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
		this.props.getAccessories();
	}

	render(){
		return(
			<div className = 'items'>
				{this.handleList()}
			</div>
		)
	}
}

export default Accessories