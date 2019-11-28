import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const button = (props: any) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

button.propTypes = {
    children: PropTypes.node.isRequired,
    clicked: PropTypes.func,
    disabled: PropTypes.bool
};

export default button;