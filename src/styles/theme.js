import mixins from './mixins';

const bp = {
	mobileS: `max-width: 330px`,
	mobileM: `max-width: 400px`,
	mobileL: `max-width: 480px`,
	tabletS: `max-width: 600px`,
	tabletL: `max-width: 768px`,
	desktopXS: `max-width: 900px`,
	desktopS: `max-width: 1080px`,
	desktopM: `max-width: 1200px`,
	desktopL: `max-width: 1400px`
};

const darkThemeColorScheme = {
	backgroundDark: '#20232A',
	background: '#282C34',
	backgroundLight: '#313640',
	backgroundLightest: '#495160',
	backgroundTint: 'rgba(40, 44, 52, 0.85)',
	shadow: 'rgba(21, 22, 27, 0.85)',
	text: '#ABB2BF',
	textLight: '#C9CDD6',
	textLightest: '#DDDFE5',
	selectedTextBackground: 'rgba(171, 178, 191, 0.2)',
	imageBackground: '#282C34',
	highlight: '#F1F2F4',
	accent: '#DC3545',
	accentTint: 'rgba(220, 53, 69, 0.2)'
};

const lightThemeColorScheme = {
	backgroundDark: '#E1E1E1',
	background: '#FAFAFA',
	backgroundLight: '#DFDFDF',
	backgroundLightest: '#A0A0A0',
	backgroundTint: 'rgba(250, 250, 250, 0.85)',
	shadow: 'rgba(21, 22, 27, .22)',
	text: '#85878B',
	textLight: '#67696E',
	textLightest: '#41434A',
	selectedTextBackground: 'rgba(133, 135, 139, 0.3)',
	imageBackground: '#ABB2BF',
	highlight: '#282C34',
	accent: '#DC3545',
	accentTint: 'rgba(220, 53, 69, 0.2)'
};

export const lightTheme = {
	bp,
	mixins,
	colorScheme: lightThemeColorScheme
};

export const darkTheme = {
	bp,
	mixins,
	colorScheme: darkThemeColorScheme
};
