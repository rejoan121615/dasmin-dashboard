import React from "react";
import Cards from "./Cards";

const CardList = (props) => {
    return (
        <div className=" grid grid-cols-3 gap-x-base-lg">
            {props.cards.map((item, index) => {
                return <Cards {...item} key={index} />;
            })}
        </div>
    );
};

export default CardList;
