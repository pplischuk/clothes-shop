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
		console.log(this.props.shoes.data);
		if (this.props.shoes && this.props.shoes.data) {
			 return Object.keys(this.props.shoes.data).map((key)=>
				  <li key={key}>
						<span>{key}</span>
				  </li>
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
				{console.log(this.props.shoes.data.data)}
				<Item price = '100' img = "picture"/>
				<ul>
					{this.handleList()}
				</ul>
			</div>
		)
	}
}

export default Shoes