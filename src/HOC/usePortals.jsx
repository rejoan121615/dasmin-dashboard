import React from "react";
import ReactDOM from "react-dom";

const PortalsElement = (props) => {
    return (
        <div className=" w-screen h-screen bg-[#00000085] fixed left-0 top-0 ">
        <div>
          
            </div>
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
