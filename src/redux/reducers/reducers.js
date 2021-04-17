import { INPUT_ONCHANGE, GET_SHOES_REQUEST, GET_SHOES_SUCCESS, GET_SHOES_FAIL} from '../constants/constants'

const initialState = {
	data: [],
	isLoading: false,
	errors:[],
	text:''
}

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case 'INPUT_ONCHANGE':
		 return {
			...state,
			text: action.text
		 }
		case 'GET_SHOES_REQUEST':
		  return{
				...state,
				isLoading: true
		  }
		case 'GET_SHOES_REQUEST':
			return{
				...state,
				data:	action.payload,
				isLoading: false
			}
		case 'GET_SHOES_REQUEST':
			return{
				...state,
				errors: action.payload,
				isLoading: false
		  }
	  
	  default:
		 return state
	}
 }
 
 export default reducers