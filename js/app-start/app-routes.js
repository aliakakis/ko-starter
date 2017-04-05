(function ($) {
    'use strict';

    Sammy('#inductorsApp', function() {
        function loadView(el, url, viewModel) {
            let $view = $("#view");
            if ($view.length) {
                // Use ko.cleanNode($("#view")[0]) if you are not removing the element from the DOM
                ko.removeNode($view[0]);
            }
            el.load(url, function() {
                ko.applyBindings(viewModel, $("#view")[0]);
            });
        }

        this.get('#/', function(context) {
            loadView(context.$element(), 'views/main1.html', new App.viewModels.ViewModel1());
        });

        this.get('#/text', function(context) {
            loadView(context.$element(), 'views/text.html', new App.viewModels.ViewModel2());
        });

        this.get('', function(context) {
            this.redirect('#/');
        });
    }).run();

})(jQuery);
