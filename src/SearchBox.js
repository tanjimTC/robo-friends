import React from 'react';

const SearchBox = ({SearchChange}) => {
    return (
        <div>
            <input className="pa2 tc mb3 ba b--green bg-lightest-blue" type="SearchBox" name="search" placeholder="Search Robots"
            onChange = {SearchChange}
            />
        </div>
    );
};

export default SearchBox;