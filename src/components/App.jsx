/* eslint-disable react/jsx-indent-props, react/jsx-one-expression-per-line */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './app.css';

class App extends Component {
	state = {
		isLit: true,
	}

	flipLight = (event) => {
		event.preventDefault();
		this.setState({
			isLit: !this.state.isLit,
		});
	}

	render() {
		const brightness = this.state.isLit ? 'lit' : 'dark';
		return (
			<div className={`room ${brightness}`}>
				the room is {brightness}
				<br />
				<button type="submit" onClick={this.flipLight}>
					flip
				</button>
			</div>
		);
	}
}

// MediaCard.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	body: PropTypes.string.isRequired,
// 	imageUrl: PropTypes.string.isRequired,
// };

export default App;
