import AppRoutes from './app/AppRoutes';
import Home from './components/home/Home';
import AppHeader from './components/common/AppHeader';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';

ko.components.register('app-routes', AppRoutes);
ko.components.register('home', Home);
ko.components.register('app-header', AppHeader);
ko.components.register('signup', SignUp);
ko.components.register('login', Login);

ko.applyBindings();


