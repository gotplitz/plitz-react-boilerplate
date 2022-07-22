import { Grid } from '@mui/material';
import React from 'react';

const MainContent = ({ subtitle, body }) => {
	return (
		<div className='about-main-content'>
			<section>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={12} md={5}>
						<div className='amc-wrapper'>
							<h2>{subtitle}</h2>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={7}>
						<div className='amc-wrapper'>
							<div
								className='amc-content'
								dangerouslySetInnerHTML={{ __html: body }}
							></div>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default MainContent;
