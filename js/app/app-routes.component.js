//import ko from 'knockout';

class App {
    constructor() {
        this.currentRoute = ko.observable('');
        this.routes = {
            '/': this.setRoute,
            '/login': this.setRoute,
            '/signup': this.setRoute
        };
        this.router = Router(this.routes).init();
    }

    setRoute = () => {
        this.currentRoute('login-page');
        console.log(this.currentRoute());
    }
}

export default {
    viewModel: App,
    template: `
        <div data-bind='component: {name: currentRoute, params: {}'></div>
    `
};


