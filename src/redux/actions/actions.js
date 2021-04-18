import {
	GET_SHOES_REQUEST,
	GET_SHOES_SUCCESS,
	GET_SHOES_FAIL
	} from '../constants/constants';
import { getShoesAll } from '../../api/goods.js'

export const getShoesSuccess = payload => ({
	type: GET_SHOES_SUCCESS,
	payload
});

export const getShoesRequest = () => ({
	type: GET_SHOES_REQUEST
});

export const getShoesError = payload => ({
	type: GET_SHOES_FAIL,
	payload
})

export const getShoesThunk = () => {
	return dispatch => {
		 dispatch(getShoesRequest());
		 getShoesAll()
				.then(res => res.json())
				.then(res => {	
					dispatch(getShoesSuccess({data: res}));
				})
				.catch(error => {
					console.log(error);
					dispatch(getShoesError(error.message));
			  });
	};
};