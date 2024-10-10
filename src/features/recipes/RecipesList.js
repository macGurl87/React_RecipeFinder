import RecipeCard from './RecipeCard';
import RECIPES from '../../app/shared/RECIPES';
import {Col, Row, CardGroup} from 'reactstrap';

export const RecipeList = ({recipe}) => {
	return (
		<CardGroup className='recipe-card'>
			{RECIPES.map((recipe) => {
				return (
					// remove col and render rows ONLY
					<Col key={recipe.id}>
						<Row className='m-4'>
							<RecipeCard recipe={recipe} />
						</Row>
					</Col>
				);
			})}
		</CardGroup>
	);
};
