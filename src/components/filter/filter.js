import React from 'react'

import './filter.css'

class Filter extends React.Component{

	render(){
		return(
			<div className = 'filter'>
				<h2>Filter By</h2>
				<select
					value = {this.props.sort}
					onChange = {(event) => {
						this.props.sortProducts(
							this.props.filteredProducts,
							event.target.value
						)
					}}
				>
					<option value = ''>default</option>
					<option value = 'tolowest'>To Lowest Price</option>
					<option value = 'tohighest'>To Highest Price</option>
					<option value = 'abc'>A - Z</option>
					<option value = 'cba'>Z - A</option>
				</select>
			</div>
		)
	}
}

export default Filter;