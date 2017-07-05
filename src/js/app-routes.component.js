class AppRoutesComponent {
    constructor() {
        this.currentRoute = ko.observable('home-route');
        this.appRoutes = Sammy('#app');

        /* START ADD ROUTES */
        this.appRoutes.get('#/', (context) => {
            this.loadRoute('home-route');
        });

        this.appRoutes.get('#/login', (context) => {
            this.loadRoute('login-route');
        });

        this.appRoutes.get('#/signup', (context) => {
            this.loadRoute('signup-route');
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

export default AppRoutesComponent;