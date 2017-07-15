import { getCodeFromKeyboardEvent, KeyCodes } from './keyboard-service';
import {
    moveUpAndGetNumber,
    moveRight,
    moveDownAndGetNumber,
    moveLeft
} from '../actions/board';

export const getKeypressHandler = (dispatch) => {
    return (event) => {
        const keyCode = getCodeFromKeyboardEvent(event);

        switch (keyCode) {
            case KeyCodes.ArrowUp:
                dispatch(moveUpAndGetNumber());

                break;
            case KeyCodes.ArrowRight:
                dispatch(moveRight());

                break;
            case KeyCodes.ArrowDown:
                dispatch(moveDownAndGetNumber());

                break;
            case KeyCodes.ArrowLeft:
                dispatch(moveLeft());

                break;
        }
    };
};
