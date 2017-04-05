//import ko from 'knockout';

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
    template: require('./signup-page.html')
};
