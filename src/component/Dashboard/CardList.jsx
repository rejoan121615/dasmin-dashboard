import React from "react";
import Cards from "./Cards";

const CardList = (props) => {
    return (
        <div className=" 
        grid grid-cols-1 gap-y-5
        sm:grid-cols-3 sm:gap-x-5
        ">
            {props.cards.map((item, index) => {
                return <Cards {...item} key={index} />;
            })}
        </div>
    );
};

export default CardList;
