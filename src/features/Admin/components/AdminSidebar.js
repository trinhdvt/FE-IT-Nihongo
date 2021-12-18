import React from 'react';
import { useDispatch } from 'react-redux';
import { changeIdHospital } from '../reducers/AdminReducer';

function AdminSidebar(props) {

    const dispatch = useDispatch();

    const { list, id, changeHospital, openShowDetail } = props;

    const SetHospital = (id) => {
        dispatch(changeIdHospital(id));
    }

    const OpenShowDetail = (item) => {
        changeHospital(item);
        openShowDetail(); 
    }

    const covertList = (list) => {
        var result = [];
        for (let i = 0; i < 8; i++) {
            if (i >= list.length) break;
            result.push(list[i]);
        }

        const showListCode = result.map((item, index) => {
            return (
                <li
                    key={index}
                    className={`text-sm flex items-center justify-between font-medium mt-3 cursor-pointer ${item.id === id ? 'text-gray-600' : ' text-gray-400'}`}
                >
                    <p
                        className="w-52 truncate"
                        onClick={() => SetHospital(item.id)}
                        title={item.name}
                    >{item.name}</p>
                    <i class="far fa-eye" title="View hospital details" onClick={() => OpenShowDetail(item)}></i>
                </li>
            )
        })

        return showListCode;

    }


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
                        {covertList(list)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;