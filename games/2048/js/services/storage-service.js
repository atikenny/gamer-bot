import { delayedCallback } from './delay-service';

const STORAGE_KEYS = {
  STATE: 'game2048.state'
};

const saveState = (state) => {
  localStorage.setItem(STORAGE_KEYS.STATE, JSON.stringify(state));
};

export const scheduleSaveState = (state) => {
  delayedCallback(() => {
    saveState(state);
  });
};

export const loadState = () => {
  try {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEYS.STATE));

    return savedState || undefined;
  } catch (error) {
    return undefined;
  }
};
