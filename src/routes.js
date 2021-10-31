import SignIn from './features/Auth/pages/LoginPage';
import SignUp from './features/Auth/components/FormRegister';
import Home from './features/Home/page/Home';
// import AccountSettings from './features/AccountSetting/AccountSettings';
import Admin from './features/Admin/pages/Admin';
import Manager from './features/Manager/pages/Manager';
import User from './features/User/pages/User';

export const ROUTES = [
    {
        path: "/signup",
        exact: true,
        main: SignUp
    },
    {
        path: "/login",
        exact: true,
        main: SignIn
    },
    {
        path: "/",
        exact: true,
        main: Home
    }
]

export const PRIVATE_ROUTES_ADMIN = [
    {
        path: "/admin/:name",
        exact: true,
        main: Admin
    }
]

export const PRIVATE_ROUTES_MANAGER = [
    {
        path: "/manager/:name",
        exact: true,
        main: Manager
    }
]

export const PRIVATE_ROUTES_USER = [
    {
        path: "/user/:name",
        exact: true,
        main: User
    }
]