import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import { selectPlayer as selectPlayerAction, play, stop } from './actions';
import { resetGame } from '../Board/actions';

import './styles';

const Players = () => {
  const players = useSelector((state) => state.players);
  const moveIntervalMS = useSelector((state) => state.settings.moveIntervalMS);
  const tiles = useSelector((state) => state.board.tiles);
  const dispatch = useDispatch();
  const selectPlayer = (name) => () => {
    dispatch(stop());
    dispatch(selectPlayerAction(name));
    dispatch(resetGame());
    dispatch(play(tiles, moveIntervalMS));
  };

  return (
    <ul className="players">
      {players.map(({ name, isSelected }) => (
        <li key={name}>
          <Button isActive={isSelected} onClick={isSelected ? () => null : selectPlayer(name)}>
            {name}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Players;
