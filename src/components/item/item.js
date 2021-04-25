import React from 'react'
// import 'item.css'

function Item(props){

	return(
		<div className = 'item'>
			<div className = 'image'><img src = {props.img} alt = ''/></div>
			<div className = 'title'>{props.brand} {props.name}</div>
			<div className='price'>{props.price}</div>
			<p className = 'description'>{props.description}</p>
		</div>
	)
}

export default Item;