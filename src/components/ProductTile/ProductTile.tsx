import React from 'react';
import PropTypes from 'prop-types';

import classes from './ProductTile.module.scss';
import StarRating from '../UI/StarRating/StarRating';

const productTile = (props: any) => (
    <div className={classes.ProductTile}>
        <img src={props.src} />
        <span>{props.title}</span>
        <StarRating total={+props.rating.split('/')[1]} rating={+props.rating.split('/')[0]} />
    </div>
);

productTile.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired
};

export default productTile;