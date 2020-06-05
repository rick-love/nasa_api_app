import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: '',
    };

    static propTypes = {
        searchImages: PropTypes.func.isRequired,
        clearImages: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    onChange = (e) =>
        this.setState({
            [e.target.name]: e.target.value,
        });
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter a valid search', 'light');
        }

        this.props.searchImages(this.state.text);
        this.setState({
            text: '',
        });
    };
    render() {
        const { showClear, clearImages } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search images...'
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input
                        type='submit'
                        value='Search'
                        className='btn btn-dark btn-block'
                    />
                </form>
                {showClear && (
                    <button className='btn btn-light btn-block' onClick={clearImages}>
                        Clear
                    </button>
                )}
            </div>
        );
    }
}

export default Search;
