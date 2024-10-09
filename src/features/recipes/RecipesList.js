import RecipeCard from './RecipeCard';
import RECIPES from '../../app/shared/RECIPES';
import {Col, Row} from 'reactstrap';

export const RecipeList = ({recipe}) => {
	return (
		<div className='recipe-card'>
			{RECIPES.map((recipe) => {
				return (
					// remove col and render rows ONLY
					<Col key={recipe.id}>
						<Row md='4' className='m-4'>
							<RecipeCard recipe={recipe} />
						</Row>
						<Row md='2' className='m-5'>
							<RecipeCard recipe={recipe} />
						</Row>
					</Col>
				);
			})}
		</div>
	);
};
