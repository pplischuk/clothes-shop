import {
	INPUT_ONCHANGE,
	GET_SHOES_REQUEST,
	GET_SHOES_SUCCESS,
	GET_SHOES_FAIL
	} from '../constants/constants'

export const inputOnChange = text => ({
	type: INPUT_ONCHANGE,
	text
})


export const getShoesSuccess = payload => ({
	type: GET_SHOES_REQUEST,
	payload
})

export const getShoesRequest = () => ({
	type: GET_SHOES_SUCCESS
})
export const getShoesError = payload => ({
	type: GET_SHOES_FAIL,
	payload
})

export const getShoes = (text) => {
	return dispatch => {
		 dispatch(getShoesRequest());
		 getShoes(text)
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