import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../../assets/logo-block-shop.png';
import classes from './Header.module.scss';

const header = () => (
    <div className={classes.Header}>
        <img src={logo} alt="Block Shop" />
        <FontAwesomeIcon icon="search"></FontAwesomeIcon>
    </div>
);

export default header;