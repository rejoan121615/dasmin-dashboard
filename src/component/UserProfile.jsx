import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfile = (props) => {
    const [viewUser, setViewUser] = useState(false);

    const showUserAreaHandler = () => {
        setViewUser(!viewUser);
    };

    return (
        <div className=" max-w-[180px] w-full relative">
            {/* user area  */}
            <div className=" flex items-center justify-between">
                <div className="w-10 h-10 rounded-full">
                    <img src={props.img} alt="Profile image" />
                </div>
                <p className=" font-semibold">{props.name}</p>
                <button
                    onClick={showUserAreaHandler}
                    className=" cursor-pointer"
                >
                    <FontAwesomeIcon icon="caret-down" />
                </button>
            </div>
            {/* user setting  */}
            {viewUser && (
                <div className="absolute px-4 py-3 border rounded-lg mt-2 w-full">
                    <h1 className=" py-1 border-b-2">hello</h1>
                    <h1 className=" py-1 border-b-2">hello</h1>
                    <h1 className=" py-1 border-b-2">hello</h1>
                    <h1 className=" py-1">hello</h1>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
