import React, { Component } from 'react';

import CategoryTile from '../../components/CategoryTile/CategoryTile';
import minimal from '../../assets/photos/minimal.png';
import rustic from '../../assets/photos/new-rustic.png';
import modern from '../../assets/photos/modern.png';
import classes from './Categories.module.scss';

const CATEGORIES = [
    { title: 'Minimal', src: minimal },
    { title: 'New Rustic', src: rustic },
    { title: 'Modern', src: modern }
];

class Categories extends Component<any, any> {
    render() {
        let categories = CATEGORIES.map((category, i) => {
            return <CategoryTile key={i} title={category.title} src={category.src} />
        });
        return <div className={classes.Categories}>{ categories }</div>;
    }
}

export default Categories;