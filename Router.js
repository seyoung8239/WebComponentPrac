import Main from "./page/Main.js";
import NewMember from "./page/NewMember.js";
import NotFound from "./page/NotFound.js";

const URL_PAGE_MAP = {
    "/": Main,
    "/new-member": NewMember,
    404: NotFound,
};

class Router {
    $container;
    constructor($container) {
        this.$container = $container;
        this.setHandler();
    }
    async init() {
        await this.render();
    }
    setHandler() {
        window.addEventListener("popstate", this.render);
        window.addEventListener("pushstate", this.render);
    }
    render = async () => {
        const path = URL_PAGE_MAP.hasOwnProperty(location.pathname)
            ? location.pathname
            : "404";
        const CurrentPage = URL_PAGE_MAP[path];
        const currentPage = new CurrentPage(this.$container);
        await currentPage.init();
    };
}

export default Router;
