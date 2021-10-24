import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { onLogout } from '../../../features/Auth/reducers/Auth';
import './HeaderNavigation.css';
import { onEditProfile } from '../../../reducers/EditProfile';

function HeaderNavigation(props) {

    const location = useLocation();

    const fullName = useSelector(auth => auth.Auth.info ? auth.Auth.info.full_name : "");

    const roleAccount = useSelector(auth => auth.Auth.info ? auth.Auth.info.role : "");

    const history = useHistory();

    const dispatch = useDispatch();

    const [dropdownUser, setDropdownUser] = useState(false);

    const [changeClass, setChangeClass] = useState(false);

    const [role, setRole] = useState();

    useEffect(() => {
        if (roleAccount !== "" && typeof roleAccount !== "undefined")
            setRole(roleAccount.toLowerCase());
    }, [roleAccount])

    const Logout = () => {
        dispatch(onLogout());
        history.push('/login');
    }

    const ScrollChangeClass = () => {
        window.scrollY > 10 ? setChangeClass(true) : setChangeClass(false);
    }

    useEffect(() => {
        // adding the event when scroll change background
        window.addEventListener("scroll", ScrollChangeClass)
    })

    return (
        <div className={`header fixed w-full z-50 ${changeClass ? 'shadow-md bg-gray-50' : ''} ${location.pathname !== '/' ? 'mb-2 shadow-md bg-gray-50' : ''}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center py-4 justify-between">
                    <Link to="/">
                        <img
                            className={`logo h-12 w-auto cursor-pointer ${location.pathname === '/' ? 'animate-pulse' : ''}`}
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                    </Link>

                    {typeof fullName === 'undefined' ?
                        <div className="flex items-center">
                            <Link
                                to="/login"
                                className={`header ${(!changeClass && location.pathname === '/') ?
                                    'whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                                    : 'text-base font-medium text-gray-500 hover:text-gray-700'} `}
                            >
                                Sign in
                            </Link>
                            <Link
                                to="/signup"
                                className="ml-8 animate-pulse whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign up
                            </Link>
                        </div> :

                        <div className="relative inline-block text-left">
                            <div onClick={() => setDropdownUser(!dropdownUser)}>
                                <div className="cursor-pointer flex items-center rounded w-full py-2 text-xl font-medium text-gray-700 ">
                                    <p className={`${(!changeClass && location.pathname === '/') ? 'text-white' : 'text-gray-500 hover:text-gray-700'} `}>
                                        {fullName}
                                    </p>
                                    <i className={`fas fa-chevron-down ml-4 ${(!changeClass && location.pathname === '/') ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`}></i>
                                </div>
                            </div>

                            {dropdownUser && <div className="z-10 origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {role !== "user" ?
                                    <div className="divide-y divide-fuchsia-300" role="none">
                                        <Link
                                            to={`/${role}/user-management`}
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 rounded-t-md transition duration-300 ease-in-out flex items-center"
                                        >
                                            <i className="fas fa-users-cog w-1/5"></i>
                                            <span>User Manager</span>
                                        </Link>
                                        <Link
                                            to={`/${role}/channel-management`}
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                        >
                                            <i className="fas fa-server w-1/5"></i>
                                            <span>Channel Manager</span>
                                        </Link>
                                        <Link
                                            to={`/${role}/help-management`}
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                        >
                                            <i class="fas fa-medkit w-1/5"></i>
                                            <span>Help Manager</span>

                                        </Link>
                                        <button
                                            className="text-gray-700 w-full rounded-b-md text-left px-4 py-2 text-sm hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                            onClick={Logout}
                                        >
                                            <i class="fas fa-sign-out-alt w-1/5"></i>
                                            <span>Sign out</span>
                                        </button>
                                    </div> :
                                    <div className="divide-y divide-fuchsia-300" role="none">
                                        <Link
                                            to={`/${role}/profile`}
                                            className="cursor-pointer text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 rounded-t-md transition duration-300 ease-in-out flex items-center"
                                            onClick={() => {
                                                dispatch(onEditProfile());
                                                setDropdownUser(!dropdownUser);
                                            }}
                                        >
                                            <i className="fas fa-user-edit w-1/5"></i>
                                            <span>Edit Profile</span>
                                        </Link>
                                        <Link
                                            to={`/${role}/chat`}
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                        >
                                            <i className="fas fa-server w-1/5"></i>
                                            <span>Chat</span>
                                        </Link>
                                        <Link
                                            to={`/${role}/help`}
                                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                        >
                                            <i class="fas fa-medkit w-1/5"></i>
                                            <span>Help</span>

                                        </Link>
                                        <button
                                            className="text-gray-700 w-full rounded-b-md text-left px-4 py-2 text-sm hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                            onClick={Logout}
                                        >
                                            <i class="fas fa-sign-out-alt w-1/5"></i>
                                            <span>Sign out</span>
                                        </button>
                                    </div>
                                }
                            </div>}
                        </div>
                    }
                </div>
            </div>
        </div>

    );
}

export default HeaderNavigation;