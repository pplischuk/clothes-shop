import { INPUT_ONCHANGE } from '../constants/constants'

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
	  
	  default:
		 return state
	}
 }
 
 export default reducers