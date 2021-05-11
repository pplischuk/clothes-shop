import React from 'react'
import {connect} from 'react-redux'
import {sortItems} from '../../redux/actions/filterActions'

import './filter.css'

class Filter extends React.Component{

	render(){
		return(
			<div className = 'filter'>
				<h2>Filter By</h2>
				<select
					value = {this.props.sort}
					// onChange = {(evt) => {
					// 	this.props.sortItems(
					// 		this.props.filteredItems,
					// 		evt.target.value
					// 	)
					// }}
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

const mapStateToProps = (state) => ({
	filteredItems: state.filteredItems,
	sort: state.sort,
	items: state.items
})

const mapDispatchToProps = (dispatch) => {
	return {
		sortItems: (items, sort) => dispatch(sortItems(items, sort))
	}
}

export default connect
(mapStateToProps, mapDispatchToProps)(Filter)