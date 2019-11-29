import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const starRating = (props: any) => {
    let stars = [...Array(props.total)].map((item, i) => {
        return <span><FontAwesomeIcon style={ i < props.rating ? {color: '#262930'} : {color: '#D6D7D9'}} icon="star" /></span>;
    });

    return <div>{stars}</div>
};

starRating.propTypes = {
    total: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
};

export default starRating;