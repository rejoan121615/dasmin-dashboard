import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BalanceSummery = () => {
    const date = new Date();
    const month = date.toLocaleDateString("default", { month: "long" });
    return (
        <div className=" bg-primary rounded-xl p-4 sm:p-8">
            {/* title  */}
            <div className=" flex items-center justify-between">
                <h1 className=" text-white text-2xl capitalize sm:text-[22px] 2xl:text-2xl">
                    balance summery
                </h1>
                <button className=" bg-white rounded-xl w-[42px] h-[42px] flex items-center justify-center">
                    <FontAwesomeIcon
                        icon="fa-solid fa-plus"
                        className=" text-2xl"
                    />
                </button>
            </div>
            <div className=" flex flex-col items-center mt-8 lg:mt-2 lg:flex-row">
                {/* card details  */}
                <div className=" bg-white p-4 rounded-xl w-full sm:mt-10 lg:mt-1 xl:w-7/12">
                    <h3 className=" text-black capitalize text-lg font-bold">
                        Gpay balance
                    </h3>
                    <p className="text-[15px] font-bold text-semi-white mt-1">{`${month} ${date.getDate()}, ${date.getFullYear()}`}</p>
                    <p className=" text-base font-bold mt-1">****5641</p>
                </div>
                {/* balance  */}
                <div className=" w-full mt-2 sm:mt-12 lg:mt-1 xl:w-5/12">
                    <h1 className=" text-2xl text-white font-bold text-left sm:text-right">
                        $ 85,654
                    </h1>
                    <p className="text-base text-white capitalize mt-1 text-left sm:text-right sm:mt-3">
                        active balance
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BalanceSummery;
