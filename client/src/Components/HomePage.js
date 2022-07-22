import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

// CSS
import './Home/home.css';

// Parts
import ScrollToTop from './Extras/ScrollToTop';
import HomeSlider from './Home/HomeSlider';
import Spinning from './Extras/Spinning';
import ApplyContainer from './Home/ApplyContainer';
import MainContent from './Home/MainContent';
import CallToAction from './Layout/CallToAction';
import HomeProfile from './Home/HomeProfile';
import HomeTestimonials from './Home/HomeTestimonials';
import HomePosts from './Home/HomePosts';

const HomePage = () => {
	const [homecontent, setHomecontent] = useState({
		featuredimg: '',
		gallery: [],
		label: '',
		pagedetails: '',
		link: '',
		pagestatus: true,
		pagesubt: '',
		pagetitle: '',
		extraboxes: [],
	});
	const [loading, setLoading] = useState(true);

	const { featuredimg, pagetitle, pagedetails } = homecontent;

	useEffect(() => {
		const GetData = async () => {
			await axios.get('http://192.168.0.58:7007/api/pages').then((res) => {
				res.data.filter(
					(data) => data.label === 'Home' && setHomecontent(data),
					setLoading(false)
				);
			});
		};

		return GetData();

		// eslint-disable-next-line
	}, []);

	return (
		<div className='home-body'>
			<ScrollToTop />
			<HomeSlider />
			<ApplyContainer />
			{loading && homecontent !== {} ? (
				<section>
					<Spinning />
				</section>
			) : (
				<Fragment>
					<MainContent
						img={featuredimg}
						title={pagetitle}
						content={pagedetails}
					/>
					<CallToAction boxone={homecontent.extraboxes[0]} />
					<HomeProfile boxtwo={homecontent.extraboxes[1]} />
					<HomeTestimonials />
					<HomePosts />
				</Fragment>
			)}
		</div>
	);
};

export default HomePage;
