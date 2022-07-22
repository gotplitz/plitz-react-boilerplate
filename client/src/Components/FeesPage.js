import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

// CSS
import './About/about.css';

// Parts
import ScrollToTop from './Extras/ScrollToTop';
import Spinning from './Extras/Spinning';
import MainContent from './Fees/MainContent';
import CallToAction from './Layout/CallToAction';
import PagesTitle from './Layout/PagesTitle';
import MoreInfo from './Fees/MoreInfo';

const FeesPage = () => {
	const [feescontent, setFeescontent] = useState({
		featuredimg: '',
		gallery: [],
		label: '',
		pagedetails: '',
		link: '',
		pagestatus: true,
		pagesubt: '',
		pagetitle: '',
		extraboxes: [],
		gallery: [],
	});
	const [homebox, setHomebox] = useState({
		extraboxes: [],
	});
	const [loading, setLoading] = useState(true);

	const { featuredimg, pagetitle, pagedetails, pagesubt } = feescontent;

	useEffect(() => {
		const GetData = async () => {
			await axios.get('http://192.168.0.58:7007/api/pages').then((res) => {
				res.data.filter(
					(data) => data.label === 'Fees' && setFeescontent(data)
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
			{loading && feescontent !== {} ? (
				<section>
					<Spinning />
				</section>
			) : (
				<Fragment>
					<PagesTitle title={pagetitle} img={featuredimg} />
					<MainContent
						subtitle={feescontent.extraboxes[0].subtitle}
						body={feescontent.extraboxes[0].bodybox}
					/>
					<MoreInfo
						img={feescontent.gallery[0].fileName}
						title={pagesubt}
						content={pagedetails}
					/>

					<CallToAction boxone={homebox.extraboxes[0]} />
				</Fragment>
			)}
		</div>
	);
};

export default FeesPage;
