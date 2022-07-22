import React from 'react';
import PhoneNumbers from '../Extras/PhoneNumbers';

import SocialNetworks from '../Extras/SocialNetworks';

const TopBar = () => {
	return (
		<div className='top-bar'>
			<section>
				<div className='top-container'>
					<div className='left-container'>
						<div className='featured-button'>
							<a
								href='https://go.thryv.com/site/plitz'
								target='_blank'
								rel='noreferrer'
							>
								Client Portal
							</a>
						</div>
					</div>

					<div className='right-container'>
						<PhoneNumbers />
						<SocialNetworks />
					</div>
				</div>
			</section>
		</div>
	);
};

export default TopBar;
