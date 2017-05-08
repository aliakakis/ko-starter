/**
 * Bootstrap application
 */
import AppStart from './app-start/app-start.component';

/**
 * Common components for entire app
 */
import AppHeader from './common/components/app-header.component';

/**
 * Routes
 */
import HomePage from './pages/home-page/home-page.component';
import SignUpPage from './pages/signup-page/signup-page.component';
import LoginPage from './pages/login-page/login-page.component';

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


