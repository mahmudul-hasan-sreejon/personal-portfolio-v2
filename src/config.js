module.exports = {
	email: 'contact@mahmudul-hasan-sreejon.com',

	socialMedia: [
		{
			name: 'GitHub',
			url: 'https://github.com/mahmudul-hasan-sreejon'
		},
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/mahmudul-hasan-sreejon'
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/mahmudul.hasan.sreejon'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/mh_sreejon'
		},
		{
			name: 'Codepen',
			url: 'https://codepen.io/mahmudul-hasan-sreejon'
		}
	],

	navLinks: [
		{
			name: 'About',
			url: '/#about'
		},
		{
			name: 'Experience',
			url: '/#jobs'
		},
		{
			name: 'Work',
			url: '/#projects'
		},
		{
			name: 'Contact',
			url: '/#contact'
		}
	],

	colors: {
		accent: '#DC3545',
		background: '#282C34',
		backgroundDark: '#20232A'
	},

	srConfig: (delay = 200, viewFactor = 0.25) => ({
		origin: 'bottom',
		distance: '20px',
		duration: 500,
		delay,
		rotate: { x: 0, y: 0, z: 0 },
		opacity: 0,
		scale: 1,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		mobile: true,
		reset: false,
		useDelay: 'always',
		viewFactor,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
	})
};
