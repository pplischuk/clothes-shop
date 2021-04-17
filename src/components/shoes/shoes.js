import React from 'react'
// import Item from './components/item/item'

class Shoes extends React.Component{
	constructor(props){
		super(props)
		this.state ={
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		this.props.change(e.target.value)
	}
	
	componentDidMount(){
		this.props.getShoes();
	}

	render(){
		console.log(this.props.data)
		return(
			<div>
			take items
			</div>
		)
	}
}

export default Shoes