import { Grid } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import React from 'react';

const AboutBoxes = ({ boxes }) => {
	let titlebox = boxes.filter((el) => el.subtitle === 'How It Works' && el);

	let finalboxes = boxes.slice(2, 12).map((el) => el);

	return (
		<div className='about-boxes'>
			<section>
				<Grid container spacing={5} justifyContent='center'>
					<Grid item xs={10} sm={9} md={8}>
						<div className='ab-title-section'>
							<div className='centered-title'>
								<h3>{titlebox[0].subtitle}</h3>
							</div>
							<h5
								dangerouslySetInnerHTML={{
									__html: titlebox[0].bodybox,
								}}
							></h5>
						</div>
					</Grid>
				</Grid>
				<Grid container justifyContent='center'>
					<Grid item xs={12} sm={12} md={8}>
						<Timeline position='alternate'>
							{finalboxes.map((step) => (
								<TimelineItem key={step._id}>
									<TimelineSeparator>
										<TimelineDot color='primary' />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<h4>{step.subtitle}</h4>
										<div
											className='ab-bodybox'
											dangerouslySetInnerHTML={{
												__html: step.bodybox,
											}}
										></div>
									</TimelineContent>
								</TimelineItem>
							))}
						</Timeline>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default AboutBoxes;
