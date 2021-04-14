import React from 'react'

function Item(props){
	return(
		<div className = 'item'>
			<div className = 'image'>{props.img}</div>
			<div className = 'title'>{props.brand} {props.name}</div>
			<div className='price'>{props.price}</div>
		</div>
	)
}

export default Item;