import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../components/UI/Button/Button';
import product1 from '../../assets/photos/product-1.png';
import product2 from '../../assets/photos/product-2.png';
import product3 from '../../assets/photos/product-3.png';
import ProductTile from '../../components/ProductTile/ProductTile';
import classes from './Carousel.module.scss';

const TILES = [
    { title: 'Hat Chair', src: product1, rating: '4/5', cost: '$155.99' },
    { title: 'XAC Modern Lamp', src: product2, rating: '4/5', cost: '$50.99' },
    { title: 'Circle Chair', src: product3, rating: '4/5', cost: '$200.99' }
];

class Carousel extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.scrollingArea = React.createRef();
        this.tiles = React.createRef();
    }
    scrollingArea: any;
    tiles: any;
    state = {
        rightOverflow: false,
        leftOverflow: false,
    }

    componentDidMount() {
        this.updateOverflow();

        // add resize event listener
        window.addEventListener('resize', this.updateOverflow.bind(this));
        window.addEventListener('transitionend', this.updateOverflow.bind(this), false);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateOverflow.bind(this));
        window.removeEventListener('transitionend', this.updateOverflow.bind(this));
    }

    updateOverflow () {
        let rightOverflow = false;
        let leftOverflow = false;
        let lastChild = this.tiles.children[this.tiles.children.length - 1].getBoundingClientRect();
        let firstChild = this.tiles.children[0].getBoundingClientRect();

        if (lastChild.x + lastChild.width > this.scrollingArea.getBoundingClientRect().right) {
            rightOverflow = true;
        }

        if (firstChild.x < this.scrollingArea.getBoundingClientRect().left) {
            leftOverflow = true;
        }

        this.setState({ rightOverflow: rightOverflow, leftOverflow: leftOverflow });
    }

    shopHandler = () => {
        console.log('go to shopping page');
    }

    handleLeftClick = (leftOverflow: boolean) => {
        if (leftOverflow) {
            let leftVal = parseFloat(this.tiles.style.left.split('px')[0]) || 0;
            this.tiles.style.left = `${leftVal + 200}px`;
        }
    }

    handleRightClick = (rightOverflow: boolean) => {
        if (rightOverflow) {
            let leftVal = parseFloat(this.tiles.style.left.split('px')[0]) || 0;
            this.tiles.style.left = `${leftVal - 200}px`;
        }
    }

    render() {
        let tiles = TILES.map((tile, i) => {
            return <ProductTile key={i} cost={tile.cost} title={tile.title} src={tile.src} rating={tile.rating} />;
        });
        return (
            <div className={classes.Carousel}>
                <div className={classes.Controls}>
                    <span className={classes.Title}>Most popular</span>
                    <span className={classes.Subtitle}>We know you'll love these.</span>
                    <div className={classes.Arrows}>
                        <div onClick={() => this.handleLeftClick(this.state.leftOverflow)}>
                            <FontAwesomeIcon style={this.state.leftOverflow ? { color: '#262930' }: { color: '#CFD3DB' }} icon="arrow-left" />
                        </div>
                        <div onClick={() => this.handleRightClick(this.state.rightOverflow)}>
                            <FontAwesomeIcon style={this.state.rightOverflow ? { color: '#262930' }: { color: '#CFD3DB' }} icon="arrow-right" />
                        </div>
                    </div>
                    <span className={classes.Large}><Button clicked={this.shopHandler}>Shop Now</Button></span>
                </div>
                <div className={classes.ScrollingArea} ref={(container) => { this.scrollingArea = container; }}>
                    <div className={classes.Tiles} ref={(tiles) => { this.tiles = tiles; }}>
                        {tiles}
                    </div>
                </div>
                <span className={classes.Small}><Button clicked={this.shopHandler}>Shop Now</Button></span>
            </div>
        );
    }
}

export default Carousel;