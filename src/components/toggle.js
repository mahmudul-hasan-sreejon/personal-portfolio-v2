import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconSun, IconMoon } from '@components/icons';

const ToggleContainer = styled.button`
	position: relative;
	display: flex;
	justify-content: center;
	background: none;
	max-width: 4rem;
	max-height: 2.45rem;
	margin: 0 0 0 15px;
	font-size: var(--fz-xxs);
	overflow: hidden;
	cursor: pointer;
	transition: var(--transition);

	&:focus {
		outline: none;
	}

	@media (max-width: 768px) {
		margin: 50px 0 0 0;
	}

	svg {
		fill: var(--text-lightest);
		max-width: 2rem;
		height: auto;
		transition: var(--transition);
	}

	svg:hover {
		fill: var(--accent);
		transition: var(--transition);
	}
`;

const Toggle = ({ toggleTheme, colorScheme }) => {
	const title = `Switch to ${colorScheme === 'dark' ? 'Light' : 'Dark'} Mode`;
	const icon = colorScheme === 'dark' ? <IconSun /> : <IconMoon />;

	return (
		<ToggleContainer onClick={toggleTheme} colorScheme={colorScheme} title={title}>
			{icon}
		</ToggleContainer>
	);
};

Toggle.propTypes = {
	toggleTheme: PropTypes.func,
	colorScheme: PropTypes.string
};

export default Toggle;
