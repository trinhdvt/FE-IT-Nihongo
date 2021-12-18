import React, { useEffect, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import UserManagement from '../components/UserManagement';
import HelpManagement from '../components/HelpManagement';
import ChannelManagement from '../components/ChannelManagement';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import './Admin.css'
import { useSelector } from 'react-redux';
import CodeManagement from '../components/CodeManagement';
import { ManagementApi } from '../constants/admin-api';
import axios from 'axios';
import FormShowDetailHospital from '../components/FormShowDetailHospital';
import FormShowDetailUser from '../components/FormShowDetailUser';
import FormShowDetailHelp from '../components/FormShowDetailHelp';
import FormShowDetailChannel from '../components/FormShowDetailChannel';
// import HospitalManagement from '../components/HospitalManagement';

function Admin(props) {

    const idHospital = useSelector(state => state.AdminReducer);

    const locationName = useParams().name;

    const history = useHistory();

    const token = useSelector(auth => auth.Auth.token);

    const [isOpenUser, setIsOpenUser] = useState(false);

    const [list, setList] = useState([]);

    const [id, setId] = useState(idHospital)

    const [showDetailHospital, setShowDetailHospital] = useState(false);

    const [hospital, setHospital] = useState();

    const changeHospital = (item) => {
        setHospital(item);
    }

    const openShowDetailHospital = () => {
        setShowDetailHospital(true);
    }

    const closeShowDetailHospital = () => {
        setShowDetailHospital(false);
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

    const closeModal = () => {
        if (locationName === "user-management")
            setIsOpenUser(false);
    }

    const openModal = () => {
        if (locationName === "user-management")
            setIsOpenUser(true);
    }

    const [urlName, setUrlName] = useState(locationName);

    const onChangeSelect = (e) => {
        setUrlName(e.target.value);
        history.push(`/admin/${e.target.value}`)
    }

    useEffect(() => {
        setId(idHospital);
    }, [idHospital])

    useEffect(() => {
        setUrlName(locationName);
    }, [locationName])

    useEffect(() => {
        const fetch_List = async () => {
            try {
                const response = await axios.get(ManagementApi.FETCH_LIST_HOSPITAL, {
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

    if (token === "") {
        return <Redirect to="/login" />
    } else {

        return (
            <div className="flex bg-gray-50 max-w-7xl mx-auto px-4 h-full py-4">
                <div className="card w-full">

                    <AdminSidebar list={list} id={id} changeHospital={changeHospital} openShowDetail={openShowDetailHospital} />

                    <div className="border border-gray-400 p-4 rounded relative">
                        <div className="flex item center">
                            <select
                                name="urlName"
                                value={urlName}
                                onChange={onChangeSelect}
                                className="cursor-pointer focus:outline-none border border-gray-300 px-6 py-1 rounded-full text-sm"
                            >
                                <option value="user-management">User</option>
                                <option value="channel-management">Channel</option>
                                <option value="help-management">Help</option>
                                <option value="code-management">Code</option>
                                {/* <option value="hospital-management">Hospital</option> */}
                            </select>

                            <div className="flex items-center ml-8 bg-white border border-gray-400 rounded-full px-2">
                                <i className="fas fa-search text-gray-300 text-sm"></i>
                                <input type="text" className="w-64 focus:outline-none px-2" placeholder="Search" />
                            </div>

                            <div className="ml-auto cursor-pointer" onClick={openModal}>
                                <i className="far fa-plus-square text-xl text-gray-500"></i>
                            </div>
                        </div>
                        {showDetailHospital && <FormShowDetailHospital hospital={hospital} closeModal={closeShowDetailHospital} openModal={openShowDetailHospital} />}
                        {showDetailUser && <FormShowDetailUser user={user} closeModal={closeShowDetailUser} openModal={openShowDetailUser} />}
                        {showDetailHelp && <FormShowDetailHelp help={help} closeModal={closeShowDetailHelp} openModal={openShowDetailHelp} />}
                        {showDetailChannel && <FormShowDetailChannel channel={channel} closeModal={closeShowDetailChannel} openModal={openShowDetailChannel} />}
                        {locationName === "user-management" && <UserManagement isOpen={isOpenUser} closeModal={closeModal} id={id} changeUser={changeUser} openShowDetailUser={openShowDetailUser} />}
                        {locationName === "channel-management" && <ChannelManagement id={id} changeChannel={changeChannel} openShowDetailChannel={openShowDetailChannel} />}
                        {locationName === "help-management" && <HelpManagement id={id} changeHelp={changeHelp} openShowDetailHelp={openShowDetailHelp} />}
                        {locationName === "code-management" && <CodeManagement id={id} />}
                        {/* {locationName === "hospital-management" && <HospitalManagement />} */}
                    </div>

                </div >
            </div>
        );
    }
}

export default Admin;