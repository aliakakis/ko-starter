//import ko from 'knockout';

class AppHeader {
    constructor() {
        this.username = ko.observable("John");
        this.arr = ko.observableArray([1, 2, 3]);
    }

    _signUpBtn() {
        this.username("Jack");
    }
}

export default {
    viewModel: AppHeader,
    template: `
        <nav class="teal lighten-2">
            <div class="nav-wrapper">
                <a data-bind="path: '/'" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a data-bind="path: '/signup'">Sass</a></li>
                    <li><a data-bind="path: '/login'">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    `
};
