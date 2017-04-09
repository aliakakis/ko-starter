import AppStart from './app-start/app-start';

import AppHeader from './common/components/app-header';
import Home from './pages/home-page/home-page';
import SignUp from './pages/signup-page/signup-page';
import Login from './pages/login-page/login-page';

ko.components.register('app-header', AppHeader);
ko.components.register('home-page', Home);
ko.components.register('signup-page', SignUp);
ko.components.register('login-page', Login);

ko.components.register('app-start', AppStart);

ko.applyBindings();


