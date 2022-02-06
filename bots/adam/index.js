import { delayedCallback } from '../../games/2048/services/delay-service';
import { KeyCodes } from '../../games/2048/services/keyboard-service';
import hash from 'object-hash';

const getRandomKeyCode = (filterKeyCodes) => {
  const keys = Object.keys(KeyCodes);

  if (filterKeyCodes.length !== keys.length) {
    keys.filter((keyCode) => filterKeyCodes.indexOf(keyCode) === -1);
  }

  keys.reduce((_keys, keyCodeKey) => _keys.concat(KeyCodes[keyCodeKey]), []);
  const randomKeyIndex = Math.floor(Math.random() * keys.length);

  return keys[randomKeyIndex];
};

let hashLog = [];
let log = {};
const freeMemory = () => {
  if (hashLog.length > 10000) {
    hashLog = hashLog.slice(-1);
  }

  if (Object.keys(log).length > 10000) {
    log = Object.keys(log)
      .filter(({ badMoves }) => badMoves.length)
      .map((key) => log[key]);
  }
};

const getKeyEvent = (keyCode) =>
  new KeyboardEvent('keyup', {
    code: keyCode
  });

const logEvent = ({ keyCode, state }) => {
  const stateHash = hash(state);
  const badMove = Boolean(log[stateHash]);

  if (!badMove) {
    log[stateHash] = {
      keyCodes: [keyCode],
      badMoves: []
    };
    hashLog.push(stateHash);
  } else {
    const previousStateHash = hashLog[hashLog.length - 1];
    const repeatLogItem = log[previousStateHash];
    const badMoveKeyCode = repeatLogItem.keyCodes.slice(-1)[0];

    repeatLogItem.badMoves.push(badMoveKeyCode);
    repeatLogItem.keyCodes.push(badMoveKeyCode);
  }

  freeMemory();
};

const getBadMovesByState = (state) => {
  const stateHash = hash(state);
  const logEntry = log[stateHash];

  return logEntry && logEntry.badMoves;
};

let interval;
let cancelMove;
const play = (state, moveIntervalMS) => {
  let keyEvent, keyCode;

  interval = setInterval(() => {
    cancelMove = delayedCallback(() => {
      const badMoveKeyCodes = getBadMovesByState(state) || [];

      keyCode = getRandomKeyCode(badMoveKeyCodes);
      keyEvent = getKeyEvent(keyCode);

      logEvent({
        keyCode,
        state
      });
      document.dispatchEvent(keyEvent);
    });
  }, moveIntervalMS);
};

const stop = () => {
  if (cancelMove) {
    cancelMove();
  }

  clearInterval(interval);
};

export default {
  name: 'Adam',
  play,
  stop
};
