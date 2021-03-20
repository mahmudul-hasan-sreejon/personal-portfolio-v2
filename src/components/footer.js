import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
	${({ theme }) => theme.mixins.flexCenter};
	flex-direction: column;
	height: auto;
	min-height: 70px;
	padding: 15px;
	text-align: center;
`;

const StyledSocialLinks = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
		width: 100%;
		max-width: 270px;
		margin: 0 auto 10px;
		color: var(--text-light);
	}

	ul {
		${({ theme }) => theme.mixins.flexBetween};
		padding: 0;
		margin: 0;
		list-style: none;

		a {
			&:hover,
			&:focus {
				outline: none;
				transform: translateY(-3px);
			}

			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
`;

const StyledCredit = styled.div`
	color: var(--text-light);
	font-family: var(--font-mono);
	font-size: var(--fz-xxs);
	line-height: 1;

	a {
		padding: 5px;

		&:hover,
		&:focus {
			outline: none;
		}
	}
`;

const Footer = () => {
	const [ currentYear, setCurrentYear ] = useState(0);

	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);

	return (
		<StyledFooter>
			<StyledSocialLinks>
				<ul>
					{socialMedia &&
						socialMedia.map(({ name, url }, i) => (
							<li key={i}>
								<a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
									<Icon name={name} />
								</a>
							</li>
						))}
				</ul>
			</StyledSocialLinks>

			<StyledCredit tabindex="-1">
				© {currentYear} Mahmudul Hasan Sreejon | Designed by
				<a href="https://brittanychiang.com/" target="_blank">
					<div>Brittany Chiang</div>
				</a>
			</StyledCredit>
		</StyledFooter>
	);
};

Footer.propTypes = {
	currentYear: PropTypes.number
};

export default Footer;
