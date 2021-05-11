import React from 'react'
import './scrollToTop.css'
import arrowToTop from './arrowToTop.png'

class ScrollToTop extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			isVisible:false
		}

		this.toggleVisability = this.toggleVisability.bind(this)
		this.scrollToTop = this.scrollToTop.bind(this)		
	}
	
	toggleVisability(){
		if(window.pageYOffset > 300) {
			this.setState({
				isVisible:true
			});
		} else {
			this.setState({
				isVisible:false
			})
		}
	}

	scrollToTop(){
		window.scrollTo({
			top:0,
			behavior:'smooth'
		})
	}

	componentDidMount(){
		let scrollComponent = this;
		document.addEventListener('scroll', function(e){
			scrollComponent.toggleVisability();
		})
	}

	render(){
		const { isVisible } = this.state
		return(
			<div className = 'scrollToTop'>
				{isVisible &&(
					<div onClick = {() => this.scrollToTop()}>
						<img src = {arrowToTop} alr = 'go to top' />
					</div>
				)}
			</div>
		)
	}
}

export default ScrollToTop