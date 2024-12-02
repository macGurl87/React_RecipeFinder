import {useState} from 'react';
import {
	Button,
	Card,
	CardBody,
	CardTitle,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';

const RecipeCard = (props, ...args) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<>
			<Card
				className='my-2'
				style={{
					height: '500px',
					width: '18rem',
				}}
			>
				<img
					top
					style={{
						height: '14rem',
						width: '100%',
					}}
					alt='description'
					src={props.recipe.image}
				></img>
				<CardTitle
					className='card-title my-1'
					style={{
						color: 'white',
						backgroundColor: 'blue',
						opacity: '.5',
						textAlign: 'center',
					}}
				>
					{props.recipe.name}
				</CardTitle>

				<CardBody> {props.recipe.description}</CardBody>
				<Button
					style={{backgroundColor: '#000'}}
					size='sm'
					block='true'
					onClick={toggle}
				>
					Full Recipe
				</Button>
			</Card>

			<Modal isOpen={modal} xl toggle={toggle} {...args}>
				<img
					top
					scrollable
					style={{
						height: '22rem',
						width: '100%',
					}}
					alt='description'
					src={props.recipe.image}
				></img>
				<ModalHeader toggle={toggle}>{props.recipe.name}</ModalHeader>
				<ModalBody>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</ModalBody>

				<ModalFooter>
					<Button color='primary' onClick={toggle}>
						Save Recipe
					</Button>{' '}
					<Button color='secondary' onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default RecipeCard;
