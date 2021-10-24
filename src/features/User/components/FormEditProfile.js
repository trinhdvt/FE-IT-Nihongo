import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { authApi } from '../constants/admin-api';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import swal from 'sweetalert'
import {closeEditProfile} from '../../../reducers/EditProfile';
function FormEditProfile(props) {

    // const token = useSelector(auth => auth.Auth.token);

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        name: yup.string().required().max(45),
        avatarURL: yup.string().required(),
        email: yup.string().required().max(255),
        WorkPhoneNumber: yup.string().required().max(45),
        PersonalPhoneNumber: yup.string().required(),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitFormUpdateProfile = (data) => {

    }

    return (
        <div className="absolute top-0 left-0 w-full h-full shadow rounded p-4 border border-gray-300 bg-white">
            <div className="absolute right-6 top-3 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out text-xl"
                onClick={() => dispatch(closeEditProfile())}
            >
                <i className="fas fa-times"> </i>
            </div>
            <form className=" form-create-user" onSubmit={handleSubmit(submitFormUpdateProfile)} >
                <div className="px-10">
                    <div className="mt-12 flex items-center">
                        <p className="font-medium w-1/3 text-gray-600">Display Name:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter display name"
                                type="text"
                                {...register("name")}
                            />
                            {errors.name &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.name.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="mt-8 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Avatar URL:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter avatar URL"
                                type="text"
                                {...register("avatarURL")}
                            />
                            {errors.avatarURL &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.avatarURL.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="mt-8 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Email:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter email"
                                type="text"
                                {...register("email")}
                            />
                            {errors.email &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.email.message}
                                </p>
                            }
                        </div>

                    </div>

                    <div className="mt-8 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Work Phone Number:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter Work Phone Number"
                                type="text"
                                {...register("WorkPhoneNumber")}
                            />
                            {errors.WorkPhoneNumber &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.WorkPhoneNumber.message}
                                </p>
                            }
                        </div>

                    </div>

                    <div className="mt-8 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Personal Phone Number:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter Personal Phone Number"
                                type="text"
                                {...register("PersonalPhoneNumber")}
                            />
                            {errors.PersonalPhoneNumber &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.PersonalPhoneNumber.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="text-right mt-6">
                        <button
                            type="reset"
                            className="mr-4 justify-center px-6 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="justify-center px-6 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                            Save
                        </button>
                    </div>

                </div>

            </form>
        </div>
    );
}

export default FormEditProfile;