import { useEffect, useState } from 'react';

const useDarkMode = () => {
	const [ colorScheme, setColorScheme ] = useState('light');
	const [ componentMounted, setComponentMounted ] = useState(false);

	const setMode = (mode) => {
		window.localStorage.setItem('colorScheme', mode);
		setColorScheme(mode);
	};

	const toggleTheme = () => {
		if (colorScheme === 'light') {
			setMode('dark');
		} else {
			setMode('light');
		}
	};

	useEffect(() => {
		const localColorScheme = window.localStorage.getItem('colorScheme');
		if (localColorScheme) {
			setColorScheme(localColorScheme);
		} else {
			setMode('light');
		}

		setComponentMounted(true);
	}, []);

	return [ colorScheme, toggleTheme, componentMounted ];
};

export default useDarkMode;
