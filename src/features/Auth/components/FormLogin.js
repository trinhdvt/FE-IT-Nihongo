import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login-Register.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { onLogin } from '../reducers/Auth';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { authApi } from '../constants/auth-api';
import jwt_decode from 'jwt-decode';

function FormLogin(props) {

    const schema = yup.object().shape({
        username: yup.string().required().max(15),
        password: yup.string().required().max(32).min(6),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [mess, setMess] = useState();

    const [err, setErr] = useState(false);

    const [showPass, setShowPass] = useState(false);

    const dispatch = useDispatch();

    const history = useHistory();

    const submitFormLogin = (data) => {

        const urlSearchParams = new URLSearchParams();

        for (const [key, value] of Object.entries(data)) {
            urlSearchParams.append(`${key}`, `${value}`);
        }

        axios.post(authApi.LOGIN, urlSearchParams)
            .then(res => {
                let path;
                const info = jwt_decode(res.data.token);
                dispatch(onLogin({
                    token: res.data.token,
                    info: info
                }));
                if (info.role === "USER") path = `/${info.role.toLowerCase()}/chat`;
                else path = `/${info.role.toLowerCase()}/user-management`;

                history.push(path);
            })
            .catch(err => {
                if (err.response) {
                    setMess(err.response.data.message);
                    setErr(true);
                }
            })
    }

    return (

        <div className="grid grid-cols-1 bg-gray-50 mt-2">
            <div className="mt-4 container-form">
                <img className="h-12 mx-auto w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />

                <h1 className="text-3xl text-center font-bold mt-2">Sign in to your account</h1>
                <p className="text-center font-xs text-gray-400 tracking-tighter">Sign in to continue to App.</p>

                <form className="mt-4 p-8 auth-form shadow-md" onSubmit={handleSubmit(submitFormLogin)} >
                    <div>
                        <label htmlFor="username" className="font-medium">Username</label>
                        <input
                            className="text"
                            autoComplete="off"
                            type="text"
                            id="username"
                            {...register("username", { onChange: () => setErr(false) })}
                        />
                        {errors.username && <p className="text-sm text-red-600 ml-2 tracking-tighter font-semibold">{errors.username.message}</p>}
                    </div>

                    <div className="mt-6">
                        <label htmlFor="password" className="font-medium">Password</label>
                        <div className="password flex items-center">
                            <input
                                className="w-full focus:outline-none focus:border-none"
                                id="password"
                                type={`${showPass ? 'text' : 'password'}`}
                                {...register("password", { onChange: () => setErr(false) })}
                            />
                            <i className={`far fa-eye cursor-pointer duration-300 ${showPass ? 'text-blue-500' : 'text-gray-400  hover:text-gray-600'}`}
                                onClick={() => setShowPass(!showPass)}
                            ></i>
                        </div>
                        {errors.password && <p className="text-sm text-red-600 ml-2 tracking-tighter font-semibold">{errors.password.message}</p>}
                    </div>

                    {(err) && <p className="text-sm text-red-600 ml-2 tracking-tighter font-semibold">{mess}</p>}

                    {/* <div className="flex items-center my-4">
                        <div className="flex items-center">
                            <input name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />

                            <span className="ml-2 block text-sm font-medium text-gray-400">
                                Remember me
                            </span>
                        </div>

                        <div className="text-sm ml-auto my-6">
                            <span className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </span>
                        </div>
                    </div> */}

                    <button
                        className="btn-login mt-6"
                        type="submit"
                    >
                        Sign in
                    </button>

                    <div className="text-sm ml-auto my-6">
                        <span className="cursor-pointer font-medium text-indigo-400 hover:text-indigo-500">
                            Don't have an account?
                        </span>
                        <a href="/sign-up" className="ml-2 font-bold text-indigo-600 hover:text-indigo-700 underline">Sign up</a>
                    </div>

                </form>
            </div>
        </div>

    );
}

export default FormLogin;