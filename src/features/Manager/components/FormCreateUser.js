import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function FormCreateUser(props) {

    const { closeModal } = props;

    const schema = yup.object().shape({
        displayName: yup.string().required(),
        hospital: yup.string().required(),
        location: yup.string().required(),
        department: yup.string().required(),
        position: yup.string().required(),
        channel: yup.string().required()
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitFormCreateUser = (data) => {
        console.log(data);
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
                                {...register("displayName")}
                            />
                            {errors.displayName &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    display name is a required field
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
                                {...register("hospital")}
                            />
                            {errors.hospital &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.hospital.message}
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
                                {...register("channel")}
                            />
                            {errors.channel &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.channel.message}
                                </p>
                            }
                        </div>
                    </div>

                    {/* <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3">Code:</p>

                        <div className="flex items-center w-full">
                            <input className="w-full"
                                type="text"
                                readOnly
                                {...register("code")}
                            />
                           <button className="btn-code">
                                Code
                            </button>
                        </div>
                    </div> */}


                    <div className="mt-6 flex items-center justify-end">
                        <button
                            type="reset"
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