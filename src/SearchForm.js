import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit(this.state.value);
    }

    render() {
        return (
            <section>
                <h2 className={styles.header}>
                    { this.props.first ? 'Search for photos:' : 'Search again:' }
                </h2>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <input
                      className={styles.input}
                      type="search" 
                      value={this.state.value} 
                      onChange={this.handleChange} 
                      placeholder="what would you like to see photos of?" 
                    />
                    <input
                      className={styles.button}
                      type="submit"
                      value="Search"
                    />
                </form>
            </section>
        );
    }
}

SearchForm.defaultProps = {
    first: true
};

SearchForm.propTypes = {
    first: PropTypes.bool,
    submit: PropTypes.func.isRequired
};

export default SearchForm;
