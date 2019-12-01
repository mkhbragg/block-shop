import React from 'react';

import logo from '../../assets/icons/block-shop-logo.svg';
import Aux from '../hoc/Aux/Aux';
import SocialMediaGroup from '../SocialMediaGroup/SocialMediaGroup';

const footer = () => (
    <Aux>
        <div>
            <img src={logo} alt="Block Shop" />
            <span>Copyright Block Shop 2019</span>
            <span>All Rights Reserved</span>
        </div>
        <div>
            <div>
                <span>About Us</span>
                <span>Story</span>
                <span>Contact</span>
                <span>Blog</span>
            </div>
            <div>
                <span>Customer Care</span>
                <span>FAQ</span>
                <span>Warranty</span>
                <span>Returns</span>
            </div>
            <div>
                <span>Follow Us</span>
                <SocialMediaGroup />
            </div>
        </div>
    </Aux>
);

export default footer;