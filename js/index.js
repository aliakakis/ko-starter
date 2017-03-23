import AppRoutes from './app/AppRoutes';

import AppHeader from './common/components/AppHeader';

import Home from './routes-components/home/Home';
import SignUp from './routes-components/signup/SignUp';
import Login from './routes-components/login/Login';

ko.components.register('app-routes', AppRoutes);

ko.components.register('app-header', AppHeader);

ko.components.register('home', Home);
ko.components.register('signup', SignUp);
ko.components.register('login', Login);

ko.applyBindings();


