export const KeyCodes = {
    ArrowUp: 'ArrowUp',
    ArrowRight: 'ArrowRight',
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft'
};

export const getCodeFromKeyboardEvent = (event) => {
    switch (event.code) {
        case 'ArrowUp':
            return KeyCodes.ArrowUp;
        case 'ArrowRight':
            return KeyCodes.ArrowRight;
        case 'ArrowDown':
            return KeyCodes.ArrowDown;
        case 'ArrowLeft':
            return KeyCodes.ArrowLeft;
        default:
            return undefined;
    }
};
