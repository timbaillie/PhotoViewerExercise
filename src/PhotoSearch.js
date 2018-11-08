import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

import styles from './PhotoSearch.module.css';

const UNSPLASH_ACESS_KEY = 'insert_valid_key';

class PhotoSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
          query: '',
          photos: [],
          first: true
        };

        this.headerRef = React.createRef();

        this.search = this.search.bind(this);
    }

    componentDidUpdate(prevProps) {
        // if photos updates scroll so Search Results are at top of page
        this.headerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: "start",     
            inline: "nearest"
        });
    }

    search(query) {
        const unsplashURL = `https://api.unsplash.com/search/photos/?query=${query}&client_id=${UNSPLASH_ACESS_KEY}`;
        fetch(unsplashURL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                  photos: data.results,
                  first: false,
                  query
                });
            })
            .catch(err => {
                console.log('Error happened during fetching!', err);
            });
    }

    render() {
        return (
            <section className={styles.root}>
                  <h1 ref={this.headerRef} className={styles.header}>Photo Viewer</h1>
                  {
                      this.state.photos.length > 0 && (
                        <SearchResults 
                          photos={this.state.photos}
                          query={this.state.query}
                        />
                      )
                  }
                  <SearchForm
                    first={this.state.first}
                    submit={this.search}
                  />
            </section>
        );
    }
}

export default PhotoSearch;
