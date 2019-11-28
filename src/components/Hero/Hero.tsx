import React from 'react';

import Header from '../UI/Header/Header';
import classes from './Hero.module.scss';
import HeroImage from '../../assets/photos/hero.png';
import Search from '../UI/Search/Search';

const hero = () => (
    <div className={classes.Hero}>
        <Header />
        <div className={classes.Content}>
            <div className={classes.Text}>
                <span className={classes.Title}>A new way to shop safely</span>
                <div className={`${classes.Subtitle} ${classes.Large}`}>We’re a service that’s supported on blockchain by the cryptocurrency EOS, so you can be sure that our sellers are trusted and verified.</div>
                <div className={`${classes.Subtitle} ${classes.Small}`}>Be sure that your purchase is verified and secure on blockchain with the cryptocurrency EOS.</div>
                <Search />
            </div>
            <img className={classes.HeroImage} src={HeroImage} />
        </div>
    </div>
);

export default hero;