import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Search.module.scss';

class Search extends Component<any, any> {
    state = {
        search: ''
    }

    componentDidMount () {
        // populate search with existing keywords
        const query: any = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            this.setState({ search: param[1] });
        }
    }

    handleChange = (event: any) => {
        this.setState({ search: event.target.value })
    }

    handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            console.log('enter press here! ')
            if (this.state.search === '') {
                this.props.history.push('/');
            } else {
                this.props.history.push({
                    pathname: '/search',
                    search: `?keywords=${encodeURIComponent(this.state.search)}`
                });
            }
        }     
    }

    render () {
        return (
            <Aux>
                <input
                    className={classes.Search}
                    type="text"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={(e) => this.handleChange(e)}
                    onKeyPress={this.handleKeyPress} />
            </Aux>
        );
    }
}

export default Search;