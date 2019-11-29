import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './SocialMediaGroup.module.scss';

const socialMediaGroup = () => (
    <div className={classes.SocialMediaGroup}>
        <div><FontAwesomeIcon icon={['fab', 'facebook-f']} /></div>
        <div><FontAwesomeIcon icon={['fab', 'twitter']} /></div>
        <div><FontAwesomeIcon icon={['fab', 'instagram']} /></div>
        <div><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></div>
    </div>
);

export default socialMediaGroup;