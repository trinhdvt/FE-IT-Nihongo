import React from 'react';
import { useSelector } from 'react-redux';
import { onEditProfile } from '../../../reducers/EditProfile';
import { useDispatch } from 'react-redux';
import FormEditProfile from './FormEditProfile';

function FormProfile(props) {

    const dispatch = useDispatch();

    const info = useSelector(Info => Info.Auth.info);

    const checkEdit = useSelector(check => check.EditProfile);

    return (
        <div className="w-full h-full border border-gray-400 rounded p-4 relative">
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg">Dr. Julius Jacobs</span>
                <button className="justify-center px-6 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => dispatch(onEditProfile())}
                >
                    Edit
                </button>
            </div>
            <div className="mt-3">
                <span className="font-semibold">Hospital: </span>
                <span>A Hospital</span>
            </div>
            <div className="mt-3">
                <span className="font-semibold">Location: </span>
                <span>No 123, X Street, Y District, Z City</span>
            </div>
            <div className="mt-3">
                <span className="font-semibold">Department: </span>
                <span>B Department</span>
            </div>
            <div className="mt-3">
                <span className="font-semibold">Position: </span>
                <span>C Position</span>
            </div>
            <div className="mt-3">
                <span className="font-semibold">Avatar URL: </span>
                <span>randomURL.com</span>
            </div>
            <div className="mt-3">
                <span className="font-semibold">Email: </span>
                <span>randomEmail@gmail.com</span>
            </div>
            <div className="mt-3">
                <span className="font-semibold">Work phone number: </span>
                <span>99999999</span>
            </div>
            <div className="mt-3">
                <span className="font-semibold">Personal phone number: </span>
                <span>99999999</span>
            </div>

            {
                checkEdit && <FormEditProfile />
            }
        </div>
    );
}

export default FormProfile;