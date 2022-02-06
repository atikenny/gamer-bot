import { useSelector } from 'react-redux';

import './styles';

import Restart from '../Restart/Restart';
import Score from '../Score/Score';
import Settings from '../Settings/Settings';

const Actions = () => {
  const score = useSelector((state) => state.players.find((player) => player.isSelected).score);

  return (
    <div className="actions-container">
      <Settings />
      <Restart />
      <Score score={score.actualScore} title="score" />
      <Score score={score.maxScore} title="max score" />
    </div>
  );
};

export default Actions;
