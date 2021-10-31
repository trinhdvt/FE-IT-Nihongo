import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function UserSidebar(props) {

    const { locationName } = props;

    const history = useHistory();

    const [option, setOption] = useState(locationName);

    const changeOption = (e) => {
        setOption(e.target.value)
        history.push(`/user/${e.target.value}`)
    }

    return (
        <div className="card-sidebar relative">
            <div className="flex items-center p-3 border border-gray-400 rounded">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 mr-2 font-medium text-gray-700">
                    <span>Avatar</span>
                </div>

                <div>
                    <p className="font-bold text-gray-600">USER</p>

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
                <div className="flex items-center" >
                    <select
                        name="option"
                        value={option}
                        onChange={changeOption}
                        className="cursor-pointer focus:outline-none border border-gray-400 rounded-lg px-2 py-1 mr-2"
                    >
                        <option value="chat">Chat</option>
                        <option value="help">Help</option>
                    </select>
                    <div className="flex items-center bg-white border border-gray-400 rounded-lg px-2 py-1">
                        <i className="fas fa-search text-gray-300 text-sm"></i>
                        <input type="text" className="focus:outline-none px-2 w-full" placeholder="Search" />
                    </div>
                </div>

                {
                    option === "chat" ?
                        <div className="mt-4">
                            <p className="text-lg text-gray-700 font-medium">Channel</p>

                            <ul className="ml-4 mt-2">
                                <li className="text-sm font-medium text-gray-600 cursor-pointer">#clinical_department</li>
                                <li className="text-sm font-medium text-gray-400 cursor-pointer hover:opacity-80 mt-2">#emergency_department</li>
                                <li className="text-sm font-medium text-gray-400 cursor-pointer hover:opacity-80 mt-2">#volunteer_group1</li>
                                <li className="text-sm font-medium text-gray-400 cursor-pointer hover:opacity-80 mt-2">#volunteer_group2</li>
                            </ul>

                            <p className="text-lg text-gray-700 font-medium mt-4">Recent Direct Message</p>

                            <div className="mt-2 cursor-pointer">
                                <div className="p-2 bg-gray-200 flex item-center rounded-lg">
                                    <div className="mr-2 w-10 h-10 text-xs flex items-center justify-center rounded-full bg-gray-300 mr-2 text-gray-700">
                                        <span>Avatar</span>
                                    </div>

                                    <div className="leading-3 w-36">
                                        <p className="font-medium text-sm text-gray-600">Dr. Johnson</p>
                                        <p className="text-xs truncate text-gray-400">Alex please call me when you have time</p>
                                    </div>

                                    <div className="">
                                        <p className="text-xs text-gray-400">16/09/2021</p>
                                        <div className="flex items-center justify-end">
                                            <i class="fas fa-ellipsis-h text-sm mt-1 mr-1 opacity-70"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 cursor-pointer">
                                <div className="p-2 flex item-center rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
                                    <div className="mr-2 w-10 h-10 text-xs flex items-center justify-center rounded-full bg-gray-300 mr-2 text-gray-700">
                                        <span>Avatar</span>
                                    </div>

                                    <div className="leading-3 w-36">
                                        <p className="font-medium text-sm text-gray-600">Dr. Johnson</p>
                                        <p className="text-xs truncate text-gray-400">Alex please call me when you have time</p>
                                    </div>

                                    <div className="">
                                        <p className="text-xs text-gray-400">16/09/2021</p>
                                        <div className="flex items-center justify-end">
                                            <i class="fas fa-ellipsis-h text-sm mt-1 mr-1 opacity-70"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 cursor-pointer">
                                <div className="p-2 flex item-center rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
                                    <div className="mr-2 w-10 h-10 text-xs flex items-center justify-center rounded-full bg-gray-300 mr-2 text-gray-700">
                                        <span>Avatar</span>
                                    </div>

                                    <div className="leading-3 w-36">
                                        <p className="font-medium text-sm text-gray-600">Dr. Johnson</p>
                                        <p className="text-xs truncate text-gray-400">Alex please call me when you have time</p>
                                    </div>

                                    <div className="">
                                        <p className="text-xs text-gray-400">16/09/2021</p>
                                        <div className="flex items-center justify-end">
                                            <i class="fas fa-ellipsis-h text-sm mt-1 mr-1 opacity-70"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className="ml-2 mt-4">
                            <p className="text-lg text-gray-700 font-medium">Need Helps</p>

                            <ul className="ml-4 mt-2">
                                <li className="text-sm font-medium text-gray-600 cursor-pointer">#lack_of_manpower</li>
                                <li className="text-sm font-medium text-gray-400 cursor-pointer mt-2 hover:opacity-80">#lack_of_hospital_beds</li>
                                <li className="text-sm font-medium text-gray-400 cursor-pointer mt-2 hover:opacity-80">#lack_of_facilities</li>
                            </ul>
                        </div>
                }
            </div>

            <div className="absolute bottom-0 px-3 py-6 border-t border-gray-300 w-full grid grid-cols-4 gap-4" >
                <Link
                    to="/user/profile"
                    className="text-center cursor-pointer text-gray-300 transition duration-400 ease-in-out hover:text-gray-400">
                    <i className="fas fa-user"></i>
                </Link>

                <div className="text-center cursor-pointer text-gray-300 transition duration-400 ease-in-out hover:text-gray-400">
                    <i className="fas fa-user-friends"></i>
                </div>

                <div className="text-center cursor-pointer text-gray-300 transition duration-400 ease-in-out hover:text-gray-400">
                    <i className="fas fa-star"></i>
                </div>

                <div className="text-center cursor-pointer text-gray-300 transition duration-400 ease-in-out hover:text-gray-400">
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        </div>
    );
}

export default UserSidebar;