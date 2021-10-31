import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { authApi } from '../constants/admin-api';
import axios from 'axios';
import { useSelector } from 'react-redux';
import swal from 'sweetalert'

function FormCreateUser(props) {

    const { closeModal } = props;

    const token = useSelector(auth => auth.Auth.token);

    //const [code,setCode] = useState("");

    const schema = yup.object().shape({
        name: yup.string().required().max(45),
        hospitalId: yup.string().required(),
        location: yup.string().required().max(255),
        department: yup.string().required().max(45),
        position: yup.string().required(),
        channelId: yup.string().required()
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitFormCreateUser = (data) => {
        const urlSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(data)) {
            urlSearchParams.append(`${key}`, `${value}`);
        }

        axios.post(authApi.DECODE, urlSearchParams, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                //setCode(res.data.code);
                swal("Account successfully created!", `${res.data.code}`, "success");
                reset();
            })
            .catch(err => console.log(err))
    }

    const CloseModal = () => {
        reset();
        closeModal();
    }

    return (
        <div className="absolute top-0 w-full shadow rounded-md border border-gray-300 bg-white">
            <div className="absolute right-6 top-3 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out text-xl"
                onClick={CloseModal}
            >
                <i className="fas fa-times"> </i>
            </div>

            <div className="">
                <form className="py-6 px-16 form-create-user shadow" onSubmit={handleSubmit(submitFormCreateUser)} >

                    <div className="mt-6 flex items-center">
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
                        <p className="font-medium w-1/3 text-gray-600">Hospital:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter hospital name"
                                type="text"
                                {...register("hospitalId")}
                            />
                            {errors.hospitalId &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.hospitalId.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="mt-8 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Location:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter location"
                                type="text"
                                {...register("location")}
                            />
                            {errors.location &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.location.message}
                                </p>
                            }
                        </div>

                    </div>

                    <div className="mt-8 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Department:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter department"
                                type="text"
                                {...register("department")}
                            />
                            {errors.department &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.department.message}
                                </p>
                            }
                        </div>

                    </div>

                    <div className="mt-8 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Position:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter position"
                                type="text"
                                {...register("position")}
                            />
                            {errors.position &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.position.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="mt-8 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Channel:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter channel"
                                type="text"
                                {...register("channelId")}
                            />
                            {errors.channelId &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.channelId.message}
                                </p>
                            }
                        </div>
                    </div>

                    {/* <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Code:</p>

                        <div className="flex items-center w-full">
                            <input
                                className="w-full"
                                value={code}
                                type="text"
                                readOnly
                                {...register("code")}
                            />
                        </div>
                    </div> */}


                    <div className="mt-8 flex items-center justify-end">
                        <button
                            type="reset"
                            //onClick={() => setCode("")}
                            className="mr-4 justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                            Reset
                        </button>

                        <button
                            type="submit"
                            className="justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                            Create User
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default FormCreateUser;