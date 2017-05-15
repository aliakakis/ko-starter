/**
 * Bootstrap application
 */
import '../css/styles/sass/screen.scss';
import AppStart from './app-start/app-start.component';

/**
 * Common components for entire app
 */
import AppHeader from './shared/components/app-header/app-header.component';

/**
 * Routes
 */
import HomePage from './routes/home/home-route.component';
import SignUpPage from './routes/signup/signup-route.component';
import LoginPage from './routes/login/login-route.component';

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


