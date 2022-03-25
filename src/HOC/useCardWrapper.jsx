import React from "react";

const useCardWrapper = (CardContent) => {
    return class NewElement extends React.Component {
        render() {
            return (
                <div className="bg-white px-8 py-8 rounded-lg shadow">
                    <CardContent {...this.props} />
                </div>
            );
        }
    };
};

export default useCardWrapper;
