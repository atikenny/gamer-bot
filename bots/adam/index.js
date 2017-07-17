import { delayedCallback } from 'game2048/js/services/delay-service';
import { KeyCodes } from 'game2048/js/services/keyboard-service';
import hash from 'object-hash';

const getRandomKeyCode = () => {
    const keys = Object.keys(KeyCodes).reduce((_keys, keyCodeKey) => {
        return _keys.concat(KeyCodes[keyCodeKey])
    }, []);
    const randomKeyIndex = Math.floor(Math.random() * keys.length);

    return keys[randomKeyIndex];
};

const getKeyEvent = (keyCode) => {
    return new KeyboardEvent('keyup', {
        code: keyCode
    });
};

const triggerRandomKeyEvent = () => {
    const randomKeyEvent = getRandomKeyEvent();

    document.dispatchEvent(randomKeyEvent);
};

let log = [];
let hashLog = {};
const logEvent = ({ keyCode, state }) => {
    const stateHash = hash(state);
    const badMove = Boolean(hashLog[stateHash]);

    if (log.length > 100000) {
        log.pop();
    }

    log.push({
        keyCode,
        stateHash,
        badMove
    });
    hashLog[stateHash] = true;

    if (badMove) {
        console.log(state);
    }
};

export const play = (store) => {
    let keyEvent, keyCode;

    setInterval(() => {
        delayedCallback(() => {
            keyCode = getRandomKeyCode();
            keyEvent = getKeyEvent(keyCode);
            const state = store.getState();

            logEvent({
                keyCode,
                state
            });
            document.dispatchEvent(keyEvent);
        });
    }, 1000);
};
