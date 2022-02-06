const DELAY_MS = 1000;

export const delayedCallback = (callback) => {
  if (requestIdleCallback in window) {
    const id = window.requestIdleCallback(callback);

    return () => {
      window.cancelIdleCallback(id);
    };
  }

  const id = setTimeout(callback, DELAY_MS);

  return () => {
    clearTimeout(id);
  };
};
