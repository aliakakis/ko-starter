import Router from '../app-routes';

class AppStart {
    constructor() {
        this.router = new Router();
    }
}

export default {
    viewModel: AppStart,
    template: `
        <div data-bind='component: {name: router.currentRoute, params: {}}'></div>
    `
};