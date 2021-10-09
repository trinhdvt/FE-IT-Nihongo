import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormCreateUser(props) {

    const { closeModal } = props;

    const [err, setErr] = useState(true);

    const { register, handleSubmit, reset } = useForm();

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
                <form className="py-6 px-16 form-create-user shadow" onSubmit={handleSubmit(submitFormLogin)} >

                    <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3">Display Name:</p>
                        <input className=""
                            placeholder="Enter display name"
                            type="text"
                            {...register("displayName", { onChange: () => setErr(true) }, { required: true })}
                        />
                    </div>

                    <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3">Hospital:</p>
                        <input className=""
                            placeholder="Enter hospital name"
                            type="text"
                            {...register("hospital", { onChange: () => setErr(true) }, { required: true })}
                        />
                    </div>

                    <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3">Location:</p>
                        <input className=""
                            placeholder="Enter location"
                            type="text"
                            {...register("location", { onChange: () => setErr(true) }, { required: true })}
                        />
                    </div>

                    <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3">Department:</p>
                        <input className=""
                            placeholder="Enter department"
                            type="text"
                            {...register("department", { onChange: () => setErr(true) }, { required: true })}
                        />
                    </div>

                    <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3">Position:</p>
                        <input className=""
                            placeholder="Enter position"
                            type="text"
                            {...register("position", { onChange: () => setErr(true) }, { required: true })}
                        />
                    </div>

                    <div className="mt-6 flex items-center ">
                        <p className="font-medium w-1/3">Channels:</p>
                        <input className=""
                            placeholder="Enter channels"
                            type="text"
                            {...register("name", { onChange: () => setErr(true) }, { required: true })}
                        />
                    </div>

                    <div className="mt-6 flex items-center ">
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
                    </div>


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
                            Create Music
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default FormCreateUser;