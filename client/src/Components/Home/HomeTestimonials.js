import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Parts
import Spinning from '../Extras/Spinning';
import Testimonials from '../Extras/Testimonials';

// Image Background
import ReadingReviews from '../../Images/woman-checking-reviews.jpg';

const HomeTestimonials = () => {
	const [testimonials, setTestiomonials] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const GetData = async () => {
			await axios
				.get('http://192.168.0.58:7007/api/testimonials')
				.then((res) => {
					setTestiomonials(res.data);
				});

			setLoading(true);
		};

		return GetData();

		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		function paral() {
			let theOffset = window.pageYOffset;
			let getImage = document.getElementById('paral-img-two');
			let limit = '';

			if (getImage !== null) {
				limit = getImage.offsetTop + getImage.offsetHeight;
			}

			if (theOffset > getImage.offsetTop && getImage !== null) {
				getImage.style.transform =
					'translateY(' + (-20 - (theOffset * 15) / limit) + '%)';
			}
		}

		document.addEventListener('scroll', paral, true);

		return () => {
			document.removeEventListener('scroll', paral, true);
		};
	}, []);

	return (
		<div className='home-testimonials'>
			<section>
				<Grid container alignItems='center'>
					<Grid item xs={12} sm={12} md={5}>
						{loading ? (
							<Spinning />
						) : (
							<div className='ht-container'>
								<div className='centered-title-light'>
									<h3>What our clients are saying about us</h3>
								</div>
								{testimonials && testimonials.length > 0 ? (
									<Testimonials testimonials={testimonials} />
								) : (
									<p style={{ textAlign: 'center' }}>
										This website doesn't have testimonials yet
									</p>
								)}
							</div>
						)}
					</Grid>
					<Grid item xs={12} sm={12} md={7}>
						<div className='ht-icon'>
							<i className='fal fa-quote-right'></i>
						</div>
					</Grid>
				</Grid>
			</section>
			<div className='bg-overlay'></div>
			<div className='parallax-container'>
				<div id='paral-img-two' className='background'>
					<img
						className='background_image'
						src={ReadingReviews}
						alt='Woman reading reviews'
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeTestimonials;
