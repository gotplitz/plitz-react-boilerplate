import React, { useEffect, useRef, useState } from 'react';
import { Slant as Hamburger } from 'hamburger-react';
import { NavLink, Link } from 'react-router-dom';

// Materialize
import { IconButton } from '@mui/material';

import './MainMenu.css';

const MainMenu = ({ pages, subuno, subdos }) => {
	const [isOpen, setOpen] = useState(false);

	const wrapperRef = useRef(null);
	const subwrapperRef = useRef(null);

	const mobileMenuId = 'primary-search-account-menu-mobile';

	const renderMobileMenu = () => {
		const opeMenu = document.getElementById(
			'primary-search-account-menu-mobile'
		);
		if (opeMenu.classList.contains('opened-menu')) {
			opeMenu.classList.remove('opened-menu');
		} else {
			opeMenu.classList.add('opened-menu');
		}

		const stickyMob = document.querySelector(
			'.sticky #primary-search-account-menu-mobile'
		);

		if (stickyMob !== null && stickyMob.classList.contains('opened-menu')) {
			stickyMob.classList.remove('opened-menu');
			opeMenu.classList.remove('opened-menu');
		} else if (
			stickyMob !== null &&
			!stickyMob.classList.contains('opened-menu')
		) {
			stickyMob.classList.add('opened-menu');
			opeMenu.classList.remove('opened-menu');
		}
	};

	useEffect(() => {
		const stickyMob = document.querySelector(
			'.sticky #primary-search-account-menu-mobile'
		);
		const ms = document.querySelector(
			'#navbar #primary-search-account-menu-mobile'
		);

		if (stickyMob === null) {
			ms.classList.remove('opened-menu');
		}
	});

	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				const opeMenu = document.getElementById(
					'primary-search-account-menu-mobile'
				);

				opeMenu.classList.remove('opened-menu');
				setOpen(false);

				const stickyMob = document.querySelector(
					'.sticky #primary-search-account-menu-mobile'
				);

				// Mobile Sticky Submenus
				const openStickyOne = document.querySelector(
					'.sticky #mobile-sub-menu-uno'
				);
				const openStickyTwo = document.querySelector(
					'.sticky #mobile-sub-menu-dos'
				);

				if (stickyMob !== null) {
					stickyMob.classList.remove('opened-menu');
					opeMenu.classList.remove('opened-menu');
					openStickyOne.classList.remove('abierto-submenu');
					openStickyTwo.classList.remove('abierto-submenu');
				}

				var hamb = document.getElementsByClassName('hamburger-react');
				var hambdiv = document.querySelectorAll('.hamburger-react div');
				for (var i = 0; i < hamb.length; i++) {
					hamb[i].style.transform = 'none';
				}
				for (var x = 0; x < hambdiv.length; x++) {
					hambdiv[x].style.transform = 'none';
				}
			}
		}

		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	useEffect(() => {
		const handleClickOutsideSub = (event) => {
			if (
				subwrapperRef.current &&
				!subwrapperRef.current.contains(event.target)
			) {
				// Desktop Submenus
				const openSubMenuUno = document.getElementById('sub-menu-uno');
				const openSubMenuDos = document.getElementById('sub-menu-dos');

				// Mobile Submenus
				const openSubMenuOne = document.getElementById('mobile-sub-menu-uno');
				const openSubMenuTwo = document.getElementById('mobile-sub-menu-dos');

				// Desktop Sticky Submenus
				const openStickyUno = document.querySelector('.sticky #sub-menu-uno');
				const openStickyDos = document.querySelector('.sticky #sub-menu-dos');

				// Mobile Sticky Submenus
				const openStickyOne = document.querySelector(
					'.sticky #mobile-sub-menu-uno'
				);
				const openStickyTwo = document.querySelector(
					'.sticky #mobile-sub-menu-dos'
				);

				openSubMenuUno.classList.remove('abierto-submenu');
				openSubMenuDos.classList.remove('abierto-submenu');

				openSubMenuOne.classList.remove('abierto-submenu');
				openSubMenuTwo.classList.remove('abierto-submenu');

				if (openStickyUno !== null) {
					openStickyUno.classList.remove('abierto-submenu');
				} else if (openStickyOne !== null) {
					openStickyOne.classList.remove('abierto-submenu');
				} else if (openStickyDos !== null) {
					openStickyDos.classList.remove('abierto-submenu');
				} else if (openStickyTwo !== null) {
					openStickyTwo.classList.remove('abierto-submenu');
				}
			}
		};

		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutsideSub);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutsideSub);
		};
	});

	const closeMenu = () => {
		const closeMenu = document.getElementById(
			'primary-search-account-menu-mobile'
		);
		const stickyMob = document.querySelector(
			'.sticky #primary-search-account-menu-mobile'
		);
		const stickyMobSubone = document.querySelector(
			'.sticky #mobile-sub-menu-uno'
		);

		const stickyMobSubtwo = document.querySelector(
			'.sticky #mobile-sub-menu-dos'
		);

		closeMenu.classList.remove('opened-menu');

		if (stickyMob !== null) {
			stickyMob.classList.remove('opened-menu');
			stickyMobSubone.classList.remove('abierto-submenu');
			stickyMobSubtwo.classList.remove('abierto-submenu');
			closeMenu.classList.remove('opened-menu');
		}
		setOpen(false);
	};

	const celsubMenuU = (e) => {
		e.preventDefault();

		const openOne = document.getElementById('mobile-sub-menu-uno');
		const openTwo = document.getElementById('mobile-sub-menu-dos');

		if (openOne.classList.contains('abierto-submenu')) {
			openOne.classList.remove('abierto-submenu');
		} else {
			openOne.classList.add('abierto-submenu');
			openTwo.classList.remove('abierto-submenu');
		}

		const stickyMob = document.querySelector('.sticky #mobile-sub-menu-uno');

		const stickyMob2 = document.querySelector('.sticky #mobile-sub-menu-dos');

		if (stickyMob !== null && stickyMob.classList.contains('abierto-submenu')) {
			stickyMob.classList.remove('abierto-submenu');
		} else if (
			stickyMob !== null &&
			!stickyMob.classList.contains('abierto-submenu')
		) {
			stickyMob.classList.add('abierto-submenu');
			stickyMob2.classList.remove('abierto-submenu');
		}
	};

	const celsubMenuD = (e) => {
		e.preventDefault();

		const openOne = document.getElementById('mobile-sub-menu-dos');
		const openTwo = document.getElementById('mobile-sub-menu-uno');

		if (openOne.classList.contains('abierto-submenu')) {
			openOne.classList.remove('abierto-submenu');
		} else {
			openOne.classList.add('abierto-submenu');
			openTwo.classList.remove('abierto-submenu');
		}

		const stickyMob = document.querySelector('.sticky #mobile-sub-menu-dos');

		const stickyMob2 = document.querySelector('.sticky #mobile-sub-menu-uno');

		if (stickyMob !== null && stickyMob.classList.contains('abierto-submenu')) {
			stickyMob.classList.remove('abierto-submenu');
		} else if (
			stickyMob !== null &&
			!stickyMob.classList.contains('abierto-submenu')
		) {
			stickyMob.classList.add('abierto-submenu');
			stickyMob2.classList.remove('abierto-submenu');
		}
	};

	const hoverMenuU = () => {
		const sub1 = document.querySelector('.menu-container #sub-menu-uno');
		const sticky = document.querySelector('.sticky #sub-menu-uno');
		const sub2 = document.querySelector('.menu-container #sub-menu-dos');
		const sticky2 = document.querySelector('.sticky #sub-menu-dos');

		if (sticky && sticky !== null) {
			sticky.classList.add('abierto-submenu');
			sticky2.classList.remove('abierto-submenu');
		} else {
			sub1.classList.add('abierto-submenu');
			sub2.classList.remove('abierto-submenu');
		}
	};

	const hoverMenuD = () => {
		const sub2 = document.querySelector('.menu-container #sub-menu-dos');
		const sticky2 = document.querySelector('.sticky #sub-menu-dos');
		const sub1 = document.querySelector('.menu-container #sub-menu-uno');
		const sticky = document.querySelector('.sticky #sub-menu-uno');

		if (sticky2 && sticky2 !== null) {
			sticky2.classList.add('abierto-submenu');
			sticky.classList.remove('abierto-submenu');
		} else {
			sub2.classList.add('abierto-submenu');
			sub1.classList.remove('abierto-submenu');
		}
	};

	const NeedHov = (mitem) => {
		if (mitem.label === 'About') {
			return hoverMenuU;
		} else if (mitem.label === 'How It Works') {
			return hoverMenuD;
		} else {
			return closeWoutclick;
		}
	};

	const NeedClk = (e, mitem) => {
		if (mitem.label === 'About') {
			e.preventDefault();
			return hoverMenuU;
		} else if (mitem.label === 'How It Works') {
			e.preventDefault();
			return hoverMenuD;
		} else {
			return null;
		}
	};

	const NeedClkMob = (mitem) => {
		if (mitem.label === 'About') {
			return celsubMenuU;
		} else if (mitem.label === 'How It Works') {
			return celsubMenuD;
		} else {
			return closeMenu;
		}
	};

	const closeWoutclick = () => {
		const sub1 = document.getElementById('sub-menu-uno');
		const sub2 = document.getElementById('sub-menu-dos');

		const sticky = document.querySelector('.sticky #sub-menu-uno');
		const sticky2 = document.querySelector('.sticky #sub-menu-dos');

		if (sub1.classList.contains('abierto-submenu')) {
			sub1.classList.remove('abierto-submenu');
		}

		if (sub2.classList.contains('abierto-submenu')) {
			sub2.classList.remove('abierto-submenu');
		}

		if (sticky !== null && sticky.classList.contains('abierto-submenu')) {
			sticky.classList.remove('abierto-submenu');
		}

		if (sticky2 !== null && sticky2.classList.contains('abierto-submenu')) {
			sticky2.classList.remove('abierto-submenu');
		}
	};

	return (
		<div className='menu-container'>
			<div className='section-desktop'>
				<ul>
					{pages &&
						pages.length > 0 &&
						pages
							.sort((a, b) => new Date(a.date) - new Date(b.date))
							.map((mitem) => (
								<li key={mitem._id}>
									<NavLink
										exact
										to={
											mitem.label === 'About' ||
											mitem.label === 'Apply Now' ||
											mitem.label === 'Contact Us' ||
											mitem.label === 'How It Works'
												? ' '
												: mitem.label === 'Home'
												? '/'
												: `/${mitem.link}`
										}
										className={`top-menu-item ${
											mitem.label === 'About' || mitem.label === 'How It Works'
												? 'has-submenu'
												: ''
										}`}
										activeClassName='top-active'
										onMouseOver={NeedHov(mitem)}
										onClick={(e) => NeedClk(e, mitem)}
									>
										{mitem.label}
									</NavLink>

									{mitem && mitem.label === 'About' ? (
										<div id='sub-menu-uno' className='submenu-pop-up'>
											<ul onMouseLeave={closeWoutclick}>
												{subuno &&
													subuno.length > 0 &&
													subuno
														.sort((a, b) => new Date(b.date) - new Date(a.date))
														.map((sub) => (
															<li key={sub._id}>
																<Link
																	to={`/about-plitz/${sub.link}`}
																	onMouseDown={closeMenu}
																>
																	{sub.label}
																</Link>
															</li>
														))}
											</ul>
										</div>
									) : null}
									{mitem.label === 'How It Works' ? (
										<div id='sub-menu-dos' className='submenu-pop-up'>
											<ul onMouseLeave={closeWoutclick}>
												{subdos &&
													subdos.length > 0 &&
													subdos
														.sort((a, b) => new Date(b.date) - new Date(a.date))
														.map((sub) => (
															<li key={sub._id}>
																<Link
																	to={`/how-it-works/${sub.link}`}
																	onMouseDown={closeMenu}
																>
																	{sub.label}
																</Link>
															</li>
														))}
											</ul>
										</div>
									) : null}
								</li>
							))}
				</ul>
			</div>
			<div ref={wrapperRef} className='mobile-menu-wrap class-mobile'>
				<div
					id='primary-search-account-menu-mobile'
					className='menu-pop-up'
					ref={subwrapperRef}
				>
					<ul ref={subwrapperRef}>
						{pages &&
							pages.length > 0 &&
							pages
								.sort((a, b) => new Date(a.date) - new Date(b.date))
								.map((mitem) => (
									<li
										key={mitem._id}
										ref={subwrapperRef}
										className={
											mitem.label === 'About' || mitem.label === 'How It Works'
												? 'top-menu-item has-submenu'
												: 'top-menu-item'
										}
									>
										<NavLink
											exact
											to={
												mitem.label === 'About' ||
												mitem.label === 'Apply Now' ||
												mitem.label === 'Contact Us' ||
												mitem.label === 'How It Works'
													? ' '
													: mitem.label === 'Home'
													? '/'
													: `/${mitem.link}`
											}
											onClick={(e) =>
												mitem.label === 'About' ||
												mitem.label === 'How It Works'
													? e.preventDefault()
													: closeMenu
											}
											onTouchEnd={NeedClkMob(mitem)}
											className={
												mitem.label === 'About' ||
												mitem.label === 'How It Works'
													? 'mobile-submenu'
													: ''
											}
											ref={subwrapperRef}
										>
											{mitem.label}
										</NavLink>

										{mitem && mitem.label === 'About' ? (
											<div id='mobile-sub-menu-uno' className='submenu-pop-up'>
												<ul>
													{subuno &&
														subuno.length > 0 &&
														subuno
															.sort(
																(a, b) => new Date(b.date) - new Date(a.date)
															)
															.map((submob) => (
																<li key={submob._id}>
																	<Link
																		to={`/about-plitz/${submob.link}`}
																		onClick={closeMenu}
																		onTouchEnd={closeMenu}
																	>
																		{submob.label}
																	</Link>
																</li>
															))}
												</ul>
											</div>
										) : null}
										{mitem && mitem.label === 'How It Works' ? (
											<div id='mobile-sub-menu-dos' className='submenu-pop-up'>
												<ul>
													{subdos &&
														subdos.length > 0 &&
														subdos
															.sort(
																(a, b) => new Date(b.date) - new Date(a.date)
															)
															.map((submob) => (
																<li key={submob._id}>
																	<Link
																		to={`/how-it-works/${submob.link}`}
																		onClick={closeMenu}
																		onTouchEnd={closeMenu}
																	>
																		{submob.label}
																	</Link>
																</li>
															))}
												</ul>
											</div>
										) : null}
									</li>
								))}
					</ul>
				</div>

				<IconButton
					aria-label='show more'
					aria-controls={mobileMenuId}
					aria-haspopup='true'
					color='inherit'
					className='mobile-menu'
				>
					<Hamburger
						label='NAVIGATION'
						toggled={isOpen}
						toggle={setOpen}
						onToggle={(toggled) => {
							if (toggled) {
								renderMobileMenu();
							} else {
								closeMenu();
							}
						}}
					/>
				</IconButton>
			</div>
		</div>
	);
};

export default MainMenu;
