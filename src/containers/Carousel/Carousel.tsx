import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Aux from '../../components/hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';

import product1 from '../../assets/photos/product-1.png';
import product2 from '../../assets/photos/product-2.png';
import product3 from '../../assets/photos/product-3.png';
import ProductTile from '../../components/ProductTile/ProductTile';
import classes from './Carousel.module.scss';

const TILES = [
    { title: 'Hat Chair', src: product1, rating: '4/5' },
    { title: 'XAC Modern Lamp', src: product2, rating: '4/5' },
    { title: 'Circle Chair', src: product3, rating: '4/5' }
];

class Carousel extends Component<any, any> {

    shopHandler = () => {
        console.log('go to shopping page');
    }

    render() {
        let tiles = TILES.map((tile, i) => {
            return <ProductTile key={i} title={tile.title} src={tile.src} rating={tile.rating} />;
        });
        return (
            <div className={classes.Carousel}>
                <div>
                    <span>Most popular</span>
                    <p>We know you'll love these.</p>
                    <div><FontAwesomeIcon icon="arrow-left" /><FontAwesomeIcon icon="arrow-right" /></div>
                    <Button clicked={this.shopHandler}>Shop Now</Button>
                </div>
                <div className={classes.Tiles}>
                    {tiles}
                </div>
            </div>
        );
    }
}

export default Carousel;