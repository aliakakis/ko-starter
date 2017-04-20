/**
 * Bootstrap application
 */
import AppStart from './app-start/app-start';

/**
 * Common components for entire app
 */
import AppHeader from './common/components/app-header';

/**
 * Routes
 */
import Home from './pages/home-page/home-page';
import SignUp from './pages/signup-page/signup-page';
import Login from './pages/login-page/login-page';

/**
 * Bootstrap application component
 */
ko.components.register('app-start', AppStart);

/**
 * Common components
 */
ko.components.register('app-header', AppHeader);

/**
 * Routes components
 */
ko.components.register('home-page', Home);
ko.components.register('signup-page', SignUp);
ko.components.register('login-page', Login);


ko.applyBindings();


