import AppSidebarStore from '../../../stores/shared/app-sidebar/app-sidebar.store';

class AppHeaderComponent {
    constructor() {
        this.username = ko.observable("John");
        this.arr = ko.observableArray([1, 2, 3]);
        this.appSidebarStore = new AppSidebarStore();
    }

    _signUpBtn() {
        this.username("Jack");
    }

    _changeTab() {
        this.appSidebarStore.newTab("newTab 1");
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
          <a data-bind="text: appSidebarStore.newTab, click: _changeTab" href="#" class="item">
            
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
