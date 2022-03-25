import React from "react";
import useCardWrapper from "../../HOC/useCardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = (props) => {
    return (
        <div>
            <FontAwesomeIcon
                icon={props.icon}
                className={`text-3xl ${props.iconColor}`}
            />
            <h2 className=" font-bold text-black text-[24px] mt-2">
                $ {props.amount}
            </h2>
            <p className=" text-[15px] font-semibold capitalize text-[#91a5b9] mt-2">
                {props.title}
            </p>
        </div>
    );
};

export default useCardWrapper(Cards);
