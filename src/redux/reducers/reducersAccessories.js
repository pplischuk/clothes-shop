import { 
	GET_ACCESSORIES_REQUEST,
	GET_ACCESSORIES_SUCCESS,
	GET_ACCESSORIES_FAIL
	} from '../constants/constantsAccessories'
import {LOAD_CURRENT_ITEM} from '../constants/currentItemConstants'
const initialState = {
	data: [],
	isLoading: false,
	errors:[],
	text:'',
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
		case LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.item
			}
	  
	  default:
		 return state
	}
 }
 
 export default accessoriesReducer