import React from 'react'
// import Item from './components/item/item'

class Shoes extends React.Component{
	constructor(props){
		super(props)
		this.state ={
		}
		// this.handleList = this.handleList.bind(this)

	}
	
	// handleList(props){
	// 	console.log(this.props.star.data);
   //      if (this.props.star && this.props.star.data) {
   //          return Object.keys(this.props.star.data).map((key)=>
   //              <li key={key}>
   //                  <Link to={`/swapi/${key}`}>{key}</Link>
   //              </li>
   //          )
   //      } else {
   //           return <li>Data is loading</li>
   //      }
	// }

	componentDidMount(){
		this.props.getShoes();
	}

	render(){
		return(
			<div>
			{console.log(this.props.shoes.data.data)}
			take items
			</div>
		)
	}
}

export default Shoes