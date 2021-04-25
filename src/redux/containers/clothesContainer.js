import React from 'react'
import { connect } from 'react-redux'
import Clothes from '../../components/clothes/clothes'
import { getClothesThunk } from '../actions/actionsClothes'

const ClothesContainer = ({clothes, getClothes}) => (
	<Clothes
		clothes ={clothes}
		getClothes = {getClothes}
	/>	
)

const mapStateToProps = (state) => ({
	clothes: state.clothes
	//маємо доступ до будь якого значення з стейту
})

const mapDispatchToProps = dispatch => {
	return {
		getClothes: () => dispatch(getClothesThunk())
	}
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ClothesContainer)