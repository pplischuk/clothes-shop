import { 
	GET_ACCESSORIES_REQUEST,
	GET_ACCESSORIES_SUCCESS,
	GET_ACCESSORIES_FAIL
	} from '../constants/constantsAccessories'
// import {LOAD_CURRENT_ITEM} from '../constants/currentItemConstants'
import {FILTER_ITEM} from '../constants/filterConstants'
const initialState = {
	data: [],
	isLoading: false,
	errors:[],
	text:'',
	filteredProducts: [],
	sort:'',
	currentItem: null,
}

const accessoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ACCESSORIES_REQUEST:
		  return{
				...state,
				isLoading: true
		  }
		case GET_ACCESSORIES_SUCCESS:
			return{
				...state,
				data:action.payload,
				isLoading: false
			}
		case GET_ACCESSORIES_FAIL:
			return{
				...state,
				errors: action.payload,
				isLoading: false
		  }
		// case LOAD_CURRENT_ITEM:
		// 	return {
		// 		...state,
		// 		currentItem: action.item
		// 	}
		case FILTER_ITEM:
			return {
				...state,
				filteredProducts: action.payload.data,
				sort: action.payload.sort
			}
	  
	  default:
		 return state
	}
 }
 
 export default accessoriesReducer