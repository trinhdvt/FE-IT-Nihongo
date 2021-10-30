import React, { useState } from 'react';
import ManagerSidebar from '../components/ManagerSidebar';
import UserManagement from '../../Admin/components/UserManagement';
import HelpManagement from '../../Admin/components/HelpManagement';
import ChannelManagement from '../../Admin/components/ChannelManagement';
import { useParams, useHistory } from 'react-router-dom';
import './Manager.css';
import CodeManagement from '../../Admin/components/CodeManagement';

function Manager(props) {
    const locationName = useParams().name;

    const history = useHistory();

    const [isOpenUser, setIsOpenUser] = useState(false)

    const [isOpenHelp, setIsOpenHelp] = useState(false)

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

    return (
        <div className="flex bg-gray-50 max-w-7xl mx-auto px-4 h-full py-4">
            <div className="card w-full">

                <ManagerSidebar />

                <div className="border border-gray-400 p-4 rounded">
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
                        </select>

                        <div className="flex items-center ml-8 bg-white border border-gray-400 rounded-full px-2">
                            <i className="fas fa-search text-gray-300 text-sm"></i>
                            <input type="text" className="w-64 focus:outline-none px-2" placeholder="Search" />
                        </div>

                        <div className="ml-auto cursor-pointer" onClick={openModal}>
                            <i className="far fa-plus-square text-xl text-gray-500"></i>
                        </div>
                    </div>

                    {locationName === "user-management" && <UserManagement isOpen={isOpenUser} closeModal={closeModal} />}
                    {locationName === "channel-management" && <ChannelManagement />}
                    {locationName === "help-management" && <HelpManagement isOpen={isOpenHelp} closeModal={closeModal} />}
                    {locationName === "code-management" && <CodeManagement />}
                </div>

            </div >
        </div>
    );
}

export default Manager;