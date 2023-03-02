class WebComponent {
    $target;
    state = {};
    props;

    constructor($target, props) {
        this.$target = $target;
        this.props = props;
        this.setHandler();
    }

    async init() {
        await this.setup();
        this.render();
        await this.mount();
    }

    async setup() {}

    render() {
        this.$target.innerHTML = this.template();
    }

    setHandler() {}
    addHandler(selector, eventType, cb) {
        this.$target.addEventListener(eventType, (e) => {
            if (!e.target.closest(selector)) return;
            cb(e);
        });
    }
    async mount() {}
    template() {
        return "";
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
}

export default WebComponent;
