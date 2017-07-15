import React        from 'react';
import { connect }  from 'react-redux';

const Score = ({ score }) => (
    <div id="score-container">
        {score}
    </div>
);

const mapState = ({ score }) => {
    return {
        score
    };
};

export default connect(mapState)(Score);
