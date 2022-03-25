import React, { useState } from "react";
import SearchBar from "../ui/SearchBar";
import UserArea from "./UserArea";

const TopBar = () => {
    return (
        <div className=" flex justify-between">
            <SearchBar />
            <UserArea />
        </div>
    );
};

export default TopBar;
