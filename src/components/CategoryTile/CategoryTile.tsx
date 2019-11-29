import React from 'react';
import PropTypes from 'prop-types';
import classes from './CategoryTile.module.scss';

const categoryTile = (props: any) => (
    <div className={classes.CategoryTile}>
        <span>{props.title}</span>
        <img src={props.src} alt={props.title} />
    </div>
);

categoryTile.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export default categoryTile;