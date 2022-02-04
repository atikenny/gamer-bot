const DELAY_MS = 1000;

export const delayedCallback = (callback) => {
  if (requestIdleCallback in window) {
    window.requestIdleCallback(callback);
  } else {
    setTimeout(callback, DELAY_MS);
  }
};
