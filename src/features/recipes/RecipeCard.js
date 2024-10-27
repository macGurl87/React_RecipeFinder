import {Card, CardTitle, CardBody, Button} from 'reactstrap';
// import {RECIPES} from '../../app/shared/RECIPES';
// import {Link} from 'react-router-dom';

const RecipeCard = (props, handleButtonClick) => (
	<>
		<Card
			className='my-2'
			style={{
				height: '500px',
				width: '18rem',
			}}
		>
			{/* Compare CardImg to Img and <img/> to <image> although i do believe it is the <img> tag in React and RNative */}
			<img
				top
				style={{
					height: '14rem',
					width: '100%',
				}}
				src={props.recipe.image}
				alt={props.recipe.name}
			/>

			<CardTitle
				className='card-title'
				style={{
					color: 'white',
					backgroundColor: 'black',
					opacity: '.5',
					textAlign: 'center',
				}}
			>
				{props.recipe.name}
			</CardTitle>

			<CardBody>
				{' '}
				{props.recipe.description}
				<Button style={{backgroundColor: '#000'}} size='sm' block='true'>
					Full Recipe
				</Button>
			</CardBody>
		</Card>
	</>
);

export default RecipeCard;

// The concept of "rendering" a component is more or less similar to the concept of invoking/calling a function, versus defining a component/function. It is when the component is actually used to create the application in the browser by putting its name inside < > tags, versus being defined to be used at a later time.

// The destructuring assignment syntax is a way to unpack properties from objects and arrays into discrete variables.
// To destructure an object in JavaScript, we list the keys in curly braces, and assign them to the object name.
