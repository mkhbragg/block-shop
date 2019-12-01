import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import product1 from '../../assets/photos/product-1.png';
import product2 from '../../assets/photos/product-2.png';
import product3 from '../../assets/photos/product-3.png';
import ProductTile from '../../components/ProductTile/ProductTile';
import classes from './Carousel.module.scss';
import leftArrow from '../../assets/icons/left-arrow.svg';
import leftArrowDisabled from '../../assets/icons/left-arrow-disabled.svg';
import rightArrow from '../../assets/icons/right-arrow.svg';
import rightArrowDisabled from '../../assets/icons/right-arrow-disabled.svg';

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
        products: TILES,
        keywords: []
    }

    componentDidMount() {
        // check overflow in carousel
        this.updateOverflow();

        // parse any keywords passed in url
        this.getQueryParams();

        // add resize event listener
        window.addEventListener('resize', this.updateOverflow.bind(this));
        window.addEventListener('transitionend', this.updateOverflow.bind(this), false);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateOverflow.bind(this));
        window.removeEventListener('transitionend', this.updateOverflow.bind(this));
    }

    componentDidUpdate() {
        this.getQueryParams();
    }

    getQueryParams () {
        if ( this.props.match.path === '/search' ) {

            // get keywords from query params
            let keywords: any;
            const query: any = new URLSearchParams(this.props.location.search);
            for (let param of query.entries()) {
                if (param[0] === 'keywords') {
                    keywords = param[1].split(' ');
                }
            }

            // update state if the search keywords have changed
            if (!this.state.keywords || (this.state.keywords && (this.state.keywords.join('') !== keywords.join('')))) {
                let filtered = TILES.filter(product => {
                    let includes = false;
                    keywords.forEach((keyword: any) => {
                        if (product.title.toLowerCase().includes(keyword.toLowerCase())) {
                            includes = true;
                        }
                    });
                    return includes;
                });

                this.setState({ keywords: keywords, products: filtered });
            }
        } else {
            // if search has been cleared, reset products list to default
            if (this.state.keywords.length > 0) {
                this.setState({ keywords: [], products: TILES });
            }
        }
    }

    getKeywords (keywords: string): string[] {
        return keywords.split(' ');
    }

    // update overflow state according to the direction in which product tiles exceed the width of the bounding box
    updateOverflow () {
        if (this.state.products.length > 0) {
            let lastChild = this.tiles.children[this.tiles.children.length - 1].getBoundingClientRect();
            let firstChild = this.tiles.children[0].getBoundingClientRect();

            let rightOverflow = lastChild.x + lastChild.width > this.scrollingArea.getBoundingClientRect().right;
            let leftOverflow = firstChild.x < this.scrollingArea.getBoundingClientRect().left;
    
            this.setState({ rightOverflow: rightOverflow, leftOverflow: leftOverflow });
        }
    }

    shopHandler = () => {
        console.log('go to shopping page');
    }

    // move carousel one tile to the left
    handleLeftClick = (leftOverflow: boolean) => {
        if (leftOverflow) {
            let leftVal = parseFloat(this.tiles.style.left.split('px')[0]) || 0;
            this.tiles.style.left = `${leftVal + this.tiles.children[0].getBoundingClientRect().width}px`;
        }
    }

    // move carousel one tile to the right
    handleRightClick = (rightOverflow: boolean) => {
        if (rightOverflow) {
            let leftVal = parseFloat(this.tiles.style.left.split('px')[0]) || 0;
            this.tiles.style.left = `${leftVal - this.tiles.children[0].getBoundingClientRect().width}px`;
        }
    }

    render() {
        let tiles = this.state.products
            .map((tile: any, i) => {
                return <ProductTile key={i} cost={tile.cost} title={tile.title} src={tile.src} rating={tile.rating} />;
            });

        return (
            <div className={classes.Carousel}>
                <div className={classes.Controls}>
                    <span className={classes.Title}>Most popular</span>
                    <span className={classes.Subtitle}>We know you'll love these.</span>
                    <div className={classes.Arrows}>
                        <div className={this.state.leftOverflow ? classes.enabled : classes.disabled} onClick={() => this.handleLeftClick(this.state.leftOverflow)}>
                            { this.state.leftOverflow ? <img src={leftArrow} alt="left arrow" /> :  <img src={leftArrowDisabled} alt="disabled left arrow" /> }
                        </div>
                        <div className={this.state.rightOverflow ? classes.enabled : classes.disabled} onClick={() => this.handleRightClick(this.state.rightOverflow)}>
                            { this.state.rightOverflow ? <img src={rightArrow} alt="right arrow" /> :  <img src={rightArrowDisabled} alt="disabled right arrow" /> }
                        </div>
                    </div>
                    <span className={classes.Large}><Button clicked={this.shopHandler}>Shop Now</Button></span>
                </div>
                <div className={classes.ScrollingArea} ref={(container) => { this.scrollingArea = container; }}>
                    <div className={classes.Tiles} ref={(tiles) => { this.tiles = tiles; }}>
                        { tiles.length > 0 ? tiles : <p>No products found matching '{this.state.keywords.join(' ')}'.</p> }
                    </div>
                </div>
                <span className={classes.Small}><Button clicked={this.shopHandler}>Shop Now</Button></span>
            </div>
        );
    }
}

export default Carousel;