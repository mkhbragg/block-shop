import React, { Component } from 'react';

import logo from '../../../assets/icons/block-shop-logo.svg';
import search from '../../../assets/icons/search.svg';
import classes from './Header.module.scss';

class Header extends Component<any, any> {
    handleSearch = () => {
        let searchbar: any = document.getElementById('SearchBar');
        window.scrollTo(0, searchbar.offsetTop);
        searchbar.focus();
    }

    render () {
        return (
            <div className={classes.Header}>
                <img className={classes.Logo} src={logo} alt="Block Shop" />
                <img onClick={this.handleSearch} className={classes.Search} src={search} alt="search" />
            </div>
        );
    }
};

export default Header;