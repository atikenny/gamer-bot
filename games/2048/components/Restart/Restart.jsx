import { useDispatch } from 'react-redux';

import './styles';

import { resetGame as resetGameAction } from '../Board/actions';
import Button from '../Button/Button';

const Restart = () => {
  const dispatch = useDispatch();
  const resetGame = () => {
    dispatch(resetGameAction());
  };

  return (
    <Button className="restart-button" onClick={resetGame}>
      restart
    </Button>
  );
};

export default Restart;
