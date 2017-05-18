class AppHeaderComponent {
    constructor() {
        this.username = ko.observable("John");
        this.arr = ko.observableArray([1, 2, 3]);
    }

    _signUpBtn() {
        this.username("Jack");
    }
}

export default {
    viewModel: AppHeaderComponent,
    template: `
        <div class="ui secondary  menu">
          <a href="#/" class="active item">
            Home
          </a>
          <a href="#/login" class="item">
            Messages
          </a>
          <a href="#/signup" class="item">
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
