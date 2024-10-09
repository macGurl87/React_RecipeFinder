import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecipeBlog from './pages/RecipeBlog';
import {Routes, Route} from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='aboutpage' element={<AboutPage />} />
				<Route path='recipeblog' element={<RecipeBlog />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
