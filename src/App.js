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

function App() {
  return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Main/>}></Route>
				<Route path='/lfw' element={<LFW/>}></Route>
				<Route path='/lfh' element={<LFH/>}></Route>
				<Route path='/lfh/:id' element={<ProjectCardEdit />}></Route>
				<Route path='/lfw/:id' element={<WorkerCardEdit />}></Route>
				<Route path='/login' element={<Login/>}></Route>
        		<Route path='/user' element={<User/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
