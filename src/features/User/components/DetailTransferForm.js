import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FormCreateHospitalTransfer from './FormCreateHospitalTransfer';

function DetailTransferForm(props) {

    const { modal, closeModal, openModal } = props;

    const role = useSelector(state => state.Auth.info.role);

    const token = useSelector(state => state.Auth.token);

    const [loading, setLoading] = useState(false);

    const Transfer = useSelector(state => state.Transfer);

    const [transfer, setTransfer] = useState(Transfer);

    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (transfer) {
            if(typeof closeModal !== "undefined") closeModal();
        } else {
            openModal();
        }
    }, [])

    useEffect(() => {
        setLoading(false);
        setTimeout(() => {
            setLoading(true)
            setTransfer(Transfer);
        }, 400)

    }, [Transfer])

    const ConfirmForm = () => {
        if (!transfer.accepted) {
            axios.put(`/api/transfer-form/${transfer.formId}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => setCheck(true))
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="border border-gray-400 p-4 rounded h-full relative">
            {!loading ?
                <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> :
                <div>
                    {transfer && <div>
                        <div className="flex items-center justify-between">
                            <p className="font-bold opacity-80 text-xl">{transfer.title}</p>
                            <p className="text-blue-200 text-xs">{transfer.fromHospital.createdAt}</p>
                        </div>
                        <p className="font-medium mt-4">From: <span className="font-normal">{transfer.fromHospital.name}</span></p>
                        <p className="font-medium mt-4">Location: <span className="font-normal">{transfer.fromHospital.address}</span></p>
                        <div className="flex items-center mt-4">
                            <p className="font-medium">Patient Profile: </p>
                            <a href={transfer.patientProfile.fileUrl} target="_blank" without rel="noreferrer"
                                className="font-normal flex items-center text-blue-400 underline ml-2 hover:text-blue-600">{transfer.patientProfile.fileName}</a>
                        </div>
                        <div className="flex items-center mt-4">
                            <p className="font-medium">Medical Summary: </p>
                            <a href={transfer.medicalSummary.fileUrl} target="_blank" without rel="noreferrer"
                                className="font-normal flex items-center text-blue-400 underline ml-2 hover:text-blue-600">{transfer.medicalSummary.fileName}</a>
                        </div>
                        <p className="font-medium mt-4">Doctor's diagnosis: <span className="font-normal">{transfer.doctorDiagnosis}</span></p>
                        <div>
                            <p className="font-medium mt-4">Hospital changing reason:</p>
                            <textarea readOnly value={transfer.reason} name="" id="" cols="70" rows="6"
                                className="border border-gray-400 rounded mt-3 focus:border-gray-400 focus:outline-none pl-3"></textarea>
                        </div>

                        <p className="font-medium mt-4">Contact: <span className="font-normal">{transfer.contact}</span></p>
                        {role === "MANAGER" ?
                            <div className="flex items-center justify-end mt-8">
                                <div
                                    onClick={ConfirmForm}
                                    className={`px-6  py-3 text-2xl cursor-pointer text-white mt-3 font-medium rounded uppercase ${transfer.accepted ? "bg-gray-600" : check ? "bg-gray-600" : "bg-blue-400"}`}>
                                    {transfer.accepted ? "Confirmed" : check ? "Confirmed" : "Confirm"}
                                </div>
                            </div> :
                            <div className="flex items-center justify-end mt-8">
                                <div className="px-6  py-3 text-2xl bg-blue-400 text-white mt-3 font-medium rounded uppercase">
                                    {transfer.accepted ? "Confirmed" : "Not Responded"}
                                </div>
                            </div>
                        }
                    </div>}

                </div>
            }
            {modal && <FormCreateHospitalTransfer closeModal={closeModal} />}
        </div>
    );
}

export default DetailTransferForm;