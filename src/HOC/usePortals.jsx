import React from "react";
import ReactDOM from "react-dom";

const PortalsElement = (props) => {
    const backHandler = () => {
        props.back();
    };

    return (
        <div
            className=" w-screen h-full min-h-screen bg-[#00000085] fixed left-0 top-0 z-30"
        >
            {/* backdrop  */}
            <div onClick={backHandler} className="absolute left-0 top-0 w-screen h-screen z-40"></div>
            {props.children}
        </div>
    );
};

const usePortals = (PushedElement) => {
    return class NewComponent extends React.Component {
        render() {
            return ReactDOM.createPortal(
                <React.Fragment>
                    <PortalsElement {...this.props}>
                        <PushedElement />
                    </PortalsElement>
                </React.Fragment>,
                document.getElementById("portal-root")
            );
        }
    };
};

export default usePortals;
