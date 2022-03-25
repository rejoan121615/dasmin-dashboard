import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserProfile from "./UserProfile";
import ProfileImg from "../assets/Img/profile.png";


const Icon = (props) => {
    return (
        <button className=" relative">
            {props.notification && (
                <span className=" absolute right-0 w-[7px] h-[7px] bg-[#f04444] inline-block rounded-full"></span>
            )}{" "}
            <FontAwesomeIcon
                icon={props.icon}
                className={` text-base 2xl:text-xl ${
                    props.notification ? "text-primary" : "text-semi-white"
                }`}
            />
        </button>
    );
};

const UserArea = () => {
    return (
        <div className=" flex justify-between max-w-[280px] w-full">
            <Icon icon="bell" notification={true} />
            <Icon icon="message" notification={false} />
            {/* user bar  */}
            <UserProfile name="Mohd Rejoan" img={ProfileImg} />
        </div>
    );
};

export default UserArea;
