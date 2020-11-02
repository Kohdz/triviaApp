import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
	const element = useRoutes(routes);
	return (
		<div className='App'>
			<div className='container-fluid'>{element}</div>
		</div>
	);
}

export default App;
