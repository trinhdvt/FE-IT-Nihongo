import React from 'react';

function FormShowDetailChannel(props) {

    const { closeModal, channel } = props;

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
                                value={channel.id}
                                readOnly
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center">
                        <p className="font-medium w-1/3 text-gray-600">Title:</p>
                        <div className="w-full relative">
                            <input
                                value={channel.title}
                                readOnly
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center">
                        <p className="font-medium w-1/3 text-gray-600">Create At:</p>
                        <div className="w-full relative">
                            <input
                                value={channel.createdAt}
                                readOnly
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center">
                        <p className="font-medium w-1/3 text-gray-600">Update At:</p>
                        <div className="w-full relative">
                            <input
                                value={channel.updatedAt}
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

export default FormShowDetailChannel;