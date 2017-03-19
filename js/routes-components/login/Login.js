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
    template: `
    <div class="card card-signup">
        <form class="form" method="" action="">
            <div class="header header-primary text-center">
                <h4>Log In</h4>
            </div>
            <div class="content">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">email</i>
                    </span>
                    <input type="text" class="form-control" placeholder="Email...">
                </div>

                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">lock_outline</i>
                    </span>
                    <input type="password" placeholder="Password..." class="form-control" />
                </div>

                <!-- If you want to add a checkbox to this form, uncomment this code

                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="optionsCheckboxes" checked>
                        Subscribe to newsletter
                    </label>
                </div> -->
            </div>
            <div class="footer text-center">
                <a href="#pablo" class="btn btn-simple btn-primary btn-lg">Continue</a>
            </div>
        </form>
    </div>`
};
