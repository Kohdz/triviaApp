import React from 'react';
import LandingPage from './components/LandingPageView';
import QuizViewPage from './components/QuizPageView';

export default [
	{
		path: '/',
		name: 'landing-page',
		element: <LandingPage />,
	},
	{
		path: '/quiz',
		name: 'quiz',
		element: <QuizViewPage />,
	},
];
