import React        from 'react';

import 'games/2048/styles/components/score';

const Score = ({ score, title }) => (
    <div className="score">
        <h3>{title}</h3>
        <div className="value">
            {score}
        </div>
    </div>
);

export default Score;
