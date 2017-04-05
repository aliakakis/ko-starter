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
        <div class="ui secondary  menu">
          <a class="active item">
            Home
          </a>
          <a class="item">
            Messages
          </a>
          <a class="item">
            Friends
          </a>
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="Search...">
                <i class="search link icon"></i>
              </div>
            </div>
            <a class="ui item">
              Logout
            </a>
          </div>
        </div>
    `
};
