import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';

import Routes from './Routes';

// Styles
import './App.css';
import TopBar from './Components/Layout/TopBar';
import Footer from './Components/Layout/Footer';
import Spinning from './Components/Extras/Spinning';
import MenuBar from './Components/Layout/MenuBar';
import LogosBar from './Components/Layout/LogosBar';

const App = () => {
	const pages = [
		{
			_id: 1,
			label: 'Home',
			link: '/',
		},
		{
			_id: 2,
			label: 'About',
			link: '',
		},
		{
			_id: 4,
			label: 'How It Works',
			link: '',
		},
		{
			_id: 5,
			label: 'Our Blog',
			link: 'blog',
		},
		{
			_id: 6,
			label: 'Contact Us',
			link: '#!',
		},
	];
	const subuno = [
		{
			_id: 1,
			label: 'Our Website',
			link: 'profile',
		},
		{
			_id: 2,
			label: 'About Plitz7',
			link: '/#!',
		},
	];
	const subdos = [
		{
			_id: 1,
			label: 'Front End Dev',
			link: 'front-end-dev',
		},
		{
			_id: 2,
			label: 'theDavid CMS',
			link: '/#!',
		},
		{
			_id: 3,
			label: 'Deployment',
			link: '/#!',
		},
	];

	return (
		<Router>
			<Helmet>
				<script
					src={`https://kit.fontawesome.com/${process.env.REACT_APP_FONTAWESOME}.js`}
					type='text/javascript'
					crossorigin='anonymous'
				></script>
			</Helmet>
			<TopBar />
			<MenuBar pages={pages} subuno={subuno} subdos={subdos} />
			<Suspense fallback={<Spinning />}>
				<Routes />
			</Suspense>
			<LogosBar />
			<Footer />
		</Router>
	);
};

export default App;
