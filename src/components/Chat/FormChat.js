import React, { useEffect, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ClassNames from 'classnames';
// import { SOCKET_URL } from '../../constants/Socket_URL';
// import SockJsClient from 'react-stomp';
// import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector } from 'react-redux';
import { addMessage } from '../../reducers/ListMessage';
import { useDispatch } from 'react-redux';

function FormChat(props) {

    const dispatch = useDispatch();

    const ListMessage = useSelector(state => state.ListMessage);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    })

    const schema = yup.object().shape({
        message: yup.string().required()
    }).required();

    // const { senderId, recipientId, name, arr, idChat, checkOther, header } = props;

    const senderId = 1;

    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const [listMessage, setListMessage] = useState([]);

    useEffect(() => {
        scrollToBottom();
        setListMessage(ListMessage);
    }, [ListMessage])

    const messagesEndRef = useRef(null);

    const sendMessage = (data) => {
        dispatch(addMessage({
            senderId: 1,
            content: data.message
        }));
        setListMessage(state => [...state, {
            senderId: 1,
            content: data.message
        }])
        scrollToBottom();
        reset();
    }

    const convertListMessage = (listMessage) => {
        const result = listMessage.length > 0 ? listMessage.map((item, index) => {
            return (
                <div className={ClassNames("py-2 px-3 mt-1", {
                    "text-right": item.senderId === senderId,
                    "flex items-center": item.senderId !== senderId
                })} key={index}>
                    {(item.senderId !== senderId) ?
                        <div className="bg-avatar bg-no-repeat bg-cover h-8 w-8 rounded-full mr-2"></div>
                        : <div className="w-8 mr-2"></div>
                    }
                    <div>
                        <span className="py-2 px-4 w-auto bg-blue-400 text-white rounded-full">{item.content}</span>
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
                        <div className="mx-4 h-14 w-14 flex items-center justify-center rounded-lg bg-blue-400 text-white">
                            <span className="text-sm">Avatar</span>
                        </div>
                        <p className="opacity-80">Dr. Johnson</p>
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
                            {convertListMessage(listMessage)}
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
                {/* <SockJsClient url={SOCKET_URL}
                topics={[`/topic/${idChat}/queue/messages`]}
                onConnect={() => {}}
                onDisconnect={() => {}}
                onMessage={async (msg) => {
                    message.push(msg);
                    if (msg.senderId === senderId) {
                        setMess('')
                    }
                    await dispatch(FetchChat2({ id: senderId, header: header }));
                    await dispatch(FetchChat({ id: senderId, header: header }));
                    scrollToBottom();
                }}
                ref={(client) => {
                    clientRef = client;
                }}
            /> */}
            </div>
        </div>
    );
}

export default FormChat;