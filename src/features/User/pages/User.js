import React, { useState, useEffect } from 'react';
import UserSidebar from '../components/UserSidebar';
import { useParams } from 'react-router-dom';
import './User.css';
import FormChat from '../../../components/Chat/FormChat';
import FormProfile from '../components/FormProfile';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { onChangeInfoRoom } from '../reducers/InfoRoom';
import { fetchListRoom } from '../reducers/ListRoom';
import DetailHelpForm from '../../Manager/components/DetailHelpForm';
import DetailTransferForm from '../components/DetailTransferForm';

function User(props) {

    const locationName = useParams().name;

    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();

    const token = useSelector(state => state.Auth.token);

    useEffect(() => {
        axios.get('/api/room', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            dispatch(fetchListRoom(res.data));
            dispatch(onChangeInfoRoom(res.data[0]));
        })

    }, [token, dispatch])

    const closeModal = () => setModal(false)

    const openModal = () => setModal(true);

    return (
        <div className="flex bg-gray-50 max-w-7xl mx-auto px-4 h-full py-4">
            <div className="card w-full">

                <UserSidebar locationName={locationName} openModal={openModal}/>

                {
                    locationName === 'chat' &&
                    <div className="">
                        <FormChat />
                    </div>
                }
                {
                    locationName === 'profile' &&
                    <div className="">
                        <FormProfile />
                    </div>
                }
                {
                    locationName === 'help' &&
                    <div className="h-full">
                        <DetailHelpForm />
                    </div>
                }
                {
                    locationName === 'transfer' &&
                    <div className="h-full">
                        <DetailTransferForm modal={modal} closeModal={closeModal} openModal={openModal}/>
                    </div>
                }



            </div >
        </div>
    );
}

export default User;