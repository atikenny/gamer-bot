import { delayedCallback } from 'game2048/js/services/delay-service';
import { KeyCodes } from 'game2048/js/services/keyboard-service';

const getRandomKeyCode = () => {
    const keys = Object.keys(KeyCodes).reduce((_keys, keyCodeKey) => {
        return _keys.concat(KeyCodes[keyCodeKey])
    }, []);
    const randomKeyIndex = Math.floor(Math.random() * keys.length);

    return keys[randomKeyIndex];
};

const getRandomKeyEvent = () => {
    const randomKeyCode = getRandomKeyCode();

    return new KeyboardEvent('keyup', {
        code: randomKeyCode
    });
};

const triggerRandomKeyEvent = () => {
    const randomKeyEvent = getRandomKeyEvent();

    document.dispatchEvent(randomKeyEvent);
};


export const play = () => {
    setInterval(() => {
        delayedCallback(() => {
            triggerRandomKeyEvent();
        });
    }, 1000);
};
