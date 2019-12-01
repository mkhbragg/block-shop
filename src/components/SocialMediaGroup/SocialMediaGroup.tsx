import React from 'react';

import classes from './SocialMediaGroup.module.scss';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/instagram.svg';
import pinterest from '../../assets/icons/pinterest-light.svg';

const socialMediaGroup = () => (
    <div className={classes.SocialMediaGroup}>
        <div><img src={facebook} alt="facebook" /></div>
        <div><img src={twitter} alt="twitter" /></div>
        <div><img src={instagram} alt="instagram" /></div>
        <div><img src={pinterest} alt="pinterest" /></div>
    </div>
);

export default socialMediaGroup;