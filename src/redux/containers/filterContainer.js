import { connect } from 'react-redux'
import { sortProducts } from '../../redux/actions/filterActions'
import Filter from '../../components/filter/filter'


const mapStateToProps = (state) => ({
	filteredProducts: state.filteredProducts,
	sort: state.sort,
	data: state.data
})

const mapDispatchToProps = (dispatch) => {
	return {
		sortProducts: (data, sort) => dispatch(sortProducts(data, sort))
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Filter)