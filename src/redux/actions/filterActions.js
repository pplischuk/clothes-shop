import { FILTER_ITEM } from '../constants/filterConstants'

export const orderProducts=(data ,sort)=> {
	return {
		 type: FILTER_ITEM,
		 payload: {
			  sort: sort,
			  data: data,
		 }
	}
}



export const sortProducts = (items, sort) => (dispatch) => {
	const data = items.slice();
	if (sort !== "") {
		 data.sort((a, b) =>
					sort === "tolowest"
					? a.price > b.price
					? 1
					: -1
					: sort === "tohighest"
					? a.price < b.price
					? 1
					: -1
					: sort === "abc"
					? a.name > b.name
					? 1
					: -1
					: sort === "cba"
					? a.name < b.name
					? 1
					: -1
					: null
		 );
	} else {
		 data.sort((a, b) => (a.id > b.id ? 1 : -1));
	}
	dispatch(orderProducts(data, sort))
}