import React from 'react'
import {connect} from 'react-redux'
import Shoes from '../../components/shoes/shoes'
import { getShoes} from '../actions/actions'

const ShoesContainer = ({shoes, getShoes}) => (
	<Shoes
		shoes ={shoes}
		getShoes = {getShoes}
	/>
)

const mapStateToProps = (state) => ({
	reducers: state.reducers
	//маємо доступ до будь якого значення з стейту
})

const mapDispatchToProps = dispatch => {
	return{
		getShoes: (text) => dispatch(getShoes(text))
	}
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoesContainer)