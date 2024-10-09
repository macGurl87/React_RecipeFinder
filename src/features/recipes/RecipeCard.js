import {
	Card,
	CardImg,
	CardTitle,
	CardImgOverlay,
	CardBody,
	Button,
} from 'reactstrap';
// import {RECIPES} from '../../app/shared/RECIPES';
// import {Link} from 'react-router-dom';

const RecipeCard = (props) => (
	<>
		<Card>
			<CardImg
				width='100%'
				// style={{
				// 	width: '18rem',
				// }}
				src={props.recipe.image}
				alt={props.recipe.name}
			/>
			<CardImgOverlay>
				<CardTitle
					style={{
						color: 'white',
						backgroundColor: 'black',
						opacity: '.5',
					}}
				>
					{props.recipe.name}
				</CardTitle>
			</CardImgOverlay>
			<CardBody> {props.recipe.description}</CardBody>
		</Card>
		<Button onClick='' block='true'>
			Full Recipe
		</Button>
	</>
);

export default RecipeCard;

// The concept of "rendering" a component is more or less similar to the concept of invoking/calling a function, versus defining a component/function. It is when the component is actually used to create the application in the browser by putting its name inside < > tags, versus being defined to be used at a later time.

// The destructuring assignment syntax is a way to unpack properties from objects and arrays into discrete variables.
// To destructure an object in JavaScript, we list the keys in curly braces, and assign them to the object name.
