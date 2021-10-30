import React, { useState } from 'react';
import './Login-Register.css'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { authApi } from '../constants/auth-api';
import swal from 'sweetalert';

function FormRegister(props) {

    const history = useHistory();

    const schema = yup.object().shape({
        username: yup.string().required().max(15),
        password: yup.string().required().min(6).max(32),
        code: yup.string().required()
    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const watchAllFields = watch();

    const [checkCode, setCheckCode] = useState();

    const [showPass, setShowPass] = useState(false);

    const [mess, setMess] = useState();

    const [err, setErr] = useState(false);

    const submitFormRegister = (data) => {
        if (checkCode) {
            const urlSearchParams = new URLSearchParams();

            for (const [key, value] of Object.entries(data)) {
                urlSearchParams.append(`${key}`, `${value}`);
            }

            axios.post(authApi.SIGNUP, urlSearchParams)
                .then(res => {
                    swal({
                        title: "Account successfully created!",
                        text: "Do you want to go back to the login page?",
                        icon: "success",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                history.push('/login')
                            }
                        });
                })
                .catch(err => {
                    if (err.response) {
                        setMess(err.response.data.message);
                        setErr(true);
                    }
                })
        } else {
            setMess("Please verify the code!!!");
            setErr(true);
        }
    }

    const CheckCode = () => {
        setErr(false);
        let code = watchAllFields.code;
        try {
            axios.get(authApi.CHECK_CODE(code))
                .then(() => setCheckCode(true))
                .catch(err => {
                    setCheckCode(false);
                    if (err.response) {
                        setMess(err.response.data.message);
                        setErr(true);
                    }
                })
        } catch (err) {

        }

    }

    return (
        <div className="grid grid-cols-1 bg-gray-50 mt-2">
            <div className="mt-4 container-form">
                <img className="h-12 mx-auto w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />

                <h1 className="text-3xl text-center font-bold mt-2">Register Account</h1>

                <p className="text-center font-xs text-gray-400 tracking-tighter">Get your free account now.</p>

                <div className="mt-4 p-4 auth-form shadow-md">
                    <form className="" onSubmit={handleSubmit(submitFormRegister)}>
                        <div className="mt-6">
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

                        <div className="mt-6">
                            <label htmlFor="code" className="font-medium">Given Code</label>
                            <div className="flex items-center">
                                <input
                                    id="code"
                                    className="mr-4 text"
                                    type="text"
                                    {...register("code", {
                                        onChange: () => {
                                            setErr(false);
                                            setCheckCode();
                                        }
                                    })}
                                />
                                <button className="btn-verify" onClick={CheckCode}>
                                    Verify
                                </button>
                            </div>
                            {errors.code && <p className="text-sm text-red-600 ml-2 tracking-tighter font-semibold">{errors.code.message}</p>}
                            {checkCode && <p className="text-sm text-blue-500 ml-2 tracking-tighter font-semibold">Code has been verify successfully!</p>}
                        </div>
                        {err && <p className="text-sm mt-2 text-red-600 ml-2 tracking-tighter font-semibold">{mess}</p>}

                        <button className="mt-8 font-medium text-white bg-indigo-600 text-center w-full py-2 border border-gray-300 rounded-md"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default FormRegister;