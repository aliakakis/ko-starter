import AppRoutes from './app/app-routes';

import AppHeader from './common/components/app-header';

import Home from './routes-components/home/home';
import SignUp from './routes-components/signup/signup';
import Login from './routes-components/login/login';

ko.components.register('app-routes', AppRoutes);

ko.components.register('app-header', AppHeader);

ko.components.register('home', Home);
ko.components.register('signup', SignUp);
ko.components.register('login', Login);

ko.applyBindings();


