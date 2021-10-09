import React from 'react';

function AdminSidebar(props) {
    return (
        <div className="card-sidebar">
            <div className="flex items-center p-3 border border-gray-400 rounded">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 mr-2 font-medium text-gray-700">
                    <span>Avatar</span>
                </div>

                <div>
                    <p className="font-bold text-gray-600">ADMIN</p>

                    <select name="" id="" className="focus:outline-none border border-gray-300 px-2 rounded-full text-sm">
                        <option value="" className="">
                            Working
                        </option>
                    </select>
                </div>

                <div className="ml-auto">
                    <i className="fas fa-ellipsis-v text-xl text-gray-600"></i>
                </div>
            </div>

            <div className="p-3 border border-gray-400 rounded">
                <div className="flex items-center bg-white border border-gray-400 rounded-lg px-2 py-1">
                    <i className="fas fa-search text-gray-300 text-sm"></i>

                    <input type="text" className="focus:outline-none px-2 w-full" placeholder="Search" />
                </div>

                <div className="ml-2 mt-3">
                    <p className="text-xl text-gray-700 font-medium">Hospital</p>
                    <ul className="ml-4 mt-2">
                        <li className="text-sm font-medium text-gray-600">RandomHospital1</li>
                        <li className="text-sm font-medium text-gray-400 mt-2">RandomHospital2</li>
                        <li className="text-sm font-medium text-gray-400 mt-2">RandomHospital3</li>
                        <li className="text-sm font-medium text-gray-400 mt-2">RandomHospital4</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;