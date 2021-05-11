import { combineReducers } from 'redux'
import reducers from './reducers'
import accessoriesReducer from './reducersAccessories'
import clothesReducer from './reducersClothes';

export default combineReducers({
	shoes: reducers ,
	accessories: accessoriesReducer,
	clothes: clothesReducer,
})