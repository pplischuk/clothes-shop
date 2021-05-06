import React from 'react'
import { connect } from 'react-redux'
import Accessories from '../../components/accessories/accessories'
import { getAccessoriesThunk } from '../actions/actionsAccessories'

const AccessoriesContainer = ({accessories, getAccessories}) => (
	<>
		<Accessories
			accessories ={accessories}
			getAccessories = {getAccessories}
		/>	
	</>
)

const mapStateToProps = (state) => ({
	accessories: state.accessories
	//маємо доступ до будь якого значення з стейту
})

const mapDispatchToProps = dispatch => {
	return {
		getAccessories: () => dispatch(getAccessoriesThunk())
	}
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AccessoriesContainer)