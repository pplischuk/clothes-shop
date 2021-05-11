export const sortItems = (item, sort) => (dispatch) => {
	const items = item.slice();
	if (sort !== "") {
		 items.sort((a, b) =>
					sort === "lowestprice"
					? a.price > b.price
					? 1
					: -1
					: sort === "highestprice"
					? a.price < b.price
					? 1
					: -1
					: sort === "atoz"
					? a.name > b.name
					? 1
					: -1
					: sort === "ztoa"
					? a.name < b.name
					? 1
					: -1
					: null
		 );
	} else {
		 items.sort((a, b) => (a.id > b.id ? 1 : -1));
	}
	// dispatch(orderItems(items, sort))
}