import {Container, Row, Col, Card} from 'reactstrap';
import myImg from '../app/assets/img/headshot.jpg';

const AboutPage = () => {
	return (
		<Container>
			<Row>
				<h1 className='text-center my-4'>Bonjour :) </h1>

				<Col sm='6' md='4'>
					<Card className='mb-4'>
						<img src={myImg} alt='description' />
					</Card>
				</Col>

				<Col style={{backgroundColor: '#FAF9F6'}}>
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
		</Container>
	);
};

export default AboutPage;
