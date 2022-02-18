import React from 'react';

function DetailHelpForm(props) {
    return (
        <div className="border border-gray-400 p-4 rounded h-full">
            <div className="flex items-center justify-between">
                <p className="font-bold opacity-80 text-xl">#lack_of_manpower</p>
                <p className="text-blue-200 text-xs">12:00 04/1/2000</p>
            </div>
            <p className="font-medium mt-3">Hospital: <span className="font-normal">Cu Chi Field Hospital</span></p>
            <p className="font-medium mt-3">Location: <span className="font-normal">No 801, Tinh Lo 15 Street, Nhuan Duc Ward, Cu Chi District, Ho Chi Minh City</span></p>
            <p className="font-medium mt-3">More description: <span className="font-normal">None</span></p>
            <p className="font-medium mt-3">Priority: <span className="font-normal">High</span></p>
            <p className="font-medium mt-3">Expected Quantity: <span className="font-normal">100</span></p>
            <p className="font-medium mt-3">Current Quantity: <span className="font-normal">69</span></p>
            <p className="font-medium mt-3">Contact: <span className="font-normal">0123456789 or khoikevin2903@gmail.com</span></p>
            <button className="px-4 py-2 bg-gray-400 text-white mt-3 font-medium rounded">Message me</button>
            <div className="flex items-center justify-center mt-20">
                <button className="px-6  py-3 text-2xl bg-blue-400 text-white mt-3 font-medium rounded uppercase">
                    I can help
                </button>
            </div>
        </div>
    );
}

export default DetailHelpForm;