import { delayedCallback } from "../../games/2048/js/services/delay-service";
import { KeyCodes } from "../../games/2048/js/services/keyboard-service";
import hash from "object-hash";

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
  new KeyboardEvent("keyup", {
    code: keyCode,
  });

const logEvent = ({ keyCode, state }) => {
  const stateHash = hash(state);
  const badMove = Boolean(log[stateHash]);

  if (!badMove) {
    log[stateHash] = {
      keyCodes: [keyCode],
      badMoves: [],
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

export const play = (store) => {
  let keyEvent, keyCode;

  setInterval(() => {
    delayedCallback(() => {
      const state = store.getState();
      const badMoveKeyCodes = getBadMovesByState(state) || [];

      keyCode = getRandomKeyCode(badMoveKeyCodes);
      keyEvent = getKeyEvent(keyCode);

      logEvent({
        keyCode,
        state,
      });
      document.dispatchEvent(keyEvent);
    });
  }, 100);
};
