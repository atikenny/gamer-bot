import { delayedCallback } from './delay-service';

const STORAGE_KEYS = {
  STATE: 'games/2048.state'
};

const saveState = (state) => {
  localStorage.setItem(STORAGE_KEYS.STATE, JSON.stringify(state));
};

const scheduleSaveState = (state) => {
  delayedCallback(() => {
    saveState(state);
  });
};

const loadState = () => {
  try {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEYS.STATE));

    return savedState || undefined;
  } catch (error) {
    return undefined;
  }
};

export { scheduleSaveState, loadState };
