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
import HomeRoute from './routes/home/home-route.component';
import SignUpRoute from './routes/signup/signup-route.component';
import LoginRoute from './routes/login/login-route.component';

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
ko.components.register('home-route', HomeRoute);
ko.components.register('signup-route', SignUpRoute);
ko.components.register('login-route', LoginRoute);


ko.applyBindings();


