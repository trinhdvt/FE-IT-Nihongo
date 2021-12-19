import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { onChangeIdHospital } from '../reducers/IdHospital';
import { onChangeInfoRoom } from '../reducers/InfoRoom';
import { onChangeTransfer } from '../reducers/transfer';


function UserSidebar(props) {

    const { locationName, openModal } = props;

    const dispatch = useDispatch();

    const ListRoom = useSelector(state => state.ListRoom);

    const [listRoom, setListRoom] = useState(ListRoom);

    const token = useSelector(state => state.Auth.token);

    const [listTransfer, setListTransfer] = useState();

    const [listHospital, setListHospital] = useState();

    


    useEffect(() => {
        axios.get('/api/transfer-form', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                setListTransfer(res.data);
                dispatch(onChangeTransfer(res.data[0]))
            })
            .catch(err => console.log(err))
    }, [token, dispatch])

    useEffect(() => {
        axios.get('/api/hospital', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            setListHospital(res.data);
        })
    }, [token])

    useEffect(() => {
        setListRoom(ListRoom);
    }, [ListRoom]);

    const history = useHistory();

    const [option, setOption] = useState(locationName);

    const changeOption = (e) => {
        setOption(e.target.value)
        history.push(`/user/${e.target.value}`)
    }

    const convertListRoom = (list) => {
        if (list) {
            const result = list.map((item, index) => {
                return (
                    <li
                        className="text-sm font-medium text-gray-600 cursor-pointer"
                        key={index}
                        onClick={() => dispatch(onChangeInfoRoom(item))}
                    >{item.title}</li>
                )
            })

            return result;
        }
    }

    const convertListTransfer = (list) => {
        if (list) {
            const result = list.map((item, index) => {
                return (
                    <li
                        key={index}
                        className="text-sm font-medium text-gray-600 cursor-pointer mt-2"
                        onClick={() => dispatch(onChangeTransfer(item))}
                    >{item.title}</li>
                )
            })

            return result;
        }
    }

    const convertListHospital = (list) => {
        if (list) {
            const newList = list.filter((x,index) => index < 5)
            const result = newList.map((item, index) => {
                return (
                    <li
                        key={index}
                        className="text-sm font-medium text-gray-600 cursor-pointer mt-2 truncate w-56"
                        onClick={() => {
                            dispatch(onChangeIdHospital(item));
                            openModal();
                        }}
                    >#{item.name}</li>
                )
            })

            return result;
        }
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
                        <option value="transfer">Transfer</option>
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
                                {convertListRoom(listRoom)}
                            </ul>

                            <p className="text-lg text-gray-700 font-medium mt-4">Recent Direct Message</p>

                            <div className="mt-2 cursor-pointer">
                                <div className="p-2 bg-gray-100 flex item-center rounded-lg">
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
                                            <i className="fas fa-ellipsis-h text-sm mt-1 mr-1 opacity-70"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 cursor-pointer">
                                <div className="p-2 flex item-center rounded-lg bg-gray-100 transition duration-300 ease-in-out">
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
                                            <i className="fas fa-ellipsis-h text-sm mt-1 mr-1 opacity-70"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 cursor-pointer">
                                <div className="p-2 flex item-center rounded-lg bg-gray-100 transition duration-300 ease-in-out">
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
                                            <i className="fas fa-ellipsis-h text-sm mt-1 mr-1 opacity-70"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : option === "help" ?
                            <div className="ml-2 mt-4">
                                <p className="text-lg text-gray-700 font-medium">Need Helps</p>

                                <ul className="ml-4 mt-2">
                                    <li className="text-sm font-medium text-gray-600 cursor-pointer">#lack_of_manpower</li>
                                    <li className="text-sm font-medium text-gray-400 cursor-pointer mt-2 hover:opacity-80">#lack_of_hospital_beds</li>
                                    <li className="text-sm font-medium text-gray-400 cursor-pointer mt-2 hover:opacity-80">#lack_of_facilities</li>
                                </ul>
                            </div> :

                            <div className="ml-2 mt-4">
                                <p className="text-lg text-gray-700 font-medium">Hospital Transfer</p>

                                <ul className="ml-4 mt-2">
                                    {convertListTransfer(listTransfer)}
                                </ul>

                                <p className="text-lg text-gray-700 mt-4 font-medium">Hospital Contact</p>

                                <ul className="ml-4 mt-2">
                                    {convertListHospital(listHospital)}
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