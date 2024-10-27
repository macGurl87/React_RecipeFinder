import {Card, CardImg, CardText, CardBody, Col} from 'reactstrap';
import React from 'react';

export const RecipeDetail = (recipe) => {
	const {image, name, description} = recipe; //destructurings a variable name

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
