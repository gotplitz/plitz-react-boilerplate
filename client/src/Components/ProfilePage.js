import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

// CSS
import './About/about.css';

// Parts
import ScrollToTop from './Extras/ScrollToTop';
import Spinning from './Extras/Spinning';
import MainContent from './About/MainContent';
import CallToAction from './Layout/CallToAction';
import PagesTitle from './Layout/PagesTitle';
import AboutProfile from './About/AboutProfile';
import AboutBoxes from './About/AboutBoxes';

const ProfilePage = () => {
	const [profilecontent, setProfilecontent] = useState({
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
	const [homebox, setHomebox] = useState({
		extraboxes: [],
	});
	const [loading, setLoading] = useState(true);

	const { featuredimg, pagetitle, pagedetails } = profilecontent;

	useEffect(() => {
		const GetData = async () => {
			await axios.get('http://192.168.0.58:7007/api/pages').then((res) => {
				res.data.filter(
					(data) => data.label === 'Profile' && setProfilecontent(data)
				);
				res.data.filter(
					(data) =>
						data.label === 'Home' &&
						setHomebox({
							extraboxes: data.extraboxes,
						}),
					setLoading(false)
				);
			});
		};

		return GetData();

		// eslint-disable-next-line
	}, []);

	return (
		<div className='all-body'>
			<ScrollToTop />
			{loading && profilecontent !== {} ? (
				<section>
					<Spinning />
				</section>
			) : (
				<Fragment>
					<PagesTitle title={pagetitle} img={featuredimg} />
					<MainContent subtitle={profilecontent.pagesubt} body={pagedetails} />
					<AboutProfile boxone={profilecontent.extraboxes[0]} />
					<AboutBoxes boxes={profilecontent.extraboxes} />
					<CallToAction boxone={homebox.extraboxes[0]} />
				</Fragment>
			)}
		</div>
	);
};

export default ProfilePage;
