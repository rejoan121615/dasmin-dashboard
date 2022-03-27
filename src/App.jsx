import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import LeftNavbar from "./component/LeftNavbar";
import TopBar from "./component/TopBar";
import RespLeftNavBar from "./component/RespLeftNavBar";
const App = () => {
    const [leftNav, setLeftNav] = useState(false);

    const RespNavHandler = () => {
        setLeftNav(!leftNav);
    };

    return (
        <React.Fragment>
            <div className=" lg:flex bg-main-bg">
                {/* responsive left sidebar  */}
                {leftNav && <RespLeftNavBar back={RespNavHandler} />}
                {/* left side navbar  */}
                <div className=" bg-white lg:w-1/6 xl:w-2/12 hidden xl:block">
                    <LeftNavbar />
                </div>
                {/* right side content */}
                <div className=" w-full xl:w-5/6 p-5 xl:p-6 2xl:p-8">
                    <TopBar navHan={RespNavHandler} />
                    {/* <Switch> */}
                    <Route path="/">
                        <Redirect to="/dashboard" />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    {/* </Switch> */}
                </div>
            </div>
        </React.Fragment>
    );
};

export default App;
