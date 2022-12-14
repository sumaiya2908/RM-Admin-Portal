import { Routes, Route, HashRouter } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.scss'
import { Navbar } from './components'
import { AddItem, Home, Resource } from './pages'

function App() {

	return (
		<HashRouter>
			<Navbar />
			<ToastContainer
			/>
			<div className='app'>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/resource/:id" element={<Resource />} />
					<Route path="/add-item" element={<AddItem />} />
				</Routes>
			</div>
		</HashRouter>

	)
}

export default App