import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardTitle,
	CardText,
} from 'reactstrap';
import HarvestFestivalImg from '../app/assets/img/HarvestFestival_2023.JPG';

const AboutPage = () => {
	return (
		<Container>
			<Row>
				<h1 className='text-center my-4'>About Me</h1>

				<Col>
					<img
						style={{
							height: '18rem',
							width: '70%',
						}}
						src={HarvestFestivalImg}
						alt='description'
					/>
				</Col>

				<Col>
					<p>
						My name is Melissa Carmack and I am a new Gardener, new Food Blogger
						and new junior Web Developer. Wow, exciting when you write I out,
						right?!
					</p>
					<p>
						Anywho, Thank you so very much for visiting my page. Hopefully this
						app will let you explore the foodie inside of you. I would love to
						take you on your Foood Lover's adventure, so again Welcome!
					</p>
				</Col>
			</Row>
			<Row>
				<Col sm='6' md='4'>
					<Card>
						<CardBody>
							<CardTitle tag='h5'>Hello About Me</CardTitle>
							<CardText>
								{/* think about this link as a button with onclick with the same values??? */}
								{/* <a
									href={item.recipe.url}
									target='_blank'
									rel='noopener noreferrer'
								>
									View Recipe
								</a> */}
							</CardText>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutPage;
