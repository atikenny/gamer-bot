import { getCodeFromKeyboardEvent, KeyCodes } from './keyboard-service';
import {
    moveUpAndGetNumber,
    moveRightAndGetNumber,
    moveDownAndGetNumber,
    moveLeftAndGetNumber
} from '../actions/board';

export const getKeypressHandler = (dispatch) => {
    return (event) => {
        const keyCode = getCodeFromKeyboardEvent(event);

        switch (keyCode) {
            case KeyCodes.ArrowUp:
                dispatch(moveUpAndGetNumber());

                break;
            case KeyCodes.ArrowRight:
                dispatch(moveRightAndGetNumber());

                break;
            case KeyCodes.ArrowDown:
                dispatch(moveDownAndGetNumber());

                break;
            case KeyCodes.ArrowLeft:
                dispatch(moveLeftAndGetNumber());

                break;
        }
    };
};
