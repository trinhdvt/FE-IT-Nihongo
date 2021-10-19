import React, { useState } from 'react';
import './Login-Register.css'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

function FormRegister(props) {

    const history = useHistory();

    const schema = yup.object().shape({
        code: yup.string().required().max(36),
        username: yup.string().required().max(15),
        password: yup.string().required().min(6).max(32),
        acceptConditions: yup.boolean().isTrue()
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [checkCode, setCheckCode] = useState();

    const [showPass, setShowPass] = useState(false);

    const submitFormRegister = (data) => {
        console.log(data)
        // axios.post('http://localhost:4000/auth/sign-up', {
        //     ...data
        // }).then(() => {
        //     history.push('/login');
        // }).catch(err => console.log(err))
    }

    const CheckCode = () => {
        setCheckCode(true);
    }

    return (
        <div className="grid grid-cols-1 bg-gray-50 mt-2">
            <div className="mt-4 container-form">
                <img className="h-12 mx-auto w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />

                <h1 className="text-3xl text-center font-bold mt-2">Register Account</h1>

                <p className="text-center font-xs text-gray-400 tracking-tighter">Get your free account now.</p>

                <form className="mt-4 p-4 auth-form shadow-md" onSubmit={handleSubmit(submitFormRegister)}>

                    <div className="mt-6">
                        <label htmlFor="code" className="font-medium">Given Code</label>
                        <div className="flex items-center">
                            <input
                                id="code"
                                className="mr-4 text"
                                type="text"
                                {...register("code")}
                            />
                            <button className="btn-verify" onClick={CheckCode}>
                                Verify
                            </button>
                        </div>
                        {(errors.code || checkCode === false) && <p className="text-sm text-red-600 ml-2 tracking-tighter font-semibold">{errors.code.message}</p>}
                        {checkCode === true && <p className="text-sm text-blue-500 ml-2 tracking-tighter font-semibold">Code has been verify successfully!</p>}
                    </div>

                    <div className="mt-6">
                        <label htmlFor="username" className="font-medium">Username</label>
                        <input
                            className="text"
                            type="text"
                            id="username"
                            {...register("username")}
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
                                {...register("password")}
                            />
                            <i className={`far fa-eye cursor-pointer duration-300 ${showPass ? 'text-blue-500' : 'text-gray-400  hover:text-gray-600'}`}
                                onClick={() => setShowPass(!showPass)}
                            ></i>
                        </div>
                        {errors.password && <p className="text-sm text-red-600 ml-2 tracking-tighter font-semibold">{errors.password.message}</p>}
                    </div>

                    <button className="mt-4 text-white bg-indigo-600 text-center w-full py-2 border border-gray-300 rounded-md"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>

    );
}

export default FormRegister;