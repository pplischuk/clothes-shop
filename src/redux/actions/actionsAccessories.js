import {
	GET_ACCESSORIES_REQUEST,
	GET_ACCESSORIES_SUCCESS,
	GET_ACCESSORIES_FAIL
	} from '../constants/constantsAccessories';
import { getAccessoriesAll } from '../../api/goods.js'

export const getAccessoriesSuccess = payload => ({
	type: GET_ACCESSORIES_SUCCESS,
	payload
});

export const getAccessoriesRequest = () => ({
	type: GET_ACCESSORIES_REQUEST
});

export const getAccessoriesError = payload => ({
	type: GET_ACCESSORIES_FAIL,
	payload
})

export const getAccessoriesThunk = () => {
	return dispatch => {
		 dispatch(getAccessoriesRequest());
		 getAccessoriesAll()
				.then(res => res.json())
				.then(res => {	
					dispatch(getAccessoriesSuccess({data: res}));
				})
				.catch(error => {
					console.log(error);
					dispatch(getAccessoriesError(error.message));
			  });
	};
};