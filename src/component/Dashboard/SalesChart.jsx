import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import useCardWrapper from "../../HOC/useCardWrapper";

const SalesChart = (props) => {
    return (
        <div className="">
            {/* top texts  */}
            <div className=" flex items-center justify-between mb-5">
                <div className="flex">
                    <h1 className="display-1 mr-20">sales</h1>
                    <div className="flex">
                        <div className="flex items-center mr-8">
                            <span className=" w-3 h-3 inline-block rounded-full bg-primary mr-2"></span>
                            <h3 className=" text-base capitalize font-semibold">
                                income
                            </h3>
                        </div>
                        <div className="flex items-center">
                            <span className=" w-3 h-3 inline-block rounded-full bg-yellow mr-2"></span>
                            <h3 className=" text-base capitalize font-semibold">
                                expenses
                            </h3>
                        </div>
                    </div>
                </div>
                {/* select button  */}
                <select className=" font-semibold capitalize p-2 cursor-pointer" name="" id="">
                    <option value="week">week</option>
                    <option value="month">month</option>
                    <option selected value="year">year</option>
                </select>
            </div>
            {/* bottom chart  */}
            <Chart
                className=" "
                type="line"
                options={props.options}
                data={props.data}
            />
        </div>
    );
};

export default useCardWrapper(SalesChart);
