import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import ProjectPages from './pages/ProjectPages';
import Projects from './pages/Projects';

function App() {
	return (
		<div className='App'>
			<Home />
			<Router>
				<Navbar />
				<Routes>
					<Route>
						<Route path='/' element={<Home />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/ProjectPages/:id' element={<ProjectPages />} />
						<Route path='/contacts' element={<Contacts />} />
					</Route>
				</Routes>
				<Footer />
			</Router>

			{/* <Home /> */}
			{/* <Projects /> */}
			{/* <ProjectPages /> */}
			{/* <Contacts /> */}
		</div>
	);
}

export default App;
