class App {
    constructor() {
        this.base = window.location.pathname.substring(0, window.location.pathname.length - 1);
        this.hashbang = true;
        this.routes = {
            '/': 'home',
            '/login': 'login',
            '/signup': 'signup'
        }
    }
}

export default {
    viewModel: App,
    template: `
        <ko-component-router params="
            routes: routes, 
            base: base,
            hashbang: hashbang"> 
        </ko-component-router>
    `
};


