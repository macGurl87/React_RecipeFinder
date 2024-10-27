import jerkChickenImg from '../assets/img/JerkChicken.png';
import harvestFestivalImg from '../assets/img/HarvestFestival_2023.JPG';
import homemadeRanchImg from '../assets/img/Ranch.jpg';
import jamaicanCabbageImg from '../assets/img/JamaicanCabbage.jpg';
import pizzaBooImg from '../assets/img/pizza-boo.jpg';
import pizzaImg from '../assets/img/Pizza.jpg';

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
		image: harvestFestivalImg,
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
		image: pizzaImg,
		ecusine: 'keeping warm',
		featured: true,
		description:
			"You'll never want to leave this hidden gem of a recipe behind at your next campnight, scary movie night, or one pot meal night. Cheap ingredients each given the proper attention to come together in a mouthful of wonderful.",
	},
];

export default RECIPES;
