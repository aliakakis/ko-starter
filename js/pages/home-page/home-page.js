class HomePage {
    constructor() {
        this.username = ko.observable("John");
        this.arr = ko.observableArray([1, 2, 3]);
    }

    _loginBtn() {
        this.username("Jack");
    }
}

export default {
    viewModel: HomePage,
    template: `
    <div class="card card-signup">
        Home
    </div>`
};
