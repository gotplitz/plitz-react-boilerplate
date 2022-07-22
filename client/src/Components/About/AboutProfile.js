import { Grid } from '@mui/material';
import React from 'react';

const AboutProfile = ({ boxone }) => {
	return (
		<div className='about-profile'>
			<section>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={12} md={4}>
						<div className='image-container about-profile-image'>
							<img
								src={boxone && `http://192.168.0.58:7007/uploads${boxone.img}`}
								alt={
									boxone && boxone.img.replace('.jpg', '').replace(/-/g, ' ')
								}
							/>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<div className='ap-content'>
							<h2>{boxone && boxone.subtitle}</h2>
							<div
								className='ap-content-text'
								dangerouslySetInnerHTML={{
									__html: boxone && boxone.bodybox,
								}}
							></div>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default AboutProfile;
