import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss'
import { Navbar } from './components'
import { Home, Resource } from './pages'

function App() {

	return (
		<BrowserRouter>
			<Navbar />
			<div className='app'>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/resource/:id" element={<Resource />} />
				</Routes>
			</div>
		</BrowserRouter>

	)
}

export default App