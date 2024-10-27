// import recipeFetch from '../features/recipeApi/recipesFetch';
// import React, {useState, useEffect} from 'react';

// const RecipeSearch = () => {
// 	const [searchTerm, setSearchTerm] = useState('');
// 	// const [recipes, setRecipes] = useState([]);
// 	// const [error, setError] = useState(null);

// 	const app_id = process.env.REACT_APP_EDAMAN_API_ID;
// 	const app_key = process.env.REACT_APP_EDAMAN_API_KEY;

// 	useEffect(() => {
// 		fecthRecipes();
// 	}, []);

// 	const fecthRecipes = async () => {
// 		try {
// 			const response = await fetch(
// 				`https://api.edamam.com/api/recipes/v2?type=user&q=${searchTerm}&${app_id}&${app_key}`
// 			);
// 			const data = await response.json();
// 			// setRecipes(response.data.hits);
// 			console.log(data);
// 		} catch (error) {
// 			console.error('Error fetching data:', error);
// 		}
// 	};

// <>
// 	<form className='search'>
// 		<h1> Recipe Search App</h1>
// 		<input placeholder='Search for recipes...' />
// 		<button type='submit'></button>
// 		{/*
// 		<RecipeSearch /> */}
// 	</form>
// 	<div>
// 		{recipes.map((recipe) => (
// 			<div key={recipe.recipe.uri}>
// 				<h3>{recipe.recipe.label}</h3>
// 				<img src={recipe.recipe.image} alt={recipe.recipe.label} />
// 			</div>
// 		))}
// 	</div>
// </>;
// };

// export default RecipeSearch;

// 	if (!response.ok) {
// throw new Error(`HTTP error! status: ${response.status}`);
// src/RecipeSearch.js

//DIFFERENT START TO PROJECT with axiosS...was react bootstrap...
// import React, {useState} from 'react';
// import axios from 'axios';
// import {Container, Form, Button, Card, Row, Col} from 'reacstrap';

// const RecipeSearch = () => {
// 	const [query, setQuery] = useState('');
// 	const [recipes, setRecipes] = useState([]);

// 	// const APP_ID = 'YOUR_APP_ID';
// 	// const APP_KEY = 'YOUR_APP_KEY';

// 	const app_id = process.env.REACT_APP_EDAMAN_API_ID;
// 	const app_key = process.env.REACT_APP_EDAMAN_API_KEY;

// 	const searchRecipes = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const response = await axios.get(
// 				`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
// 			);
// 			setRecipes(response.data.hits);
// 		} catch (error) {
// 			console.error('Error fetching recipes:', error);
// 		}
// 	};

// 	return (
// 		<Container>
// 			<h1 className='my-4'>Recipe Search</h1>
// 			<Form onSubmit={searchRecipes}>
// 				<Form.Group controlId='formBasicEmail'>
// 					<Form.Control
// 						type='text'
// 						placeholder='Enter recipe name'
// 						value={query}
// 						onChange={(e) => setQuery(e.target.value)}
// 					/>
// 				</Form.Group>
// 				<Button variant='primary' type='submit'>
// 					Search
// 				</Button>
// 			</Form>

// 			<Row className='mt-4'>
// 				{recipes.map((recipeData, index) => (
// 					<Col key={index} sm={12} md={6} lg={4}>
// 						<Card className='mb-4'>
// 							<Card.Img variant='top' src={recipeData.recipe.image} />
// 							<Card.Body>
// 								<Card.Title>{recipeData.recipe.label}</Card.Title>
// 								<Card.Text>
// 									<strong>Calories:</strong>{' '}
// 									{Math.round(recipeData.recipe.calories)}
// 									<br />
// 									<strong>Diet Labels:</strong>{' '}
// 									{recipeData.recipe.dietLabels.join(', ')}
// 								</Card.Text>
// 								<Button
// 									variant='primary'
// 									href={recipeData.recipe.url}
// 									target='_blank'
// 								>
// 									View Recipe
// 								</Button>
// 							</Card.Body>
// 						</Card>
// 					</Col>
// 				))}
// 			</Row>
// 		</Container>
// 	);
// };

// export default RecipeSearch;
// src/RecipeSearch.js
import React, {useState} from 'react';
import axios from 'axios';
import {
	Container,
	Row,
	Col,
	Input,
	Button,
	Card,
	CardBody,
	CardTitle,
	CardText,
} from 'reactstrap';
import CarrotTopImg from '../app/assets/img/CarrotTop.png';

const RecipeSearch = () => {
	const [query, setQuery] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(false);

	const APP_ID = process.env.REACT_APP_EDAMAN_API_ID;
	const APP_KEY = process.env.REACT_APP_EDAMAN_API_KEY;

	const fetchRecipes = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`https://api.edamam.com/search`, {
				params: {
					q: query,
					app_id: APP_ID,
					app_key: APP_KEY,
					to: 12, // limit results to 12
				},
			});
			console.log(response);
			setRecipes(response.data.hits);
		} catch (error) {
			console.error('Error fetching recipes:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = (e) => {
		e.preventDefault();
		fetchRecipes();
	};

	return (
		<Container>
			<Row>
				<h1 className='text-center my-4'>Recipe Search App</h1>

				<Col>
					<img
						style={{
							height: '14rem',
							width: '14rem',
						}}
						src={CarrotTopImg}
						alt='description'
					/>
				</Col>

				<Col>
					<form onSubmit={handleSearch}>
						<Input
							type='text'
							placeholder='Search for recipes...'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<Button
							type='submit'
							style={{width: '14rem', flex: 1}}
							color='primary'
							disabled={loading}
						>
							{loading ? 'Searching...' : 'Search'}
						</Button>
					</form>
				</Col>
			</Row>
			<Row>
				{recipes.map((item) => (
					<Col key={item.recipe.uri} sm='6' md='4'>
						<Card>
							<CardBody>
								<CardTitle tag='h5'>{item.recipe.label}</CardTitle>
								<CardText>
									<img
										src={item.recipe.image}
										alt={item.recipe.label}
										style={{width: '100%'}}
									/>
									<a
										href={item.recipe.url}
										target='_blank'
										rel='noopener noreferrer'
									>
										View Recipe
									</a>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default RecipeSearch;
