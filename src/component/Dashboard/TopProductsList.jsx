import React from "react";
import useCardWrapper from "../../HOC/useCardWrapper";

const Product = (props) => {
    return (
        <div className="flex justify-between my-4 last:mb-0">
            <h6 className=" text-base font-semibold capitalize">
                {props.name}
            </h6>
            <button className=" text-base text-primary font-semibold">
                ${props.price}
            </button>
        </div>
    );
};

const TopProductsList = (props) => {
    return (
        <div>
            {/* title  */}
            <div className="flex justify-between">
                <h2 className=" text-2xl capitalize">top products</h2>
                <button className=" text-xl text-primary capitalize">
                    view all
                </button>
            </div>
            {/* products list  */}
            <div className=" mt-4">
                {props.list.map((item, index) => {
                    return <Product {...item} key={index} />;
                })}
            </div>
        </div>
    );
};

export default useCardWrapper(TopProductsList);
