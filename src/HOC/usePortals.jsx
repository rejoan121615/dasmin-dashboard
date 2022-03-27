import React from "react";
import ReactDOM from "react-dom";

const PortalsElement = (props) => {

    
    return (
        <div className=" w-screen h-full min-h-screen bg-[#00000085] fixed left-0 top-0 ">
            {props.children}
        </div>
    );
};

const usePortals = (PushedElement) => {
    return class NewComponent extends React.Component {
        render() {
            return ReactDOM.createPortal(
                <React.Fragment>
                    <PortalsElement>
                        <PushedElement />
                    </PortalsElement>
                </React.Fragment>,
                document.getElementById("portal-root")
            );
        }
    };
};

export default usePortals;
