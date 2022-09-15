import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
	const navigate = useNavigate();

	const ctx = useAuth();

	const handleClickLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		ctx.setIsLogged(false);
		navigate('/login');
	};
	return (
		<nav className='navbar navbar-expand-sm bg-info'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					Todo App
				</Link>
				<div className='collapse navbar-collapse justify-content-end'>
					<ul className='navbar-nav'>
						{localStorage.getItem('token') ? (
							<>
								<li className='nav-item'>
									<Link className='nav-link active' to='/'>
										Home
									</Link>
								</li>
								<li className='nav-item'>
									<a
										className='nav-link active'
										href='/'
										onClick={handleClickLogout}
									>
										Logout
									</a>
								</li>
							</>
						) : (
							<>
								<li className='nav-item'>
									<Link className='nav-link' to='/login'>
										Login
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/register'>
										Register
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
