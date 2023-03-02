export const link = (to, data = {}) => {
    history.pushState(data, "", to);
    const pushStateEvnet = new CustomEvent("pushstate");
    window.dispatchEvent(pushStateEvnet);
};
