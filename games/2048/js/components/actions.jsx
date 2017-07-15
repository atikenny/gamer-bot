import React        from 'react';

import 'game2048/styles/components/actions';

import Score        from './score';
import Restart      from './restart';

const Actions = () => (
    <div id="actions-container">
        <Restart />
        <Score />
    </div>
);

export default Actions;
