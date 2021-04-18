import React from 'react'
import { connect } from 'react-redux'
import Shoes from '../../components/shoes/shoes'
import { getShoesThunk } from '../actions/actions'

const ShoesContainer = ({shoes, getShoes}) => (
	<Shoes
		shoes ={shoes}
		getShoes = {getShoes}
	/>	
)

const mapStateToProps = (state) => ({
	shoes: state.shoes
	//маємо доступ до будь якого значення з стейту
})

const mapDispatchToProps = dispatch => {
	return {
		getShoes: () => dispatch(getShoesThunk())
	}
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoesContainer)