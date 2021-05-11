import React from 'react'
import { connect } from 'react-redux'
import More from '../../components/more/more'

const moreAboutItem = (current) => (
	<More
	name = {current.name}
	key = {current.id}
	current = {current}
	/>
)

const mapStateToProps = (state) => {
	return {
		 current: state.currentItem,
	};
};

export default connect(
	mapStateToProps
)(moreAboutItem)