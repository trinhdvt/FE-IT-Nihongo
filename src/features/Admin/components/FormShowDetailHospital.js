import React from 'react';

function FormShowDetailHospital(props) {

    const { closeModal, hospital } = props;

    const CloseModal = () => {
        closeModal();
    }

    return (
        <div className="absolute w-full h-full left-0 top-0 z-50 shadow rounded border border-gray-300 bg-white">
            <div className="absolute right-6 top-3 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out text-xl"
                onClick={CloseModal}
            >
                <i className="fas fa-times"> </i>
            </div>

            <div className="mt-10">
                <form className="py-6 px-16 form-create-user">

                    <div className="mt-8 flex items-center">
                        <p className="font-medium w-1/3 text-gray-600">ID Hospital:</p>
                        <div className="w-full relative">
                            <input
                                value={hospital.id}
                                readOnly
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center">
                        <p className="font-medium w-1/3 text-gray-600">Hospital Name:</p>
                        <div className="w-full relative">
                            <input
                                value={hospital.name}
                                readOnly
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center">
                        <p className="font-medium w-1/3 text-gray-600">Address:</p>
                        <div className="w-full relative">
                            <input
                                value={hospital.address}
                                readOnly
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center">
                        <p className="font-medium w-1/3 text-gray-600">Create At:</p>
                        <div className="w-full relative">
                            <input
                                value={hospital.createdAt}
                                readOnly
                                type="text"
                            />
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default FormShowDetailHospital;