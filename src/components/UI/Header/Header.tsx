import React from 'react';

import logo from '../../../assets/icons/block-shop-logo.svg';
import search from '../../../assets/icons/search.svg';
import classes from './Header.module.scss';

const header = () => (
    <div className={classes.Header}>
        <img className={classes.Logo} src={logo} alt="Block Shop" />
        <img className={classes.Search} src={search} alt="search" />
    </div>
);

export default header;