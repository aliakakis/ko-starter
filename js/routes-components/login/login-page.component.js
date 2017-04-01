//import ko from 'knockout';

class Login {
    constructor() {
        this.username = ko.observable("John");
        this.arr = ko.observableArray([1, 2, 3]);
    }

    _loginBtn() {
        this.username("Jack");
    }
}

export default {
    viewModel: Login,
    template: require('./login-page.component.html')
};
