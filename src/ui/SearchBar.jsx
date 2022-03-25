import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
    const [input, setInput] = useState("");

    const inputHandler = (props) => {
        setInput(props.target.value);
    };

    return (
        <div className=" bg-half-paste px-3 flex items-center rounded-3xl py-2 overflow-hidden">
            <FontAwesomeIcon
                icon="search"
                className=" text-semi-white mx-2 text-xl"
            />
            <input
                type="text"
                placeholder="Search"
                value={input}
                onChange={inputHandler}
                className=" bg-transparent basis-full ml-2 focus-visible:border-0 focus-visible:outline-none"
            />
        </div>
    );
};

export default SearchBar;
