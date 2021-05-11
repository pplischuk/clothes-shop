import React from 'react'

const More = (current) => {

	return(
		<div className = 'more'>
				<div className = 'title'>{current.brand} {current.name}</div>
			<div className = 'image'><img src = {current.img} alt = ''/></div>
			<div className='price'>${current.price}</div>
				<div className = 'btn'><button>Add to cart</button></div>
		</div>
	)
}


export default More