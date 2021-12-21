import React, { useEffect, useState } from 'react';
import ManagerSidebar from '../components/ManagerSidebar';
import UserManagement from '../../Admin/components/UserManagement';
import HelpManagement from '../../Admin/components/HelpManagement';
// import ChannelManagement from '../../Admin/components/ChannelManagement';
import { useParams, useHistory } from 'react-router-dom';
import './Manager.css';
import CodeManagement from '../../Admin/components/CodeManagement';
import DetailHelpForm from '../components/DetailHelpForm';
// import FormShowDetailHospital from '../../Admin/components/FormShowDetailHospital';
import FormShowDetailUser from '../../Admin/components/FormShowDetailUser';
import FormShowDetailHelp from '../../Admin/components/FormShowDetailHelp';
import FormShowDetailChannel from '../../Admin/components/FormShowDetailChannel';
import axios from 'axios';
import { ManagementApi } from '../../Admin/constants/admin-api';
import { useSelector } from 'react-redux';
import DetailTransferFrom from '../../User/components/DetailTransferForm';
import FormChat from '../../../components/Chat/FormChat';
import { fetchListRoom } from '../../User/reducers/ListRoom';
import { onChangeInfoRoom } from '../../User/reducers/InfoRoom';
import { useDispatch } from 'react-redux';


function Manager(props) {
    const locationName = useParams().name;

    const token = useSelector(auth => auth.Auth.token);

    const history = useHistory();

    const [isOpenUser, setIsOpenUser] = useState(false);

    const [isOpenHelp, setIsOpenHelp] = useState(false);

    const [optionSidebar, setOptionSidebar] = useState('channel');

    const changeOptionSidebar = (option) => {
        setOptionSidebar(option);
    }

    const closeModal = () => {
        if (locationName === "user-management")
            setIsOpenUser(false);
        if (locationName === "help-management")
            setIsOpenHelp(false);
    }

    const openModal = () => {
        if (locationName === "user-management")
            setIsOpenUser(true);
        if (locationName === "help-management")
            setIsOpenHelp(true);
    }

    const [urlName, setUrlName] = useState(locationName);

    const onChangeSelect = (e) => {
        setUrlName(e.target.value);
        history.push(`/manager/${e.target.value}`)
    }


    const [user, setUser] = useState();

    const [showDetailUser, setShowDetailUser] = useState(false);

    const changeUser = (item) => {
        setUser(item);
    }

    const openShowDetailUser = () => {
        setShowDetailUser(true);
    }

    const closeShowDetailUser = () => {
        setShowDetailUser(false);
    }

    const [help, setHelp] = useState();

    const [showDetailHelp, setShowDetailHelp] = useState(false);

    const changeHelp = (item) => {
        setHelp(item);
    }

    const openShowDetailHelp = () => {
        setShowDetailHelp(true);
    }

    const closeShowDetailHelp = () => {
        setShowDetailHelp(false);
    }

    const [channel, setChannel] = useState();

    const [showDetailChannel, setShowDetailChannel] = useState(false);

    const changeChannel = (item) => {
        setChannel(item);
    }

    const openShowDetailChannel = () => {
        setShowDetailChannel(true);
    }

    const closeShowDetailChannel = () => {
        setShowDetailChannel(false);
    }

    const [list, setList] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/api/room', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            dispatch(fetchListRoom(res.data));
            const newData = res.data.find(x => x.id === 15);
            dispatch(onChangeInfoRoom(newData));
        })

    }, [token, dispatch])

    useEffect(() => {
        const fetch_List = async () => {
            try {
                const response = await axios.get(ManagementApi.FETCH_LIST_CHANNEL_MANAGER, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response) {
                    setList(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetch_List();
    }, [token])

    return (
        <div className="flex bg-gray-50 max-w-7xl mx-auto px-4 h-full py-4">
            <div className="card w-full">

                <ManagerSidebar id={10} list={list} optionSidebar={optionSidebar} changeOptionSidebar={changeOptionSidebar} changeChannel={changeChannel} openShowDetailChannel={openShowDetailChannel} />

                {optionSidebar === 'help' ? <DetailHelpForm /> : optionSidebar === 'transfer' ?
                    <DetailTransferFrom /> : optionSidebar === 'channel' ? <FormChat /> :
                        <div className="border border-gray-400 p-4 rounded relative">
                            <div className="flex item center">
                                <select
                                    name="urlName"
                                    value={urlName}
                                    onChange={onChangeSelect}
                                    className="cursor-pointer focus:outline-none border border-gray-300 px-6 py-1 rounded-full text-sm"
                                >
                                    <option value="user-management">User</option>
                                    {/* <option value="channel-management">Channel</option> */}
                                    <option value="help-management">Help</option>
                                    <option value="code-management">Code</option>
                                </select>

                                <div className="flex items-center ml-8 bg-white border border-gray-400 rounded-full px-2">
                                    <i className="fas fa-search text-gray-300 text-sm"></i>
                                    <input type="text" className="w-64 focus:outline-none px-2" placeholder="Search" />
                                </div>

                                <div className="ml-auto cursor-pointer" onClick={openModal}>
                                    <i className="far fa-plus-square text-xl text-gray-500"></i>
                                </div>
                            </div>

                            {/* {showDetailHospital && <FormShowDetailHospital hospital={hospital} closeModal={closeShowDetailHospital} openModal={openShowDetailHospital} />} */}
                            {showDetailUser && <FormShowDetailUser user={user} closeModal={closeShowDetailUser} openModal={openShowDetailUser} />}
                            {showDetailHelp && <FormShowDetailHelp help={help} closeModal={closeShowDetailHelp} openModal={openShowDetailHelp} />}
                            {showDetailChannel && <FormShowDetailChannel channel={channel} closeModal={closeShowDetailChannel} openModal={openShowDetailChannel} />}
                            {locationName === "user-management" && <UserManagement isOpen={isOpenUser} closeModal={closeModal} changeUser={changeUser} openShowDetailUser={openShowDetailUser} />}
                            {/* {locationName === "channel-management" && <ChannelManagement changeChannel={changeChannel} openShowDetailChannel={openShowDetailChannel} />} */}
                            {locationName === "help-management" && <HelpManagement isOpen={isOpenHelp} closeModal={closeModal} changeHelp={changeHelp} openShowDetailHelp={openShowDetailHelp} />}
                            {locationName === "code-management" && <CodeManagement />}
                        </div>}
            </div >
        </div>
    );
}

export default Manager;