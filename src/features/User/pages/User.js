import React from 'react';
import UserSidebar from '../components/UserSidebar';
import { useParams} from 'react-router-dom';
import './User.css';
import FormChat from '../../../components/Chat/FormChat';
import FormProfile from '../components/FormProfile';

function User(props) {
    const locationName = useParams().name;

    return (
        <div className="flex bg-gray-50 max-w-7xl mx-auto px-4 h-full py-4">
            <div className="card w-full">

                <UserSidebar locationName = {locationName}/>

                {
                    locationName === 'chat' ?
                        <div className="">
                            <FormChat />
                        </div> :
                        <FormProfile />
                }


            </div >
        </div>
    );
}

export default User;