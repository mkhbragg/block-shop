import React from 'react';
import PropTypes from 'prop-types';

import star from '../../../assets/icons/star.svg';
import starDisabled from '../../../assets/icons/star-disabled.svg';
import classes from './StarRating.module.scss';

const starRating = (props: any) => {
    let stars = [...Array(props.total)].map((item, i) => {
        return i < props.rating ? <img className={classes.Star} src={star} alt="star" /> : <img className={classes.Star} src={starDisabled} alt="star" />;
    });

    return <div className={classes.Stars}>{stars}</div>
};

starRating.propTypes = {
    total: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
};

export default starRating;