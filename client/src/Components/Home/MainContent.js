import { Grid } from '@mui/material';
import React, { useEffect } from 'react';

// Static Images
import LongIsland from '../../Images/long-island-bridge.jpg';

const MainContent = ({ img, title, content }) => {
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
		<div
			className='home-main-content'
			// style={{ backgroundImage: `url(${LongIsland})` }}
		>
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
				<Grid container alignItems='center' style={{ margin: '50px 0' }}>
					<Grid item xs={12} sm={12} md={6}>
						<h1>{title}</h1>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<div
							className='hmc-body'
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

export default MainContent;
