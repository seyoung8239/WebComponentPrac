const emit = (eventType) => {
    const ev = new CustomEvent(eventType);
    document.dispatchEvent(ev);
};

export const createStore = (name, naiveStore) => {
    return new Proxy(naiveStore, {
        set: (obj, p, v) => {
            if (obj.hasOwnProperty(p)) {
                obj.hasOwnProperty(p) && (obj[p] = v);
                emit(name);
            }
            return true;
        },
    });
};
