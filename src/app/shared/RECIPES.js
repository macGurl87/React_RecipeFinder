import jerkChickenImg from '../assets/img/JerkChicken.png';
import grilledImg from '../assets/img/GrilledCheese.jpg';
import homemadeRanchImg from '../assets/img/Ranch.jpg';
import jamaicanCabbageImg from '../assets/img/JamaicanCabbage.jpg';
import pizzaBooImg from '../assets/img/pizza-boo.jpg';
import chiliImg from '../assets/img/Chilli.jpg';
import burriitoImg from '../assets/img/BeefTips.jpg';
import chixImg from '../assets/img/ButterChix.jpg';

const RECIPES = [
	{
		id: 0,
		name: 'PizzaBoo',
		image: pizzaBooImg,
		cuisine: 'Italian/American',
		featured: false,
		description: 'Pizza Pizza! Boo..More Pizza Pizza, BOO :{}',
		ingredients: '',
		instruction_details: 'may or maynot be added here',
	},
	{
		id: 1,
		name: 'Jerk Chicken',
		image: jerkChickenImg,
		cuisine: 'jamaican',
		featured: false,
		description:
			'Discover how to make Jamaican jerk chicken that is fragrant, fiery hot (optional), and smoky all at once.',
		ingredients: '',
		instruction_details: 'may or maynot be added here',
	},
	{
		id: 2,
		name: 'Jamaican Steamed Cabbage',
		image: jamaicanCabbageImg,
		cusine: 'Jamaican',
		featured: false,
		description:
			'A nice crunchy partner to go along side your Jamaican dishes! Great palette cleanser!',
		ingredients:
			'...think about React Lists because you may not have manually create the info here for Unordered List details.',
		instruction_details: 'may or maynot be added here',
	},
	{
		id: 3,
		name: 'Grilled Cheese',
		image: grilledImg,
		cusine: 'American',
		featured: false,
		description:
			'Bubbly cheese topped with a heirloom tomato to make the most comforting grilled cheese.',
		ingredients:
			'...think about React Lists because you may not have manually create the info here for Unordered List details.',
		instruction_details: 'may or maynot be added here',
	},
	{
		id: 4,
		name: 'Homemade Ranch',
		image: homemadeRanchImg,
		cusine: 'American',
		featured: false,
		description:
			'Nothing beats the taste of homemade Ranch, NOTHING. And if you dont have all the ingrdients on hand you can always simply grab a packet of Hidden Valley, Dukes Mayo & buttermilk and still make a pretty decent one compared to the ones that are on your stores shelf.',
		ingredients:
			'1/2 cup mayonnaise, 1/2 cup sour cream, 1/2 cup buttermilk, 3/4 cup-1 teaspoon dill, continue later...think about React Lists because you may not have manually create the info here for Unordered List details.',
		instruction_details: 'may or maynot be added here',
	},
	{
		id: 5,
		name: 'Campground Chili',
		image: chiliImg,
		ecusine: 'keeping warm',
		featured: true,
		description:
			"You'll never want to leave this hidden gem of a recipe behind at your next campnight, scary movie night, or one pot meal night. Cheap ingredients each given the proper attention to come together in a mouthful of wonderful.",
	},
	{
		id: 6,
		name: 'Butter Chicken',
		image: chixImg,
		cusine: 'American',
		featured: false,
		description: 'One of Indias popular dishes',
		ingredients: '',
	},
	{
		id: 7,
		name: 'Beef tip burrito',
		image: burriitoImg,
		ecusine: 'Mexican',
		featured: true,
		description:
			'Simple  stewed beef tips wraped in a tortilla and smothered in a cheese sauce topped pico de gallo',
	},
];

export default RECIPES;
