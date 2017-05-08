class AppRoutes {
    constructor() {
        this.currentRoute = ko.observable('');
        this.appRoutes = Sammy('#app');

        /* START ADD ROUTES */
        this.appRoutes.get('#/', (context) => {
            this.loadRoute('home-page');
        });

        this.appRoutes.get('#/login', (context) => {
            this.loadRoute('login-page');
        });

        this.appRoutes.get('#/signup', (context) => {
            this.loadRoute('signup-page');
        });

        this.appRoutes.get('', (context) => {
            context.redirect('#/');
        });
        /* END ADD ROUTES */

        this.appRoutes.run();
    }

    addRoute = (route) => {
        this.currentRoute(route);
    };

    loadRoute = (route) => {
        this.currentRoute(route);
    };
}

export default AppRoutes;