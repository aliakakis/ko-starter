export default class SignUpStore {
    constructor() {
        this.username = ko.observable("John");
        this.arr = ko.observableArray([1, 2, 3]);
    }

    _signUpBtn() {
        this.username("Jack");
    }
}