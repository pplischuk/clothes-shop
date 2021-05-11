import React from 'react'
import gh from './gh.png'
import linkedIn from './linkedIn.png'

import './footer.css'

function Footer() {
	return(
		<div className = 'footer'>
			<p></p>
			<h2>2021 &copy;</h2>
			<div className = 'links'>
			<a className  = 'github' href = 'https://github.com/pplischuk' target="_blank">
				<img src={gh} alt="github logo" />
			</a>
			<a href = 'https://www.linkedin.com/in/petro-plischuk-7ba4781a9/' target="_blank">
				<img src={linkedIn} alt="linkedIn logo" />
			</a>
			</div>
		</div>
	)
}

export default Footer