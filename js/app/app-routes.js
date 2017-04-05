const Router = ko.router.default;

Router.setConfig({
    // base path app runs under, i.e. '/app'
    base: '',

    // hashbang vs HTML5 (pushState) routing
    hashbang: true,

    // CSS class added to elements with a path binding that resolves to the current
    // page — useful for styling navbars and tabs
    activePathCSSClass: 'active-path'
});

Router.useRoutes({
    routes: {
        '/': 'home',
        '/login': 'login',
        '/signup': 'signup'
    }
});

class App {
    constructor() {

    }
}

export default {
    viewModel: App,
    template: `<ko-component-router></ko-component-router>`
};


