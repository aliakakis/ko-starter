class SignUp {
    constructor() {
        this.model = ko.observe({
            firstName: 'Bob',
            lastName: 'Doe',
            cars: [{
                make: 'Ford',
                model: 'F150'
            }, {
                make: 'BMW',
                model: '328i'
            }]
        });
    }

    _signUpBtn(e) {
        //this.model.firstName = "Jack";
        //this.model.cars[1].make = "Toyota";
        console.dir(this.model.firstName);
        console.dir(this.model.cars);
    }
}

export default {
    viewModel: SignUp,
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
                    <input data-bind="textInput: model.firstName" type="text" class="form-control" placeholder="Email...">
                </div>
                
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">email</i>
                    </span>
                    <input data-bind="textInput: model.cars[1].make" type="text" class="form-control" placeholder="Email...">
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
                <a href="#pablo" data-bind="click: _signUpBtn" class="btn btn-simple btn-primary btn-lg">Continue</a>
            </div>
        </form>
    </div>`
};
