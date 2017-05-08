import Router from '../app-routes.component';

class AppStartComponent {
    constructor() {
        this.router = new Router();
    }
}

export default {
    viewModel: AppStartComponent,
    template: `
        <div data-bind='component: {name: router.currentRoute, params: {}}'></div>
    `
};