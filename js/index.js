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
import HomePage from './pages/home-page/home-page';
import SignUpPage from './pages/signup-page/signup-page';
import LoginPage from './pages/login-page/login-page';

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
ko.components.register('home-page', HomePage);
ko.components.register('signup-page', SignUpPage);
ko.components.register('login-page', LoginPage);


ko.applyBindings();


