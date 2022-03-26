import React from "react";
import CardList from "../component/Dashboard/CardList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BalanceSummery from "../component/Dashboard/BalanceSummery";
import TopProductsList from "../component/Dashboard/TopProductsList";
import SalesChart from "../component/Dashboard/SalesChart";
import moment from "moment";

const Dashboard = () => {
    const dataList = [
        {
            icon: "hand-holding-dollar",
            amount: 45365,
            title: "total sales",
            iconColor: "text-primary",
        },
        {
            icon: "circle-dollar-to-slot",
            amount: 15654,
            title: "total expenses",
            iconColor: "text-yellow",
        },
        {
            icon: "users",
            amount: 2565400,
            title: "total visitors",
            iconColor: "text-green",
        },
    ];

    const TopProducts = [
        {
            name: "Iphone 8 pro",
            price: "1200",
        },
        {
            name: "Iphone 8 pro",
            price: "1200",
        },
        {
            name: "Iphone 8 pro",
            price: "1200",
        },
        {
            name: "Iphone 8 pro",
            price: "1200",
        },
        {
            name: "Iphone 8 pro",
            price: "1200",
        },
        {
            name: "Iphone 8 pro",
            price: "1200",
        },
        {
            name: "Iphone 8 pro",
            price: "1200",
        },
        {
            name: "Iphone 8 pro",
            price: "1200",
        },
    ];

    // charts options  -------------------
    const chartOptions = {
        elements: {
            point: {
                radius: 0,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    // charts data -------------------
    const chartData = {
        labels: [...moment.monthsShort()],
        datasets: [
            {
                label: "Income",
                data: [
                    7000, 5800, 778, 5400, 3200, 2300, 4150, 4800, 2200, 9800,
                    7000, 7300,
                ],

                backgroundColor: "#ffce85c9",
                borderColor: "#ffce85c9",
                fill: true,
                order: 2,
                tension: 0.5,
            },
            {
                label: "Expenses",
                data: [
                    6100, 4275, 1300, 8200, 2800, 5500, 8700, 1300, 2700, 6500,
                    5600, 2300,
                ],
                backgroundColor: "#3498ffc9",
                borderColor: "#3498ffc9",
                fill: true,
                order: 1,
                tension: 0.5,
                pointStyle: "none",
            },
        ],
    };
    return (
        <div className=" mt-2">
            <h1 className=" text-2xl font-semibold">Dashboard</h1>
            {/* top content  */}
            <div className=" flex gap-x-base-lg">
                {/* left side  */}
                <div className=" w-8/12">
                    {/* top cards  */}
                    <CardList cards={dataList} />
                    {/* chart component  */}
                    <SalesChart options={chartOptions} data={chartData} />
                </div>
                {/* right side  */}
                <div className=" w-4/12 flex flex-col gap-y-base-lg">
                    <BalanceSummery />
                    <TopProductsList list={TopProducts} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
