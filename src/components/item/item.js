import React from 'react'
import {
	Link
 } from "react-router-dom";

import './item.css'

function Item(props, {onLoadItemClicked}){

	return(
			<div className = 'item'>
				<div className = 'title'>{props.brand} {props.name}</div>
				<div className = 'image'><img src = {props.img} alt = ''/></div>
				<div className='price'>${props.price}</div>
				<div className = 'btns'>
					<div className = 'btn'><button>Add to cart</button></div>
					<Link to={`/item/${props.id}`}>
						<div className = 'btn'><button onClick={onLoadItemClicked}>More info</button></div>
					</Link>
				</div>
			</div>
	)
}

export default Item;