import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						Dima P.
					</NavLink>

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink to='/' className='nav-list__link'>
								Home
							</NavLink>
						</li>

						{/* <li className='nav-list__item'>
							<a href='#' className='nav-list__link'>
								About
							</a>
						</li> */}

						<li className='nav-list__item'>
							<NavLink to='/projects' className='nav-list__link'>
								Portfolio
							</NavLink>
						</li>

						<li className='nav-list__item'>
							<NavLink to='/contacts' className='nav-list__link'>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
