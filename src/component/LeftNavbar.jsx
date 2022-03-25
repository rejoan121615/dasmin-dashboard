import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    return (
        <div>
            <h1 className=" uppercase font-bold text-primary text-center py-8 text-2xl">
                dasmin
            </h1>
            <div className=" flex flex-col">
                <div className=" bg-hover-primary px-5 py-4 flex items-center 2xl:py-5">
                    <FontAwesomeIcon
                        icon="fa-solid fa-square-poll-horizontal"
                        className=" text-2xl mr-3 text-primary"
                    />
                    <h6 className=" text-primary capitalize font-bold">
                        dashboard
                    </h6>
                </div>
                <div className="  px-5 py-3 flex items-center">
                    <FontAwesomeIcon
                        icon="fa-solid fa-credit-card"
                        className=" text-xl mr-3 text-semi-white"
                    />
                    <h6 className=" text-semi-white capitalize">payout</h6>
                </div>
                <div className="  px-5 py-3 flex items-center">
                    <FontAwesomeIcon
                        icon="fa-solid fa-envelope"
                        className=" text-xl mr-3 text-semi-white"
                    />
                    <h6 className=" text-semi-white capitalize">inbox</h6>
                </div>
                <div className="  px-5 py-3 flex items-center">
                    <FontAwesomeIcon
                        icon="fa-solid fa-gear"
                        className=" text-xl mr-3 text-semi-white"
                    />
                    <h6 className=" text-semi-white capitalize">settings</h6>
                </div>
            </div>
        </div>
    );
};

export default LeftNavbar;
