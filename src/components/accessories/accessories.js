import React from 'react'
import Item from '../item/item'

class Accessories extends React.Component{
	constructor(props){
		super(props)
		this.state ={
		}
		this.handleList = this.handleList.bind(this)

	}
	
	handleList(){
		console.log(this.props.accessories.data);
		if (this.props.accessories && this.props.accessories.data) {
			 return Object.keys(this.props.accessories.data).map((key)=>
				  <li key={key}>
						<span>{key}</span>
				  </li>
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
			<div>
				{console.log(this.props.accessories)}
				<Item price = '500'/>
				<ul>
					{this.handleList()}
				</ul>
			</div>
		)
	}
}

export default Accessories