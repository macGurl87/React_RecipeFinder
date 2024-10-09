import {Card, CardImg, CardText, CardBody, Col} from 'reactstrap';

// const CampsiteDetail = ({recipe}) => {
// 	const {image, name} = recipe;

// 	return (
// 		<Col md='12' className='m-4'>
// 			<Card>
// 				<CardImg top src={image} alt={name} />
// 				<CardBody></CardBody>
// 			</Card>
// 		</Col>
// 	);
// };

// export default CampsiteDetail;
export const RecipeDetail = (recipe) => {
	const {image, name, description, } = recipe; //destructurings a variable name

	return (
		<Col md='5' className='m-1'>
			<Card>
				<CardImg top src={image} alt={name} />
				<CardBody>
					<CardText>{description}</CardText>
				</CardBody>
			</Card>
		</Col>
	);
};


