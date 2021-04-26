import React from 'react'
import { connect } from 'react-redux'

import './filter.css'

class Filter extends React.Component{
	constructor(){
		super()

		this.search = this.search.bind.this
	}

	search(){
		console.log('l;k')
	}

	render(){
		return(
			<div className = 'filter'>
				<form>
					<input type = 'text' placeholder = 'search' />
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	state
	//маємо доступ до будь якого значення з стейту
})

const mapDispatchToProps = dispatch => {
	return {
		
	}
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter)