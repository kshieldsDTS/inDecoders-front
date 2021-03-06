import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/indecoders-logo.png'

function Nav({ loggedIn, handleLogout, userInfo }) {
  const [menuOpen, setMenuOpen] = useState(false)
  function toggleMenu(){
    setMenuOpen(!menuOpen)
  }
    return (
			<div className='nav-wrapper'>
				<div className='header'>
					<Link to='/'>
						<img className='logo' src={logo} alt='inDecoders logo'></img>
					</Link>
				</div>
				<div className='menu-wrapper'>
					<div className='menu-button' onClick={toggleMenu}>
						<div className='line-wrap'>
							<div className={!menuOpen ? 'line' : 'line top-left-open'}></div>
							<div className={!menuOpen ? 'line' : 'line top-right-open'}></div>
						</div>
						<div className='line-wrap'>
							<div
								className={!menuOpen ? 'line' : 'line middle-left-open'}></div>
							<div
								className={!menuOpen ? 'line' : 'line middle-right-open'}></div>
						</div>
						<div className='line-wrap'>
							<div
								className={!menuOpen ? 'line' : 'line bottom-left-open'}></div>
							<div
								className={!menuOpen ? 'line' : 'line bottom-right-open'}></div>
						</div>
					</div>
					<nav
						onClick={toggleMenu}
						className={menuOpen ? 'menu show-menu' : 'menu hide-menu'}>
						<ul className='link-list'>
							<Link to='/'>
								<li
									className={
										menuOpen
											? 'show-link link-one'
											: 'hidden-link hidden-link-one'
									}>
									<p>Home</p>
								</li>
							</Link>
							<Link to='/LFW'>
								<li
									className={
										menuOpen
											? 'show-link link-two'
											: 'hidden-link hidden-link-two'
									}>
									<p>Job Seekers</p>
								</li>
							</Link>
							<Link to='/LFH'>
								<li
									className={
										menuOpen
											? 'show-link link-three'
											: 'hidden-link hidden-link-three'
									}>
									<p>Projects</p>
								</li>
							</Link>
							<Link to='/users'>
								<li
									className={
										menuOpen
											? 'show-link link-four'
											: 'hidden-link hidden-link-four'
									}>
									<p>Users</p>
								</li>
							</Link>
							{loggedIn ? (
								<Link to='/'>
									<li
										cursor='pointer'
										onClick={handleLogout}
										className={
											menuOpen
												? 'show-link link-five'
												: 'hidden-link hidden-link-five'
										}>
										<p>Logout</p>
									</li>
								</Link>
							) : (
								<Link to='/login'>
									<li
										className={
											menuOpen
												? 'show-link link-five'
												: 'hidden-link hidden-link-five'
										}>
										<p>Login</p>
									</li>
								</Link>
							)}
							<Link to={`/profile/`}>
								<li
									className={
										menuOpen
											? 'show-link link-six'
											: 'hidden-link hidden-link-six'
									}>
									<p>{userInfo ? userInfo.username : null}</p>
								</li>
							</Link>
							<Link to='/signup'>
								<li
									className={
										menuOpen
											? 'show-link link-seven'
											: 'hidden-link hidden-link-seven'
									}>
									{userInfo ? null : <p>Sign Up</p>}
								</li>
							</Link>
							<Link to='/about'>
								<li
									className={
										menuOpen
											? 'show-link link-eight'
											: 'hidden-link hidden-link-eight'
									}>
									<p>About inDecoders</p></li>
							</Link>
						</ul>
					</nav>
				</div>
			</div>
		);
}

export default Nav;