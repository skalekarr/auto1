import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
// eslint-disable-next-line
import styles from './index.styles.css';

const Favorites = ({isFavorite, toggleFavourites}) => {
    const button = isFavorite ? 'Remove' : 'Save';
    return (<div className="favorites border">
        If you like this car, click the button and save it in your collection of favourite items.
        <Button className="pull-right" onClick={toggleFavourites}>{button}</Button>
    </div>)
}

Favorites.propTypes = {
    toggleFavourites: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool.isRequired
}

export default Favorites
