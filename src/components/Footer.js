import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
//Adjust Footer alignment to page
const Footer = () => {
	return (
		<footer className='site-footer'>
			<Container>
				<Row>
					<Col xs={{size: 4, offset: 1}} sm='2'>
						<h5>Links</h5>
						<ul className='list-unstyled'>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/recipesearch'>Xcipe Search</Link>
							</li>
							<li>
								<Link to='/recipeblog'>Xcipe Blog</Link>
							</li>
						</ul>
					</Col>
					<Col xs='6' sm='3' className='text-center'>
						<h5>Social</h5>
						{/* Make links OPEN A NEW TAB or WINDOW and not direct flow off of your page */}
						<a
							className='btn btn-social-icon btn-instagram'
							href='http://instagram.com/'
						>
							<i className='fa fa-instagram' />
						</a>{' '}
						{/* Make links OPEN A NEW TAB or WINDOW and not direct flow off of your page */}
						<a
							className='btn btn-social-icon btn-facebook'
							href='http://www.facebook.com/'
						>
							<i className='fa fa-facebook' />
						</a>{' '}
						{/* Make links OPEN A NEW TAB or WINDOW and not direct flow off of your page */}
						<a
							className='btn btn-social-icon btn-twitter'
							href='http://twitter.com/'
						>
							<i className='fa fa-twitter' />
						</a>{' '}
						{/* Make links OPEN A NEW TAB or WINDOW and not direct flow off of your page */}
						<a
							className='btn btn-social-icon btn-google'
							href='http://youtube.com/'
						>
							<i className='fa fa-youtube' />
						</a>
					</Col>
					<Col sm='4' className='text-center'>
						<a role='button' className='btn btn-link' href='tel:+12065551234'>
							<i className='fa fa-phone' /> 1-305-555-1234
						</a>
						<br />
						<a
							role='button'
							className='btn btn-link'
							href='mailto:notreal@notreal.co'
						>
							<i className='fa fa-envelope-o' /> digin@foodlover.com
						</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
