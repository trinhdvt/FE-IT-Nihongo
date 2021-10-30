import React, { useState, useEffect } from 'react';
import { ManagementApi } from '../constants/admin-api';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Classnames from 'classnames';

function ChannelManagement(props) {

    const token = useSelector(auth => auth.Auth.token);

    const [list, setList] = useState([]);

    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState({
        _page: 0,
        _limit: 7
    })

    const HandleChangePage = (num) => {
        setPage({ ...page, _page: num })
    }

    useEffect(() => {
        setLoading(true);
        const fetch_List = async () => {
            try {
                const response = await axios.get(ManagementApi.FETCH_LIST_CHANNEL, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response) {
                    console.log(response.data)
                    setList(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetch_List();
    }, [])

    const covertList = (list) => {
        var result = [];
        const startValue = page._page * page._limit
        for (let i = startValue; i < startValue + 8; i++) {
            if (i >= list.length) break;
            result.push(list[i]);
        }

        const showListCode = result.map((item, index) => {
            return (
                <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                            {index}
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-700 font-medium">{item.fullName}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <i className="far fa-eye mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>
                            <i className="fas fa-user-plus mr-6 cursor-pointer text-gray-600 hover:text-gray-700"></i>
                            <i className="far fa-trash-alt cursor-pointer text-gray-600 hover:text-gray-700"></i>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.createdAt}
                    </td>
                </tr>
            )
        })

        return showListCode;

    }

    const showListPage = (list) => {

        const countPage = Math.ceil(list.length / 7);
        const result = [];
        for (let i = 0; i < countPage; i++) {
            result.push(
                <li
                    key={i}
                    className={Classnames(
                        'h-8 w-8 flex items-center justify-center rounded-full mx-1 cursor-pointer',
                        {
                            'text-white opacity-80 bg-blue-500': page._page === i
                        },
                        {
                            'hover:bg-gray-200 text-gray-600': page._page !== i
                        }
                    )}
                    onClick={() => HandleChangePage(i)}
                >{i + 1}</li>
            )
        }
        return result;
    }


    //const [mess, setMess] = useState();

    return (
        <div className="mt-4 transition duration-300 ease-in-out relative table-management">
            {loading ?
                <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> :
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
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
                        {covertList(list)}
                    </tbody>
                </table>}

            <ul className="flex items-center absolute bottom-0 right-0">
                <li className={Classnames(
                    'text-xs h-8 w-8 flex items-center justify-center mx-2 text-blue-300 rounded-full cursor-pointer',
                    {
                        'text-blue-500 hover:bg-gray-200': page._page !== 0
                    }
                )} onClick={() => HandleChangePage(page._page !== 0 ? page._page - 1 : page._page)}>
                    <i className="fas fa-chevron-left"></i>
                </li>
                {showListPage(list)}
                <li
                    className={Classnames(
                        'text-xs h-8 w-8 mx-1 flex items-center justify-center text-blue-300 rounded-full cursor-pointer',
                        {
                            'text-blue-500 hover:bg-gray-200': Math.ceil(list.length / 7) - 1 !== page._page
                        }
                    )}
                    onClick={() => HandleChangePage(Math.ceil(list.length / 7) - 1 !== page._page ? page._page + 1 : page._page)}>
                    <i className="fas fa-chevron-right"></i>
                </li>
            </ul>
        </div>
    );
}

export default ChannelManagement;