import { combineReducers }  from 'redux';

import score                from './score';

const appReducers = combineReducers({
    score
});

export default appReducers;