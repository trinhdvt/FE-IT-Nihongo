import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES, PRIVATE_ROUTES_ADMIN, PRIVATE_ROUTES_MANAGER, PRIVATE_ROUTES_USER } from './routes';
import Header from './components/header';
import { useSelector } from 'react-redux';

function App() {

	const token = useSelector(auth => auth.Auth.token);

	const role = useSelector(auth => auth.Auth.info ? auth.Auth.info.role : "");

	const isLoggedIn = () => {
		return token !== "";
	}

	return (
		<Router>
			<div className="h-screen bg-gray-50 ">
				<Header />

				<div style={{ height: "calc(100vh - 90px)" }}>
					<Switch>
						{
							showRotesPublic(ROUTES)
						}
						{
							showRotesPrivateAdmin(PRIVATE_ROUTES_ADMIN, isLoggedIn(), role)
						}
						{
							showRotesPrivateManager(PRIVATE_ROUTES_MANAGER, isLoggedIn(), role)
						}
						{
							showRotesPrivateUser(PRIVATE_ROUTES_USER, isLoggedIn(), role)
						}
					</Switch>
				</div>
			</div>
		</Router>
	)
}
const showRotesPrivateAdmin = (routes, isLoggedIn, role) => {
	var result = null;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (<Route
				key={index}
				path={route.path}
				exact
				render={props => (isLoggedIn && role === "ADMIN") ? <route.main {...props} /> :
					<Redirect to={{
						pathname: '',
						state: { from: props.location }
					}} />}
			/>)

		})
	}
	return result;
}

const showRotesPrivateManager = (routes, isLoggedIn, role) => {
	var result = null;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (<Route
				key={index}
				path={route.path}
				exact
				render={props => (isLoggedIn && role === "MANAGER") ? <route.main {...props} /> :
					<Redirect to={{
						pathname: '',
						state: { from: props.location }
					}} />}
			/>)

		})
	}
	return result;
}

const showRotesPrivateUser = (routes, isLoggedIn, role) => {
	var result = null;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (<Route
				key={index}
				path={route.path}
				exact
				render={props => (isLoggedIn && role === 'USER') ? <route.main {...props} /> :
					<Redirect to={{
						pathname: '',
						state: { from: props.location }
					}} />}
			/>)

		})
	}
	return result;
}


const showRotesPublic = (routes) => {
	var result = null;
	if (routes.length > 0) {
		result = routes.map((route, index) => {
			return (<Route
				key={index}
				path={route.path}
				exact={route.exact}
				render={props => <route.main {...props} />}
			/>)

		})
	}
	return result;
}

export default App;
