export const KeyCodes = {
  ArrowUp: 'ArrowUp',
  ArrowRight: 'ArrowRight',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  KeyR: 'KeyR'
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
    case 'KeyR':
      return KeyCodes.KeyR;
    default:
      return undefined;
  }
};
