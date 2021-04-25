import React from 'react'
import './item.css'

function Item(props){

	return(
		<div className = 'item'>
			<div className = 'title'>{props.brand} {props.name}</div>
			<div className = 'image'><img src = {props.img} alt = ''/></div>
			<div className='price'>${props.price}</div>
			<div className = 'btn'><button>add to cart</button></div>
		</div>
	)
}

export default Item;