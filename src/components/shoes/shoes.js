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
	
	render(){
		console.log(this.props.shoes.text)
		return(
			<div>
				
				<input 
				type = 'text'
				onChange ={this.handleChange}
				value = {this.props.shoes.texs}
				/>
				<div>
					{this.props.shoes.text}
				</div>
			</div>
		)
	}
}

export default Shoes