import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import Spinning from '../Extras/Spinning';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
	var settings = {
		className: 'banner-slider',
		dots: false,
		infinite: true,
		autoplay: true,
		fade: true,
		speed: 2000,
		autoplaySpeed: 7600,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
	};

	const [sliders, setSliders] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function GetData() {
			await axios.get('http://192.168.0.58:7007/api/sliders').then((res) => {
				setSliders(res.data);
				setLoading(false);
			});
		}

		return GetData();

		// eslint-disable-next-line
	}, []);

	return (
		<div className='banner-wrap'>
			{loading ? (
				<section>
					<Spinning />
				</section>
			) : (
				<Slider {...settings}>
					{sliders.length > 0 &&
						sliders
							.sort((a, b) => a.order - b.order)
							.map(
								(slide) =>
									slide.isLive && (
										<div key={slide._id} className='banner'>
											<div className='container'>
												<section>
													<div className='main-title'>
														<h2
															dangerouslySetInnerHTML={{
																__html: slide.title,
															}}
														></h2>
														{slide.subtitle && (
															<h3
																dangerouslySetInnerHTML={{
																	__html: slide.subtitle,
																}}
															></h3>
														)}
														{slide.details && slide.details !== '' && (
															<div
																className='details'
																dangerouslySetInnerHTML={{
																	__html: slide.details,
																}}
															></div>
														)}
														{slide.moredetails && (
															<div
																dangerouslySetInnerHTML={{
																	__html: slide.moredetails,
																}}
															></div>
														)}
														<div className='buttons-container'>
															{slide.buttons &&
																slide.buttons.length > 0 &&
																slide.buttons
																	.sort((a, b) => a.postion - b.postion)
																	.map((button) =>
																		button.link.startsWith('http') ? (
																			<a
																				key={button._id}
																				href={button.link}
																				target='_blank'
																				rel='noreferrer'
																				className={
																					button.primary
																						? 'plitz-button'
																						: 'plitz-button-sec'
																				}
																			>
																				<span>{button.label}</span>
																			</a>
																		) : (
																			<Link
																				key={button._id}
																				to={button.link}
																				className={
																					button.primary
																						? 'plitz-button'
																						: 'plitz-button-sec'
																				}
																			>
																				<span>{button.label}</span>
																			</Link>
																		)
																	)}
														</div>
													</div>
												</section>
											</div>

											<div className='slider-overlay'></div>

											<div className='banner-outer'>
												<picture>
													<source
														media='(max-width: 600px)'
														srcSet={`http://192.168.0.58:7007/${slide.featuredimg}`}
														alt={slide.title}
														width='600'
														height='400'
													/>
													<img
														src={`http://192.168.0.58:7007/${slide.featuredimg}`}
														alt={slide.title}
														width='1500'
														height='1000'
													/>
												</picture>
											</div>
										</div>
									)
							)}
				</Slider>
			)}
		</div>
	);
};

export default React.memo(HomeSlider);
