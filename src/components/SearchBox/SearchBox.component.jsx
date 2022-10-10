import { Component } from 'react';

import './search-box.styles.css'

class SearchBox extends Component {
	render() {
		const { onSearchChangeHandler, placeholderText } = this.props;

		return (
			<div className="search-box__wrapper">
				<input className="search-box" type="search" placeholder={ placeholderText } onChange={ onSearchChangeHandler } />
			</div>
		)
	}
}

export default SearchBox;