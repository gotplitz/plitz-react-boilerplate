import { Grid } from '@mui/material';
import React from 'react';

import './fees.css';

const MainContent = ({ subtitle, body }) => {
	return (
		<div className='fees-main-content'>
			<section>
				<Grid container spacing={5} justifyContent='center'>
					<Grid item xs={10} sm={9} md={8}>
						<div className='amc-wrapper'>
							<h4>{subtitle}</h4>
						</div>
					</Grid>
					<Grid item xs={10} sm={9} md={8}>
						<div className='amc-wrapper'>
							<h2
								className='amc-content'
								dangerouslySetInnerHTML={{ __html: body }}
							></h2>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default MainContent;
