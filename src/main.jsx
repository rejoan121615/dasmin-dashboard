import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faSquarePollHorizontal,
    faCreditCard,
    faEnvelope,
    faGear,
    faBell,
    faMessage,
    faAngleDown,
    faSearch,
    faCaretDown,
    faHandHoldingDollar,
    faCircleDollarToSlot,
    faUsers,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faSquarePollHorizontal,
    faCreditCard,
    faEnvelope,
    faGear,
    faBell,
    faMessage,
    faAngleDown,
    faSearch,
    faCaretDown,
    faHandHoldingDollar,
    faCircleDollarToSlot,
    faUsers,
    faPlus
);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
