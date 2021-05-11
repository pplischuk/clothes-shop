import React from 'react'
import { connect } from 'react-redux'
import Accessories from '../../components/accessories/accessories'
import { getAccessoriesThunk } from '../actions/actionsAccessories'
import {loadCurrentItem} from '../actions/actionsLoadItem'

const AccessoriesContainer = ({accessories, getAccessories}) => (
	<>
		<Accessories
			accessories ={accessories}
			getAccessories = {getAccessories}
			onLoadItemClicked={() => this.props.loadCurrentItem(accessories)}
		/>	
	</>
)

const mapStateToProps = (state) => ({
	accessories: state.accessories
	//маємо доступ до будь якого значення з стейту
})

const mapDispatchToProps = dispatch => {
	return {
		getAccessories: () => dispatch(getAccessoriesThunk()),
		loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
	}
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AccessoriesContainer)