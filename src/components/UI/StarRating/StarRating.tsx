import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './StarRating.module.scss';

const starRating = (props: any) => {
    console.log(props);
    let stars = [...Array(props.total)].map((item, i) => {
        return <span className={i < props.rating ? 'filled': ''}><FontAwesomeIcon icon="star" /></span>;
    });

    return <div className={classes.StarRating}>{stars}</div>
};

starRating.propTypes = {
    total: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
};

export default starRating;