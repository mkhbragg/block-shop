import React, { Component } from 'react';

import logo from '../../assets/icons/block-shop-logo.svg';
import SocialMediaGroup from '../SocialMediaGroup/SocialMediaGroup';
import classes from './Footer.module.scss';

class Footer extends Component<any, any> {
    state = {
        mobile: true
    }

    componentDidMount() {
        this.updateWindow();
        window.addEventListener('resize', this.updateWindow.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindow.bind(this));
    }

    updateWindow () {
        this.setState({ mobile: window.innerWidth <= 768 })
    }

    render () {
        return (
            <div className={classes.Footer}>
                <div className={classes.LogoContainer}>
                    <img src={logo} alt="Block Shop logo" />
                    <div className={`${classes.FinePrint} ${classes.Large}`}>
                        <p>Copyright Block Shop 2019</p>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
                <div className={!this.state.mobile ? classes.Row : ''}>
                    <div className={classes.Row}>
                        <div className={classes.Section}>
                            <p className={classes.Heading}>About Us</p>
                            <p>Story</p>
                            <p>Contact</p>
                            <p>Blog</p>
                        </div>
                        <div className={classes.Section}>
                            <p className={classes.Heading}>Customer Care</p>
                            <p>FAQ</p>
                            <p>Warranty</p>
                            <p>Returns</p>
                        </div>
                    </div>
                    <div className={classes.Section}>
                        <p className={classes.Heading}>Follow Us</p>
                        <SocialMediaGroup />
                    </div>
                </div>
                <div className={`${classes.FinePrint} ${classes.Small}`}>
                    <p>Copyright Block Shop 2019</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        );
    }
};

export default Footer;