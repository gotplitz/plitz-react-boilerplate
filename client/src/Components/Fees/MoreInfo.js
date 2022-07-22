import { Grid } from '@mui/material';
import React, { useEffect } from 'react';

import './fees.css';

// Static Images
import LongIsland from '../../Images/long-island-walking-brdige.jpg';
import { Link } from 'react-router-dom';

const MoreInfo = ({ img, title, content }) => {
	useEffect(() => {
		function paral() {
			let theOffset = window.pageYOffset;
			let getImage = document.getElementById('paral-img');
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
		<div className='home-main-content fees-secondary-info'>
			<section>
				<Grid container justifyContent='center'>
					<Grid item xs={10} sm={9} md={8}>
						<div className='image-container'>
							<img
								src={`http://192.168.0.58:7007/uploads${img}`}
								alt={img.replace('.jpg', '').replace(/-/g, ' ')}
								width='700'
								height='385'
							/>
						</div>
					</Grid>
				</Grid>
				<Grid
					container
					alignItems='center'
					spacing={3}
					style={{ margin: '50px 0' }}
				>
					<Grid item xs={12} sm={12} md={5}>
						<div className='fmc-title'>
							<h3>{title}</h3>
							<Link to='/' className='plitz-button'>
								Apply Now
							</Link>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={7}>
						<div
							className='hmc-body fmc-content'
							dangerouslySetInnerHTML={{ __html: content }}
						></div>
					</Grid>
				</Grid>
			</section>

			<div className='bg-overlay'></div>
			<div className='parallax-container'>
				<div id='paral-img' className='background'>
					<img
						className='background_image'
						src={LongIsland}
						alt='Long Island bridge'
					/>
				</div>
			</div>
		</div>
	);
};

export default MoreInfo;
