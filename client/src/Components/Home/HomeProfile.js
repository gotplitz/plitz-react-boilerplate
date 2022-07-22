import { Grid } from '@mui/material';
import React from 'react';

const HomeProfile = ({ boxtwo }) => {
	return (
		<div className='home-profile'>
			<section>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={12} md={6}>
						<div className='image-container profile-image'>
							<img
								src={boxtwo && `http://192.168.0.58:7007/uploads${boxtwo.eimg}`}
								alt={
									boxtwo && boxtwo.eimg.replace('.jpg', '').replace(/-/g, ' ')
								}
							/>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<div className='hp-content'>
							<h2>{boxtwo && boxtwo.subtitle}</h2>
							<div
								className='hp-conten-text'
								dangerouslySetInnerHTML={{
									__html: boxtwo && boxtwo.bodybox,
								}}
							></div>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default HomeProfile;
