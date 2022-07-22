import React, { useEffect } from 'react';

const PagesTitle = ({ img, title }) => {
	useEffect(() => {
		function paral() {
			let theOffset = window.pageYOffset;
			let oneHalf = document.getElementById('pages-top');
			let limit = '';

			if (oneHalf !== null) {
				limit = oneHalf.offsetTop + oneHalf.offsetHeight;
			}

			if (theOffset > 100 && oneHalf !== null) {
				oneHalf.style.transform =
					'translateY(' + (-50 - (theOffset * 25) / limit) + '%)';
			}
		}

		document.addEventListener('scroll', paral, true);

		return () => {
			document.removeEventListener('scroll', paral, true);
		};
	}, [title]);

	return (
		<div className='internal-pages-title'>
			<section>
				<h1>{title}</h1>
			</section>
			<div className='top-overlay'></div>
			<div
				id='pages-top'
				className='internal-pages-bg'
				style={{
					backgroundImage: `url(http://192.168.0.58:7007/uploads${img})`,
				}}
			></div>
		</div>
	);
};

export default PagesTitle;
