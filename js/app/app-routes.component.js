import ko from 'knockout';

class App {
    constructor() {
        this.currentRoute = ko.observable();

        this.setRoute = function(page) {
            this.currentRoute(arguments[0]+'-page');
        };

        this.routes = {
            '/:page': this.setRoute,
            '/login': this.setRoute,
            '/signup': this.setRoute
        };

        this.router = Router(this.routes).init();
        console.log(this.router);
    }

    /*setRoute(route) {
        this.currentRoute(route);
    }*/
}

export default {
    viewModel: App,
    template: `
        <div data-bind='component: {name: currentRoute, params: {}'></div>
    `
};


