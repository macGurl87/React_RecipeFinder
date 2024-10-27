import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecipeBlog from './pages/RecipeBlog';
import RecipeSearch from './pages/RecipeSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='about' element={<AboutPage />} />
				<Route path='recipeblog' element={<RecipeBlog />} />
				<Route path='recipesearch' element={<RecipeSearch />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
