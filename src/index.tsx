import Inferno from 'inferno';
import {IndexRoute, Route, Router} from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './styles/oyo.scss';
import {Configuration} from './pages/configuration';
import {Settings} from './pages/settings';

const browserHistory = createBrowserHistory();

function NoMatch() {
	return <div>I am a no Match component</div>;
}

const routes = (
	<Router history={ browserHistory }>
		<IndexRoute component={ Settings }/>
		<Route path="users" component={ Configuration }/>
		<Route path="*" component={ NoMatch }/>
	</Router>
);

Inferno.render(routes, document.getElementById('app'));