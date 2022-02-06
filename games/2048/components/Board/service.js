import { getCodeFromKeyboardEvent, KeyCodes } from '../../services/keyboard-service';
import { moveAndGetNumber, resetGame } from './actions';

export const getKeypressHandler = (dispatch) => (event) => {
  const keyCode = getCodeFromKeyboardEvent(event);

  switch (keyCode) {
    case KeyCodes.ArrowUp:
      dispatch(moveAndGetNumber('UP'));

      break;
    case KeyCodes.ArrowRight:
      dispatch(moveAndGetNumber('RIGHT'));

      break;
    case KeyCodes.ArrowDown:
      dispatch(moveAndGetNumber('DOWN'));

      break;
    case KeyCodes.ArrowLeft:
      dispatch(moveAndGetNumber('LEFT'));

      break;
    case KeyCodes.KeyR:
      dispatch(resetGame());

      break;
    default:
      break;
  }
};
