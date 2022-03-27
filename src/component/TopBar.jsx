import React, { useState } from "react";
import SearchBar from "../ui/SearchBar";
import UserArea from "./UserArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = (props) => {
    const clickHandler = () => {
        props.navHan();
    };

    return (
        <div className=" flex flex-wrap justify-between gap-y-4">
            {/* responsive navbar btn  */}
            <button onClick={clickHandler} className=" w-8 xl:hidden">
                <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" />
            </button>
            <SearchBar />
            <UserArea />
        </div>
    );
};

export default TopBar;
