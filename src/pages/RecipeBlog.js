// import RecipeCard from '../features/recipes/RecipeCard';
import {RecipeList} from '../features/recipes/RecipesList';
import RECIPES from '../app/shared/RECIPES';
// import {Button, Modal} from 'reactstrap';
// import {useState} from 'react';
import React from 'react';

const RecipeBlog = ({recipe}) => {
	return <RecipeList recipes={RECIPES} />;
};

export default RecipeBlog;
