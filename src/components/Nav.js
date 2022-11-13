import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	const logo = 
	'https://ih1.redbubble.net/image.2379195894.2752/raf,750x1000,075,t,8DB3D2:e6f0370482.jpg'
	
	return ( 
		<nav>
			<Link to='/' className='logo'><img src={logo} alt=''/>MeMeBoi</Link>
			<ul>
				<li><Link to='/'>HOME</Link></li>
				<li><Link to='/lab'>LAB</Link></li>
				<li><Link to='/log'>LOG</Link></li>
			</ul>
		</nav>
	)
} 

export default Nav;