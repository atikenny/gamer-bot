import { getCodeFromKeyboardEvent, KeyCodes } from './keyboard-service';
import {
    moveUp,
    moveRight,
    moveDown,
    moveLeft
} from '../actions/board';

export const getKeypressHandler = (dispatch) => {
    return (event) => {
        const keyCode = getCodeFromKeyboardEvent(event);

        switch (keyCode) {
            case KeyCodes.ArrowUp:
                dispatch(moveUp());

                break;
            case KeyCodes.ArrowRight:
                dispatch(moveRight());

                break;
            case KeyCodes.ArrowDown:
                dispatch(moveDown());

                break;
            case KeyCodes.ArrowLeft:
                dispatch(moveLeft());

                break;
        }
    };
};
