import React from "react";
import useCardWrapper from "../../HOC/useCardWrapper";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const OrderByDeviceChart = () => {
    return (
        <div className=" flex flex-col justify-between h-full">
            {/* title  */}
            <h1 className=" display-1">order by device</h1>

            {/* donut charts  */}
            <div className=" w-3/6 mx-auto">
                <Chart
                    type="doughnut"
                    options={{
                        cutout: 75,
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                       
                    }}
                    data={{
                        labels: ["Red", "Blue", "Yellow"],
                        datasets: [
                            {
                                label: "My First Dataset",
                                data: [300, 50, 100],
                                backgroundColor: [
                                    "rgb(255, 99, 132)",
                                    "rgb(54, 162, 235)",
                                    "rgb(255, 205, 86)",
                                ],
                                
                            },
                        ],
                    }}
                />
            </div>
            {/* legend list  */}
            <div className="flex justify-center">
                <div className="flex items-center mr-8">
                    <span className=" w-3 h-3 inline-block rounded-full bg-primary mr-2"></span>
                    <h3 className=" text-base capitalize font-semibold">
                        mobile
                    </h3>
                </div>
                <div className="flex items-center mr-8">
                    <span className=" w-3 h-3 inline-block rounded-full bg-yellow mr-2"></span>
                    <h3 className=" text-base capitalize font-semibold">
                        desktop
                    </h3>
                </div>
                <div className="flex items-center">
                    <span className=" w-3 h-3 inline-block rounded-full bg-green mr-2"></span>
                    <h3 className=" text-base capitalize font-semibold">
                        tablet
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default useCardWrapper(OrderByDeviceChart, "w-5/12");
