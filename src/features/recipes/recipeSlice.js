import RECIPES from '../../app/shared/RECIPES';
export const selectAllRecipes = () => {
	return RECIPES;
	// return {
	//     name:'recipe',
	//     initialState: {
	//         recipes: [],
	//         loading: false,
	//         error: null
	//     },
	//     reducers: {
	//         setLoading(state, action) {
	//             state.loading = action.payload;
	//         },
	//         setError(state, action) {
	//             state.error = action.payload;
	//         },
	//         setRecipes(state, action) {
	//             state.recipes = action.payload;
	//         },
	//         addRecipe(state, action) {
	//             state.recipes = [...state.recipes, action.payload];
	//         },
	//         updateRecipe(state, action) {
	//             const updatedRecipe = action.payload;
	//             state.recipes = state.recipes.map(recipe =>
	//                 recipe.id === updatedRecipe.id? updatedRecipe : recipe
	//             );
	//         },
	//         deleteRecipe(state, action) {
	// //             state.recipes = state.recipes.filter(recipe => recipe.id!== action.payload);
	// //         }
	//     },
};
