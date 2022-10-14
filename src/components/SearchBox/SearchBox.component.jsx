import './search-box.styles.css'

const SearchBox = ({ onSearchChangeHandler, placeholderText }) => (
	<div className="search-box__wrapper">
		<input className="search-box" type="search" placeholder={ placeholderText } onChange={ onSearchChangeHandler } />
	</div>
);

export default SearchBox;