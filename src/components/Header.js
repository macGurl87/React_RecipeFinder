import {useState} from 'react';
import React from 'react';

import {
	Navbar,
	NavbarBrand,
	Collapse,
	NavbarToggler,
	Nav,
	NavItem,
} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import FoodLogo from '../app/assets/img/FoodLogo_bgr.png';

const Header = () => {
	//Be aware that useState() must be implemented at the top level scope of the component. It cannot be used inside any code blocks such as for or if blocks, and it cannot be used inside the return statement.
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Navbar dark color='primary' sticky='top' expand='md'>
			<NavbarBrand className='ms-2' href='/'>
				<img src={FoodLogo} alt='dig in logo' className=' float-start img' />
				<br></br>
				<h1>Food Lover</h1>
			</NavbarBrand>
			<NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
			<Collapse isOpen={menuOpen} navbar>
				<Nav className='ms-auto' navbar>
					<NavItem>
						<NavLink className='nav-link' to='/'>
							{/* <i className='fa fa-home fa-lg' /> */}
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link' to='/about'>
							{/* <i className='fa fa-info fa-lg' /> */}
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link' to='/recipesearch'>
							{/* <i className='fa fa-list fa-lg' /> */}
							Xcipe Search
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link' to='/recipeblog'>
							{/* <i className='fa fa-address-card fa-lg' /> */}
							Xcipe Blog
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
