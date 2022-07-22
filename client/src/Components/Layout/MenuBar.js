import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Static Images
import Logo from '../../Images/plitz-web-and-app-development-firm-nav-logo.png';

// Parts
import MainMenu from '../Extras/MainMenu';

const MenuBar = ({ pages, subuno, subdos }) => {
	useEffect(() => {
		function paral() {
			var scrollPosition = window.pageYOffset;
			var navbar = document.getElementById('navbar');

			if (scrollPosition > 320) {
				navbar.classList.add('sticky');
			} else {
				navbar.classList.remove('sticky');
			}
		}

		document.addEventListener('scroll', paral, true);

		return () => {
			document.removeEventListener('scroll', paral, true);
		};
	});

	return (
		<Fragment>
			<div className='navigation-bar'>
				<section>
					<div className='logo-container'>
						<Link to='/'>
							<img src={Logo} alt='Plitz7 logo' width='250' height='92' />
						</Link>
					</div>
					<div className='menu-bar'>
						<MainMenu pages={pages} subuno={subuno} subdos={subdos} />
					</div>
				</section>
			</div>
			<div id='navbar' className='other-menu'>
				<section>
					<div className='logo-container'>
						<Link to='/'>
							<img src={Logo} alt='Plitz7 logo' width='190' height='70' />
						</Link>
					</div>
					<div
						className='menu-bar'
						style={{
							width: '100%',
							right: 0,
							marginTop: 0,
							padding: '2px 0',
						}}
					>
						<MainMenu pages={pages} subuno={subuno} subdos={subdos} />
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default MenuBar;
