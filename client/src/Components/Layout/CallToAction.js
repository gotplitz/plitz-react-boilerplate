import { Grid } from '@mui/material';
import React from 'react';

const CallToAction = ({ boxone }) => {
	return (
		<div className='main-cta'>
			<section>
				<Grid container justifyContent='center'>
					<Grid item xs={10} sm={9} md={8}>
						<div className='cta-wrapper'>
							<h5>{boxone && boxone.subtitle}</h5>
							<h3
								dangerouslySetInnerHTML={{
									__html: boxone && boxone.bodybox,
								}}
							></h3>
						</div>
						<div className='cta-icon-bg'>
							<i className='fal fa-hands-usd'></i>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default CallToAction;
