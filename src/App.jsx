import React from "react";
import Dashboard from "./pages/Dashboard";
import { Switch, Route } from "react-router-dom";
import LeftNavbar from "./component/LeftNavbar";
import TopBar from "./component/TopBar";

const App = () => {
    return (
        <React.Fragment>
            <div className=" hidden lg:flex bg-main-bg">
                {/* left side navbar  */}
                <div className=" bg-white lg:w-3/12 xl:w-2/12">
                    <LeftNavbar />
                </div>
                {/* right side content */}
                <div className=" w-full lg:w-9/12 xl:w-10/12 p-5 xl:p-6 2xl:p-8">
                    <TopBar />
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;
