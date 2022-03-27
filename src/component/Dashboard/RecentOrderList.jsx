import React, { useState } from "react";
import useCardWrapper from "../../HOC/useCardWrapper";

const OrderList = (props) => {
    let statusColor = "";

    switch (props.status) {
        case "delivered":
            statusColor = "#338de6";
            break;
        case "cancelled":
            statusColor = "#26d49b";
            break;
        default:
            statusColor = "#ffc266";
            break;
    }

    return (
        <div className="flex flex-wrap gap-x-2 gap-y-2 py-2 last:pb-0 sm:gap-x-0">
            <h6 className="text-base font-semibold capitalize sm:w-[28%]">
                {props.proName}
            </h6>
            <h6 className="text-base font-semibold capitalize sm:w-[20%]">
                {props.customer}
            </h6>
            <h6 className="text-base font-semibold capitalize sm:w-[17%]">
                {props.productId}
            </h6>
            <h6 className="text-base font-semibold capitalize sm:w-[17%]">
                {props.proPrice}
            </h6>
            <h6
                style={{ color: statusColor }}
                className="text-base font-semibold capitalize sm:w-[18%]"
            >
                {props.status}
            </h6>
        </div>
    );
};

const RecentOrderList = (props) => {
    return (
        <div>
            <h1 className=" display-1 mb-6">recent orders</h1>
            {/* top list  */}
            <div className=" flex border-b pb-3 flex-wrap gap-x-2 gap-y-2 sm:gap-x-0">
                <h6 className=" text-base font-semibold capitalize sm:w-[28%]">
                    product name
                </h6>
                <h6 className=" text-base font-semibold capitalize sm:w-[20%]">
                    customer
                </h6>
                <h6 className=" text-base font-semibold capitalize sm:w-[17%]">
                    product id
                </h6>
                <h6 className=" text-base font-semibold capitalize sm:w-[17%]">
                    price
                </h6>
                <h6 className=" text-base font-semibold capitalize sm:w-[18%]">
                    status
                </h6>
            </div>
            <div className=" mt-2">
                {props.orderList.map((item, index) => {
                    return <OrderList {...item} key={index} />;
                })}
            </div>
        </div>
    );
};

export default useCardWrapper(RecentOrderList, "w-full lg:w-8/12");
