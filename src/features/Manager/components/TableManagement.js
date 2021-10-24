import React from 'react';
import FormCreateHelp from './FormCreateHelp';
import FormCreateUser from '../../Admin/components/FormCreateUser';

function TableManagement(props) {

    const { isOpen, closeModal, type } = props;

    //const [mess, setMess] = useState();

    return (
        <div className="shadow mt-4 relative transition duration-300 ease-in-out">
            <table className={`min-w-full divide-y divide-gray-200 ${!isOpen ? 'border border-gray-300' : ''}`}>
                <thead className="bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>

                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Display Name
                        </th>

                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>

                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Create At
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                                1
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-700 font-medium">#RandomDoctor1</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <i className="far fa-eye mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>
                                {type !== "user-management" &&
                                    <i className="fas fa-user-plus mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>}
                                <i className="far fa-trash-alt cursor-pointer text-gray-600 hover:text-gray-700"></i>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            xy/xy/2021
                        </td>
                    </tr>

                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                                2
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-700 font-medium">#RandomDoctor1</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <i className="far fa-eye mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>
                                {type !== "user-management" &&
                                    <i className="fas fa-user-plus mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>}
                                <i className="far fa-trash-alt cursor-pointer text-gray-600 hover:text-gray-700"></i>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            xy/xy/2021
                        </td>
                    </tr>

                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                                3
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-700 font-medium">#RandomDoctor1</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <i className="far fa-eye mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>
                                {type !== "user-management" &&
                                    <i className="fas fa-user-plus mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>}
                                <i className="far fa-trash-alt cursor-pointer text-gray-600 hover:text-gray-700"></i>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            xy/xy/2021
                        </td>
                    </tr>

                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                                4
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-700 font-medium">#RandomDoctor1</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <i className="far fa-eye mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>
                                {type !== "user-management" &&
                                    <i className="fas fa-user-plus mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>}
                                <i className="far fa-trash-alt cursor-pointer text-gray-600 hover:text-gray-700"></i>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            xy/xy/2021
                        </td>
                    </tr>

                </tbody>
            </table>

            {(isOpen && type === "user-management") && <FormCreateUser closeModal={closeModal} />}

            {(isOpen && type === "help-management") && <FormCreateHelp closeModal={closeModal} />}

        </div>
    );
}

export default TableManagement;