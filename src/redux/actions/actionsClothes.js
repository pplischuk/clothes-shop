import {
	GET_CLOTHES_REQUEST,
	GET_CLOTHES_SUCCESS,
	GET_CLOTHES_FAIL
	} from '../constants/constantsClothes';
import { getClothesAll } from '../../api/goods.js'

export const getClothesSuccess = payload => ({
	type: GET_CLOTHES_SUCCESS,
	payload
});

export const getClothesRequest = () => ({
	type: GET_CLOTHES_REQUEST
});

export const getClothesError = payload => ({
	type: GET_CLOTHES_FAIL,
	payload
})

export const getClothesThunk = () => {
	return dispatch => {
		 dispatch(getClothesRequest());
		 getClothesAll()
				.then(res => res.json())
				.then(res => {	
					dispatch(getClothesSuccess({data: res}));
				})
				.catch(error => {
					console.log(error);
					dispatch(getClothesError(error.message));
			  });
	};
};