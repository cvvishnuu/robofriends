import React from 'react';

const SearchBox = ({searchchange}) => {
	return (
		<div className = 'pa2'>
			<input 
				className = 'pa3 ba b--green bg-lightest-blue' 
				type = 'text' 
				placeholder = 'Search Robots' 
				onChange = { searchchange }
			/>
		</div>
	)
}

export default SearchBox;