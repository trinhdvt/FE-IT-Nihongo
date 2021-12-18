import React from 'react';

function FormShowDetailHelp(props) {

    const { closeModal, help } = props;

    const CloseModal = () => {
        closeModal();
    }

    return (
        <div className="flex absolute py-10 px-10 w-full h-full left-0 top-0 z-50 shadow rounded border border-gray-300 bg-white">
            <div className="w-1/3 ">
                <img src={help.creator.avatarUrl} alt="" className="h-52 w-52 mt-10"/>
            </div>
            <div className="ml-10 w-2/3">
                <div className="absolute right-6 top-3 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out text-xl"
                    onClick={CloseModal}
                >
                    <i className="fas fa-times"> </i>
                </div>

                <div className="mt-10">
                    <form className="form-create-user">

                        <div className="mt-8 flex items-center">
                            <p className="font-medium w-1/3 text-gray-600">Full Name:</p>
                            <div className="w-full relative">
                                <input
                                    value={help.creator.fullName}
                                    readOnly
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex items-center">
                            <p className="font-medium w-1/3 text-gray-600">Hospital Name:</p>
                            <div className="w-full relative">
                                <input
                                    value={help.creator.hospitalName}
                                    readOnly
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex items-center">
                            <p className="font-medium w-1/3 text-gray-600">Create At:</p>
                            <div className="w-full relative">
                                <input
                                    value={help.creator.createdAt}
                                    readOnly
                                    type="text"
                                />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormShowDetailHelp;