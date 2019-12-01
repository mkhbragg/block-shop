import React, { Component } from 'react';


import Categories from '../Categories/Categories';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Carousel from '../Carousel/Carousel';
import Aux from '../../components/hoc/Aux/Aux';

class LandingPage extends Component<any, any> {
    render () {
        return (
            <Aux>
                <Hero {...this.props} />
                <Carousel {...this.props} />
                <Categories />
                <Footer />
            </Aux>
        );
    }
}

export default LandingPage;