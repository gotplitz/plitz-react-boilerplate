import { Grid } from '@mui/material';
import React from 'react';

// Images
import FooterLogo from '../../Images/plitz-icon.png';
import PhoneNumbers from '../Extras/PhoneNumbers';

// Parts
import SocialNetworks from '../Extras/SocialNetworks';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<section>
				<Grid container justifyContent='center'>
					<Grid item xs={10} sm={11} md={8} className='column-container'>
						<div className='footer-logo-container'>
							<img
								src={FooterLogo}
								alt='Piston logo'
								width='100'
								height='100'
							/>
						</div>
						<div className='footer-closing'>
							<b>Plitz Corporation</b>
							<br />
							Toano, VA 23168
						</div>
						<div className='footer-sn'>
							<PhoneNumbers />
							<SocialNetworks />
						</div>
						<small>Plitz7 is a Plitz Corporation Brand</small>
					</Grid>
				</Grid>
			</section>
			<div className='credit-bar'>
				<p className='ft-credits'>
					Design and Dev by{' '}
					<a href='https://plitz7.com' target='_blank' rel='noreferrer'>
						Plitz7
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
