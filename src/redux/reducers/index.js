import { combineReducers } from 'redux'
import reducers from './reducers'
import accessoriesReducer from './reducersAccessories'

export default combineReducers({
	shoes: reducers ,
	accessories: accessoriesReducer
})