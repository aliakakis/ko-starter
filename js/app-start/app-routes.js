class AppRoutes {
    constructor() {
        this.currentRoute = ko.observable('login-page');
        const appRoutes = Sammy('#inductorsApp');

        appRoutes.get('#/', (context) => {
            this.loadRoute('login-page');
        });

        appRoutes.get('#/login', (context) => {
            this.loadRoute('login-page');
        });

        appRoutes.get('#/signup', (context) => {
            this.loadRoute('signup-page');
        });

        appRoutes.get('', (context) => {
            context.redirect('#/');
        });

        appRoutes.run();
    }

    loadRoute = (route) => {
        this.currentRoute(route);
    };
}

export default {
    viewModel: AppRoutes,
    template: `
        <div data-bind='component: {name: currentRoute, params: {}}'></div>
    `
};