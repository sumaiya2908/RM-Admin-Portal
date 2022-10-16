import React from 'react';
import './Navbar.scss'
import Logo from '../../assets/NW-logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<Link to="/"><img src={Logo} /></Link>
		</div>
	)
}

export default Navbar