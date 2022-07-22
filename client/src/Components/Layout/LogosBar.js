import { Grid } from '@mui/material';
import React from 'react';

// Static Logos
import HuntingtonLogo from '../../Images/huntington-chamber-of-commerce.png';
import BbbLogo from '../../Images/BBB-Logo.png';
import IaAo from '../../Images/iaao-logo.png';

const LogosBar = () => {
	return (
		<div className='logos-bar'>
			<section>
				<Grid container spacing={5} justifyContent='center'>
					<div className='centered-title'>
						<h4>Logos</h4>
					</div>
				</Grid>
				<Grid container spacing={5} justifyContent='center'>
					<Grid item xs={10} sm={6} md={3}>
						<div className='logo-bar-container'>
							<img
								src={BbbLogo}
								alt='BBB Accredited Business logo'
								width='195'
								height='74'
							/>
						</div>
					</Grid>
					<Grid item xs={10} sm={6} md={3}>
						<div className='logo-bar-container'>
							<img
								src={HuntingtonLogo}
								alt='Huntington Chamber of Commerce logo'
								width='313'
								height='74'
							/>
						</div>
					</Grid>
					<Grid item xs={10} sm={6} md={3}>
						<div className='logo-bar-container'>
							<img src={IaAo} alt='IAAO Logo' width='162' height='74' />
						</div>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default LogosBar;
