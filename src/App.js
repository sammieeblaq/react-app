import React from 'react'
import './App.css'
import Product from "./components/Product"
import productData from "./vschoolProduct"

const App = () => {
	const productComponent = productData.map(item => <Product product={ item } />)
	
	return (
		<div>
			{ productComponent }
		</div>
	)
}

export default App;