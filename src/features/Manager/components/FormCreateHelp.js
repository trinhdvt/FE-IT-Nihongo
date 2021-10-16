import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function FormCreateHelp(props) {

    const { closeModal } = props;

    const schema = yup.object().shape({
        title: yup.string().required(),
        hospital: yup.string().required(),
        location: yup.string().required(),
        priority: yup.string().required(),
        expected: yup.string().required(),
        contact: yup.string().required(),
        description: yup.string().required()
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitFormLogin = (data) => {

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
                <form className="py-6 px-16 manager-create-user shadow" onSubmit={handleSubmit(submitFormLogin)} >

                    <div className="mt-4 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Title:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter display title"
                                type="text"
                                {...register("title")}
                            />
                            {errors.title &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.title.message}
                                </p>
                            }
                        </div>

                    </div>

                    <div className="mt-6 flex items-center ">
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

                    <div className="mt-6 flex items-center ">
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

                    <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Priority:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter priority"
                                type="text"
                                {...register("priority")}
                            />
                            {errors.priority &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.priority.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Expected:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter expected"
                                type="text"
                                {...register("expected")}
                            />
                            {errors.expected &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.expected.message}
                                </p>
                            }
                        </div>

                    </div>

                    <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Contact:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter contact"
                                type="text"
                                {...register("contact")}
                            />
                            {errors.contact &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.contact.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="mt-6 flex ">
                        <p className="font-medium w-1/3 text-gray-600">More description:</p>
                        <div className="w-full relative">
                            <textarea className="w-full" rows="3"
                                {...register("description")}
                            ></textarea>
                            {errors.description &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.description.message}
                                </p>
                            }
                        </div>
                    </div>


                    <div className="mt-4 flex items-center justify-end">
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
                            Create Help
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default FormCreateHelp;