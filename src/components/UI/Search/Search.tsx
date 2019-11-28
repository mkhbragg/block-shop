import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Aux from '../../hoc/Aux/Aux';

const search = () => (
    <Aux>
        <FontAwesomeIcon icon="search"></FontAwesomeIcon>
        <input type="text" placeholder="Search" />
    </Aux>
);

export default search;