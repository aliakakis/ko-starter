export default class LoginStore {
    constructor() {
        this.username = ko.observable("John");
        this.arr = ko.observableArray([1, 2, 3]);
    }

    _loginBtn() {
        this.username("Jack");
    }
}