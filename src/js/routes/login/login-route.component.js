class LoginRouteComponent {
    constructor() {
        this.username = ko.observable("John");
        this.arr = ko.observableArray([1, 2, 3]);
    }

    _loginBtn() {
        this.username("Jack");
    }
}

export default {
    viewModel: LoginRouteComponent,
    template: require('html-loader!./login-route.component.html')
};
