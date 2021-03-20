import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
	${({ theme }) => theme.mixins.flexCenter};
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: var(--background-dark);
	z-index: 99;

	.logo-wrapper {
		width: max-content;
		max-width: 280px;
		transition: var(--transition);
		opacity: ${(props) => (props.isMounted ? 1 : 0)};
		svg {
			display: block;
			width: 100%;
			height: 100%;
			margin: 0 auto;
			fill: none;
			user-select: none;
			#B {
				opacity: 0;
			}
		}
	}
`;

const Loader = ({ finishLoading }) => {
	const animate = () => {
		const loader = anime.timeline({
			complete: () => finishLoading()
		});

		loader
			.add({
				targets: '#logo path',
				strokeDashoffset: [ anime.setDashoffset, 0 ],
				easing: 'easeInOutQuart',
				duration: 2500,
				delay: (el, i) => i * 500,
				direction: 'alternate',
				loop: false
			})
			.add({
				targets: '#logo path',
				fill: '#DC3545',
				easing: 'linear',
				duration: 700,
				delay: 50
			})
			.add({
				targets: '.loader',
				duration: 500,
				easing: 'easeInOutQuart',
				opacity: 0,
				zIndex: -1
			});
	};

	const [ isMounted, setIsMounted ] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 10);
		animate();
		return () => clearTimeout(timeout);
	}, []);

	return (
		<StyledLoader className="loader" isMounted={isMounted}>
			<Helmet bodyAttributes={{ class: `hidden` }} />

			<div className="logo-wrapper">
				<IconLoader />
			</div>
		</StyledLoader>
	);
};

Loader.propTypes = {
	finishLoading: PropTypes.func.isRequired
};

export default Loader;
