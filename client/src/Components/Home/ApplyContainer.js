import { Grid, Link } from '@mui/material';
import React from 'react';

import ApplyForm from '../Extras/ApplyForm';

const ApplyContainer = () => {
	return (
		<div className='main-form-container'>
			<section>
				<Grid container justifyContent='flex-start'>
					<Grid item xs={12} sm={12} md={7}>
						<ApplyForm />
					</Grid>
					<Grid item xs={12} sm={12} md={5}>
						<div className='cta-container'>
							<h6>
								Have questions about grieving your taxes? We've got answers.
							</h6>
							<div className='button-container'>
								<Link to='/how-it-works/faqs' className='plitz-button'>
									Read our FAQs
								</Link>
							</div>
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default ApplyContainer;
