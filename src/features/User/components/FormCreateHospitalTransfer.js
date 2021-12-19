import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { onChangeTransfer } from '../reducers/transfer';
import { fetchListTransfer } from '../reducers/ListTransfer';

function FormCreateHospitalTransfer(props) {

    const { closeModal } = props;

    const token = useSelector(state => state.Auth.token);

    const info = useSelector(state => state.Auth.info);

    const toHospital = useSelector(state => state.IdHospital);

    const [patientProfile, setPatientProfile] = useState(null);

    const [medicalSummary, setMedicalSummary] = useState(null);

    const [reason, setReason] = useState("");

    const schema = yup.object().shape({
        title: yup.string().required(),
        doctorDiagnosis: yup.string().required(),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();

    const submitFormCreateUser = async (data) => {
        const newPatientProfile = await fetchUrl(patientProfile);
        const newMedicalSummary = await fetchUrl(medicalSummary);
        if (newPatientProfile && newMedicalSummary) {
            const newData = {
                ...data,
                toHospitalId: toHospital.id,
                patientProfile: newPatientProfile.data.fileUrl,
                medicalSummary: newMedicalSummary.data.fileUrl,
                reason: reason
            }
            axios.post('/api/transfer-form', qs.stringify(newData), {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                swal("Create success!", "You clicked the button!", "success");
                CloseModal();
                dispatch(onChangeTransfer(res.data));
                axios.get('/api/transfer-form', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(res => {
                        dispatch(fetchListTransfer(res.data));
                    })
                    .catch(err => console.log(err))
            })
        }

    }

    const fetchUrl = (file) => {
        const formData = new FormData();
        formData.append('file', file)
        return axios.post('/api/file', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
        })
    }

    const CloseModal = () => {
        reset();
        closeModal();
    }

    const getPatientProfile = (e) => {
        setPatientProfile(e.target.files[0])
    }

    const getMedicalSummary = (e) => {
        setMedicalSummary(e.target.files[0])
    }

    const changeReason = (e) => {
        setReason(e.target.value);
    }

    return (
        <div className="absolute left-0 top-0 w-full shadow rounded border border-gray-300 bg-white">
            <div className="absolute right-6 top-3 text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300 ease-in-out text-xl"
                onClick={CloseModal}
            >
                <i className="fas fa-times"> </i>
            </div>

            <div className="">
                <form className="py-6 px-16 form-create-user shadow" onSubmit={handleSubmit(submitFormCreateUser)} >
                    <p className="font-bold opacity-80 text-xl">To: {toHospital.name}</p>
                    <div className="mt-5 flex items-center">
                        <p className="font-medium w-1/3 text-gray-600">Title:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter Title"
                                type="text"
                                {...register("title")}
                            />
                            {errors.title &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.title.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="mt-4 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">From:</p>
                        <input
                            value={info.from}
                            readOnly
                            type="text"
                        />
                    </div>

                    <div className="mt-4 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Location:</p>
                        <input
                            value={info.location}
                            readOnly
                            type="text"
                        />

                    </div>

                    <div className="mt-4 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Patient Profile:</p>
                        <input type="file" className="w-full" onChange={getPatientProfile}
                        />
                    </div>

                    <div className="mt-4 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Medical Summary:</p>
                        <input type="file" className="w-full" onChange={getMedicalSummary}
                        />
                    </div>

                    <div className="mt-4 flex items-center ">
                        <p className="font-medium w-1/3 text-gray-600">Doctor Diagnosis:</p>
                        <div className="w-full relative">
                            <input
                                placeholder="Enter Doctor Diagnosis"
                                type="text"
                                {...register("doctorDiagnosis")}
                            />
                            {errors.doctorDiagnosis &&
                                <p className="absolute text-sm text-red-600 ml-2 tracking-tighter font-semibold">
                                    {errors.doctorDiagnosis.message}
                                </p>
                            }
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="font-medium w-1/3 text-gray-600">Hospital changing reason:</p>
                        <div className="w-full relative">
                            <textarea onChange={changeReason} name="" id="" cols="78" rows="4"
                                className="border border-gray-400 rounded mt-2 focus:border-gray-400 focus:outline-none pl-3"></textarea>
                        </div>
                    </div>

                    <div className="mt-1">
                        <p className="font-medium w-1/3 text-gray-600">Contact: <span>{info.phone}</span></p>
                    </div>



                    <div className="mt-2 flex items-center justify-end">
                        <button
                            type="submit"
                            className="justify-center text-sm px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                            Send
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default FormCreateHospitalTransfer;