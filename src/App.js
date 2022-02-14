import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Components/Main'
import LFW from './Components/LFW';
import LFH from './Components/LFH';
import ProjectCard from './Components/ProjectCardEdit';
import WorkerCard from './Components/WorkerCardEdit';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Logout from './Components/Logout'
import Users from './Components/Users';
import UserCard from './Components/UserCard'
import About from './Components/About';

function App() {
	const [loggedIn, setLoggedIn] = useState()
	const [userInfo, setUserInfo] = useState(null)
	function handleSetLoggedIn(token) {
		localStorage.setItem('token', token)
		setLoggedIn(true)
	}
	function handleLogout(){
		return
	}
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
				<Route path='/about' element={<About/>}/>
			</Routes>
		</div>
	);
}

export default App;
