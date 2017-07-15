import React        from 'react';
import { connect }  from 'react-redux';

import 'game2048/styles/components/score';

const Score = ({ score }) => (
    <div className="score">
        <h3>score</h3>
        <div className="value">
            {score}
        </div>
    </div>
);

const mapState = ({ score }) => {
    return {
        score
    };
};

export default connect(mapState)(Score);
