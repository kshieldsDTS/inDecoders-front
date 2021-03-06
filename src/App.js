import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Dashboard from './Components/Dashboard'
import LFW from './Components/LFW';
import LFH from './Components/LFH';
import ProjectCardDetail from './Components/ProjectCardDetail';
import CreateProject from './Components/CreateProject'
import SeekerCardDetail from './Components/SeekerCardDetail';
import CreateSeeker from './Components/CreateSeeker'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Users from './Components/Users';
import UserCardDetail from './Components/UserCardDetail';
import Profile from './Components/Profile'
import About from './Components/About';
import axios from 'axios';
import api_url from './apiConfig';
import '@fontsource/roboto/300.css'

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
			}})
		setUserInfo(response.data)
	}
	const handleLogout = async () => {
		const response = await axios.post(`${api_url}token/logout`, {}, 
			{ headers: {
				'Authorization': `Token ${localStorage.getItem('token')}`
			}})
		if (response.status === 204) {
			setLoggedIn(false)
			setUserInfo(null)
			localStorage.clear()
		}}
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
				<Route path='/' element={
					<Dashboard 
					userInfo={userInfo}
					loggedIn={loggedIn} />}/>
				<Route path='/lfw' element={
					<LFW 
					userInfo={userInfo}
					loggedIn={loggedIn} />}/>
				<Route path='/createseeker' element={
					<CreateSeeker 
					userInfo={userInfo}
					loggedIn={loggedIn} />}/>
				<Route path='/createproject' element={
					<CreateProject
					userInfo={userInfo}
					loggedIn={loggedIn} />}/>
				<Route path='/lfh' element={
					<LFH
					userInfo={userInfo}
					loggedIn={loggedIn} />}/>
				<Route path='/lfh/:id' element={
					<ProjectCardDetail 
					userInfo={userInfo}
					loggedIn={loggedIn}/>}/>
				<Route path='/lfw/:id' element={
					<SeekerCardDetail 
					userInfo={userInfo}
					loggedIn={loggedIn}/>}/>
				<Route path='/signup' element={<SignUp />}/>
				<Route path='/login' element={<Login 
					handleSetLoggedIn={handleSetLoggedIn}/>}/>
        		<Route path='/users' element={
					<Users
					userInfo={userInfo}
					loggedIn={loggedIn}/>}/>
				<Route path='/users/:id' element={
					<UserCardDetail
					userInfo={userInfo}
					loggedIn={loggedIn}/>}/>
				<Route path='/profile/' element={
					<Profile 
					userInfo={userInfo}
					loggedIn={loggedIn}/>}/>
				<Route path='/about' element={<About/>}/>
			</Routes>
		</div>
	);
}

export default App;
