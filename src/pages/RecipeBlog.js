// import RecipeCard from '../features/recipes/RecipeCard';
import {RecipeList} from '../features/recipes/RecipesList';
import RECIPES from '../app/shared/RECIPES';

const RecipeBlog = ({recipe}) => {
	// return <RecipeCard recipe={RECIPES[0]} />;
	return <RecipeList recipes={RECIPES} />;
	// render RecipeDetails Component here just to see display of details such as recipe.instructions recipe.randomFact and/or recipe.prepTime until I create the Button (useEffect Hook) to render selection which also then WE SHOULD CREATE A SLICE FILE aka selectedRecipe with a parameter of (id) based on recipe clicked at position 0,1,2, or 3! DON'T FORGET useState...I THINK...HAHAHA ;?

	//My RecipeList is rendering as 1 column...I want to update it so that it is two columns and 2 rows..But will eventually have 8 -12 recipes displaying...(hardcoded)
};

export default RecipeBlog;
