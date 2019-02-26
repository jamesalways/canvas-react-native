jest.mock('react-native-languages', () => ({
	RNLanguages: {
		language: 'en',
		languages: ['en'],
	},
}))

jest.mock('react-native-dotenv', () => ({
	APP_NAME: 'promed',
	APP_VERSION: '0.0.1',
	WEB_URL: ' http://waavi.com',
	API_URL: 'http://api.promed.waavi.com',
	API_KEY: 'XXX',
	ANALYTICS_UA: 'XXX',
	REDUX_PERSIST_KEY: 'promed',
	REDUX_PERSIST_VERSION: '0.0.1',
	REDUX_PERSIST_ACTIVE: ' true',
	STORYBOOK_SHOW: 'false',
}))