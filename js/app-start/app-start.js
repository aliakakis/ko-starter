import Router from '../app-routes';
const router = new Router();

class AppStart {
    constructor() {
        this.currentRoute = router.currentRoute;
    }
}

export default {
    viewModel: AppStart,
    template: `
        <div data-bind='component: {name: currentRoute, params: {}}'></div>
    `
};