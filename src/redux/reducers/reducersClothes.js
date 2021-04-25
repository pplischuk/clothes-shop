import { GET_CLOTHES_REQUEST, GET_CLOTHES_SUCCESS, GET_CLOTHES_FAIL} from '../constants/constantsClothes'

const initialState = {
	data: [],
	isLoading: false,
	errors:[],
	text:''
}

const clothesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CLOTHES_REQUEST:
		  return{
				...state,
				isLoading: true
		  }
		case GET_CLOTHES_SUCCESS:
			return{
				...state,
				data:	action.payload,
				isLoading: false
			}
		case GET_CLOTHES_FAIL:
			return{
				...state,
				errors: action.payload,
				isLoading: false
		  }
	  
	  default:
		 return state
	}
 }
 
 export default clothesReducer