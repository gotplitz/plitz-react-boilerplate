import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import HomePage from './Components/HomePage';
import ProfilePage from './Components/ProfilePage';
import Sitemap from './Sitemap';
import NotFound from './Components/Layout/NotFound';
import FeesPage from './Components/FeesPage';

const Routes = () => {
	return (
		<Switch>
			<Route
				exact
				path='/'
				component={HomePage}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				exact
				path='/about-us/profile'
				component={ProfilePage}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>
			<Route
				exact
				path='/how-it-works/front-end-dev'
				component={FeesPage}
				sitemapIndex='true'
				changefreq='monthly'
				priority='1'
			/>

			<Route exact path='/sitemap' component={Sitemap} />

			<Route path='*' component={NotFound} />
		</Switch>
	);
};

export default Routes;
