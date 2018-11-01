import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchResults.module.css';

const SearchResults = ({photos, query}) => (
    <section>
        <h2>Search Results for {query}</h2>
        <ul className={styles.list}>
            { 
                photos.map((photo, index) => (
                    <li className={styles.item} key={index}>
                        <img className={styles.photo} src={photo.urls.small} alt={photo.description} />
                    </li>
                ))
            }
        </ul>
    </section>
    
);

SearchResults.propTypes = {
    photos: PropTypes.array,
    query: PropTypes.string
};

export default SearchResults;
