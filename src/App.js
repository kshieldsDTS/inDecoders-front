import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Components/Main'
import LFW from './Components/LFW';
import LFH from './Components/LFH';
import ProjectCard from './Components/ProjectCardEdit';
import WorkerCard from './Components/WorkerCardEdit';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Users from './Components/Users';
import UserCard from './Components/UserCard'
import Profile from './Components/Profile'
import About from './Components/About';
import axios from 'axios';
import api_url from './apiConfig';

function App() {
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false)
	const [userInfo, setUserInfo] = useState(null)
	function handleSetLoggedIn(token) {
		localStorage.setItem('token', token)
		setLoggedIn(true)
	}
	const getUserInfo = async () => {
		const response = await axios.get(`${api_url}users/me`, 
			{ headers: {
				'Authorization': `Token ${localStorage.getItem('token')}`
			}}
		)
		setUserInfo(response.data)
	}
	const handleLogout = async () => {
		const response = await axios.post(`${api_url}token/logout`, {}, 
			{ headers: {
				'Authorization': `Token ${localStorage.getItem('token')}`
			}}
		)
		if (response.status === 204) {

		}
		setLoggedIn(false)
		setUserInfo(null)
		localStorage.clear()
	}
	useEffect(() => {
		if (loggedIn) {
			getUserInfo();
		}
	}, [loggedIn])
  	return (
		<div className='App'>
			<Nav 
				loggedIn={loggedIn}
				handleLogout={handleLogout}
				userInfo={userInfo}	
			/>
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/lfw' element={<LFW/>}/>
				<Route path='/lfh' element={<LFH/>}/>
				<Route path='/lfh/:id' element={<ProjectCard />}/>
				<Route path='/lfw/:id' element={<WorkerCard />}/>
				<Route path='/signup' element={<SignUp />}/>
				<Route path='/login' element={<Login 
					handleSetLoggedIn={handleSetLoggedIn}/>}/>
        		<Route path='/users' element={<Users/>}/>
				<Route path='/users/:id' element={<UserCard/>}/>
				<Route path='/profile' element={<Profile />}/>
				<Route path='/about' element={<About/>}/>
			</Routes>
		</div>
	);
}

export default App;
