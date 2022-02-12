import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Components/Main'
import LFW from './Components/LFW';
import LFH from './Components/LFH';
import ProjectCardEdit from './Components/ProjectCardEdit';
import WorkerCardEdit from './Components/WorkerCardEdit';
import Login from './Components/Login';
import User from './Components/User';
import About from './Components/About';

function App() {
  return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='/lfw' element={<LFW/>}/>
				<Route path='/lfh' element={<LFH/>}/>
				<Route path='/lfh/:id' element={<ProjectCardEdit />}/>
				<Route path='/lfw/:id' element={<WorkerCardEdit />}/>
				<Route path='/login' element={<Login/>}/>
        		<Route path='/user' element={<User/>}/>
				<Route path='/about' element={<About/>}/>
			</Routes>
		</div>
	);
}

export default App;
