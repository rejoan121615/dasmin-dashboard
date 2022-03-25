import React from "react";
import CardList from "../component/Dashboard/CardList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BalanceSummery from "../component/Dashboard/BalanceSummery";
import TopProductsList from "../component/Dashboard/TopProductsList";

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

    return (
        <div className=" mt-2">
            <h1 className=" text-2xl font-semibold">Dashboard</h1>
            {/* top content  */}
            <div className=" flex gap-x-base-lg">
                {/* left side  */}
                <div className=" w-8/12">
                    {/* top cards  */}
                    <CardList cards={dataList} />
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
