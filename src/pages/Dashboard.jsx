import React from "react";
import CardList from "../component/Dashboard/CardList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BalanceSummery from "../component/Dashboard/BalanceSummery";
import TopProductsList from "../component/Dashboard/TopProductsList";
import SalesChart from "../component/Dashboard/SalesChart";
import moment from "moment";
import RecentOrderList from "../component/Dashboard/RecentOrderList";
import OrderByDeviceChart from "../component/Dashboard/OrderByDeviceChart";

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

    // sales charts options  -------------------
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
    // sales charts data -------------------
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

    // recent orders data
    const recentOrdersData = [
        {
            proName: "Appple airpod pro",
            proPrice: 154.64,
            customer: "john doe",
            productId: 659784,
            status: "pending",
        },
        {
            proName: "redmi note 10s",
            proPrice: 114.56,
            customer: "ma aslam",
            productId: 894652,
            status: "delivered",
        },
        {
            proName: "razer kraken headset",
            proPrice: 100.0,
            customer: "linda sins",
            productId: 986452,
            status: "cancelled",
        },
        {
            proName: "iphone 12 pro max",
            proPrice: 1250.65,
            customer: "mahfuz sarkar",
            productId: 321798,
            status: "delivered",
        },
        {
            proName: "iphone 12 pro max",
            proPrice: 1250.65,
            customer: "mahfuz sarkar",
            productId: 321798,
            status: "delivered",
        },
        {
            proName: "iphone 12 pro max",
            proPrice: 1250.65,
            customer: "mahfuz sarkar",
            productId: 321798,
            status: "delivered",
        },
    ];
    return (
        <div className=" mt-2">
            <h1 className=" text-2xl font-semibold my-6 md:my-8 2xl:my-10">Dashboard</h1>
            {/* top content  */}
            <div className="
                    flex flex-col mb-6 gap-y-6 gap-x-base-lg lg:mb-[32px]
                    lg:flex-row
            ">
                {/* left side  */}
                <div
                    className=" w-12/12 gap-y-5 lg:gap-y-base-lg flex flex-col
                lg:w-8/12 "
                >
                    {/* top cards  */}
                    <CardList cards={dataList} />
                    {/* chart component  */}
                    <SalesChart options={chartOptions} data={chartData} />
                </div>
                {/* right side  */}
                <div
                    className=" w-full flex flex-col gap-y-base-lg
                                sm:grid sm:grid-cols-2 sm:gap-x-6
                                lg:w-4/12 lg:grid-cols-1
                "
                >
                    <BalanceSummery />
                    <TopProductsList list={TopProducts} />
                </div>
            </div>
            {/* bottom content  */}
            <div className=" flex flex-col gap-x-base-lg gap-y-6 lg:flex-row">
                <RecentOrderList orderList={recentOrdersData} />
                <OrderByDeviceChart />
            </div>
        </div>
    );
};

export default Dashboard;
