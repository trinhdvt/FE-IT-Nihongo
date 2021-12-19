import React, { useEffect, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { onChangeWS } from '../../features/User/reducers/UserReducer';

function FormChat(props) {

    const InfoRoom = useSelector(state => state.InfoRoom);

    const [listMess, setListMess] = useState([]);

    const [infoRoom, setInfoRoom] = useState(InfoRoom);

    const dispatch = useDispatch();

    const wsReducer = useSelector(state => state.ChangeWS);

    const [ws, setWs] = useState(wsReducer);

    const token = useSelector(state => state.Auth.token);

    const senderId = useSelector(state => state.Auth.info.jti);

    const [check, setCheck] = useState(false);

    useEffect(() => {
        setInfoRoom(InfoRoom);
    }, [InfoRoom])

    useEffect(() => {
        if (infoRoom) {
            axios.get(`/api/room/${infoRoom.id}/message`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    setListMess(res.data);

                })
                .catch(err => console.log(err))
        }
    })

    useEffect(() => {
        setWs(wsReducer);
    }, [wsReducer])

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    })

    const schema = yup.object().shape({
        message: yup.string().required()
    }).required();


    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        scrollToBottom();
    }, [listMess])

    useEffect(() => {
        if (ws === null || !check) {
            const socket = new SockJS("/socket-server");
            let newWS = Stomp.over(socket);
            // kết nối tới Socket
            newWS.connect({}, function (frame) {
                dispatch(onChangeWS(newWS));
                setCheck(true);
                console.log(frame);
            }, function (error) {
                console.log(error);
            });
        }

    }, [dispatch, ws, check])

    useEffect(() => {
        if (ws === null || !check) return;
        ws.subscribe(`/topic/message/${infoRoom.id}`, function (message) {
            // xem lại kết quả phản hồi mẫu của API gửi tin nhắn
            if (infoRoom) {
                axios.get(`/api/room/${infoRoom.id}/message`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then(res => {
                        setListMess(res.data);
    
                    })
                    .catch(err => console.log(err))
            }
        });
    }, [ws, infoRoom, check, token])



    const sendMessage = (data) => {
        if (data.message.length > 0) {
            axios.post(`/api/room/${infoRoom.id}/message`, qs.stringify(data), {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => console.log(res.data))
        }
        scrollToBottom();
        reset();
    }

    const convertListMessage = (listMessage) => {
        const result = listMessage.length > 0 ? listMessage.map((item, index) => {
            return (
                <div className={`py-2 px-3 mt-1 flex items-center ${item.sender.code === senderId ? 'flex justify-end' : ''}`}
                    key={index}>
                    {(item.sender.code !== senderId) ?
                        <img className="bg-no-repeat bg-cover h-8 w-8 rounded-full mr-2" src={item.sender.avatarUrl} alt="" />
                        : <div className="w-8 mr-2"></div>
                    }
                    <div className="max-w-2xl w-auto break-words py-2 px-4 bg-blue-400 text-white rounded-full">
                        <span className="">{item.body}</span>
                    </div>
                </div>
            )
        }) : "";
        return result;
    }

    return (
        <div className="w-full h-full bg-bgChat bg-cover bg-no-repeat border border-gray-400 rounded">
            <div className="h-full flex flex-col justify-between ">
                <div className="flex items-center bg-white p-2 justify-between rounded-t-md">
                    <div className="flex items-center text-xl">
                        <p className="ml-3 text-gray-500 font-medium">{infoRoom.title}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="text-blue-400 text-xl mx-1 p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                            <ion-icon name="call-outline"></ion-icon>
                        </div>
                        <div className="text-blue-400 text-xl mx-1 p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                            <ion-icon name="videocam-outline"></ion-icon>
                        </div>
                        <div className="text-blue-400 text-xl mx-1 p-3 bg-gray-50 rounded-lg flex items-center justify-center">
                            <ion-icon name="trash-outline"></ion-icon>
                        </div>
                        <div className="text-blue-400 text-xl mx-1 p-3 bg-gray-50 rounded-lg flex items-center justify-center"
                        >
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Scrollbars style={{ height: 460 }}>
                        <div className="pt-3 px-2">
                            {convertListMessage(listMess)}
                            <div ref={messagesEndRef} />
                        </div>
                    </Scrollbars>
                </div>
                <div className="bg-white px-4 py-4 w-full justify-between rounded-b-md">
                    <form onSubmit={handleSubmit(sendMessage)} className="flex items-center">
                        <div className="w-full flex items-center mr-2 px-2 py-2 border border-gray-200 rounded-lg ">
                            <div className="text-gray-400 px-2">
                                <i className="fas fa-paperclip"></i>
                            </div>
                            <div className="text-gray-400 px-2">
                                <i className="fas fa-microphone"></i>
                            </div>
                            <input
                                {...register("message")}
                                autoComplete="off"
                                type="text"
                                placeholder="Type your message"
                                className="focus:outline-none focus:border-blue-400 px-3 w-full"
                            />
                        </div>

                        <button className="p-2 rounded-lg bg-blue-500 text-white flex items-center justify-center"
                            type="submit"
                        >
                            <span>Send</span>
                            <i className="far fa-paper-plane ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormChat;