import AppRoutes from './app/app-routes.component';

import AppHeader from './common/components/app-header.component';

import Home from './routes-components/home/home-page.component';
import SignUp from './routes-components/signup/signup-page.component';
import Login from './routes-components/login/login-page.component';

ko.components.register('app-header', AppHeader);

ko.components.register('home-page', Home);
ko.components.register('signup-page', SignUp);
ko.components.register('login-page', Login);

ko.components.register('app-routes', AppRoutes);

ko.applyBindings();

/*class AppModule {
    constructor() {
        this.currentRoute = ko.observable();
        this.routes = {
            '/home': this.setRoute('home-page')
        };

        this.router = Router(this.routes).init();
        console.log("AppModule", this.router);
    }
    setRoute(route) {
        this.currentRoute(route);
    }
}

let app = new AppModule();*/


