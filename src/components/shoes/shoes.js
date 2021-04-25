import React from 'react'
import Item from '../item/item'

class Shoes extends React.Component{
	constructor(props){
		super(props)
		this.state ={
		}
		this.handleList = this.handleList.bind(this)

	}
	
	handleList(){
		const  goods = this.props.shoes.data.data

		console.log(goods);
		if (this.props.shoes && this.props.shoes.data && this.props.shoes.data.data) {
			 return (
					goods.map((item, index) => <Item name = {item.name}
						key = {index}
						brand = {item.brand}
						img = {item.img}
						price = {item.price}
						description = {item.description}
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
			<div>
				{console.log(this.props.shoes)}

					{this.handleList()}
			
			</div>
		)
	}
}

export default Shoes