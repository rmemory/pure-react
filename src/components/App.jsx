/* eslint-disable react/jsx-indent-props, react/jsx-one-expression-per-line */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './app.css';

// const welcome = 'Welcome to React from Big Fish';

const App = () => (
	// <div className="App">
	// 	<header className="App-header">
	// 		<Welcome />
	// 	</header>
	// 	<p className="App-intro">
	// 		{'To get started, edit'}
	// 		<code>
	// 			{'src/components/App.jsx'}
	// 		</code>
	// 		{'and save to reload.'}
	// 	</p>
	// </div>
	<Fragment>
		<MediaCard
			title="How bout an apple?"
			body={(
				<em>
					How do you like them apples?
				</em>
			)}
			imageUrl="http://cjsmarket.com/wp-content/uploads/2015/11/Bushel-of-Apples-600x600.png"
		/>
		<hr />
		<Gate
			isOpen="true"
		/>
	</Fragment>
);

// const Welcome = () => (
// 	<h1 className="App-title">
// 		{welcome}
// 	</h1>
// );

const imgStyle = {
	width: '100px',
	height: '100px',
};

const MediaCard = ({ title, body, imageUrl }) => (
	<div className="media">
		<img className="mr-3" style={imgStyle} src={imageUrl} alt="apples" />
		<div className="media-body">
			<h2>
				{title}
			</h2>
			<p>
				{body}
			</p>
		</div>
	</div>
);
MediaCard.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
};

const Gate = ({ isOpen }) => (
	<p>
		Gate is { isOpen
			? <span className="alert alert-danger" role="alert">Open</span>
			: <span className="alert alert-success" role="alert">Closed</span>
		}
	</p>
);
Gate.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};

export default App;
