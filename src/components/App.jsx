import React from 'react';
import './app.css';

const welcome = 'Welcome to React from Big Fish';

const App = () => (
	<div className="App">
		<header className="App-header">
			<Welcome />
		</header>
		<p className="App-intro">
			{'To get started, edit'}
			<code>
				{'src/components/App.jsx'}
			</code>
			{'and save to reload.'}
		</p>
	</div>
);

const Welcome = () => (
	<h1 className="App-title">
		{welcome}
	</h1>
);

export default App;
