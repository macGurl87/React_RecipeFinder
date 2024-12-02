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
			// The Edamam B2B API is accessed by sending HTTPS requests on specific URLs as described below. The base URL is https://api.edamam.com, and you obtain the full URL by appending request’s path to the base URL, for example, https://api.edamam.com/search. Found here: https://developer.edamam.com/edamam-docs-recipe-api-v1

			// const response = await fetch(`https://api.edamam.com/search`, { need to add async to make await code work with fetch
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

	//Button Submit on Form for Action to fetch recipes
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
						className='my-3'
						style={{
							height: '14rem',
							width: '14rem',
						}}
						src={CarrotTopImg}
						alt='pic of cool carrot'
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
							className='my-3'
							type='submit'
							style={{width: '14rem', flex: 1}}
							// change button color
							color='dark grey'
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
