import React from 'react'
import {connect} from 'react-redux'
import Shoes from '../../components/shoes/shoes'
import { inputOnChange } from '../actions/actions'

const ShoesContainer = ({shoes, change}) => (
	<Shoes
		shoes ={shoes}
		change = {change}
	/>
)

const mapStateToProps = (state) => ({
	shoes: state.reducers
	//маємо доступ до будь якого значення з стейту
})

const mapDispatchToProps = dispatch => {
	return{
		change: text => dispatch(inputOnChange(text))

	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoesContainer)