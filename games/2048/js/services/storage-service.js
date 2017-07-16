const STORAGE_KEYS = {
    STATE: 'game2048.state'
};

const saveState = (state) => {
    localStorage.setItem(STORAGE_KEYS.STATE, JSON.stringify(state));
};

export const scheduleSaveState = (state) => {
    if (requestIdleCallback in window) {
        window.requestIdleCallback(() => {
            saveState(state);
        });
    } else {
        setTimeout(() => {
            saveState(state);
        }, 1000);
    }
};

export const loadState = () => {
    try {
        const savedState = JSON.parse(localStorage.getItem(STORAGE_KEYS.STATE));

        return savedState || undefined;
    } catch (error) {
        return undefined;
    }
};
