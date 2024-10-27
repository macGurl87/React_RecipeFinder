// import RecipeCard from '../features/recipes/RecipeCard';
import {RecipeList} from '../features/recipes/RecipesList';
import RECIPES from '../app/shared/RECIPES';
// import {useState} from 'react';

const RecipeBlog = ({recipe}) => {
	// const [butt, setButt] = useState(false);

	return <RecipeList recipes={RECIPES} />;
};

export default RecipeBlog;
