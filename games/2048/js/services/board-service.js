import { getCodeFromKeyboardEvent, KeyCodes } from './keyboard-service';
import { moveAndGetNumber } from '../actions/board';

export const getKeypressHandler = (dispatch) => {
    return (event) => {
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
        }
    };
};
