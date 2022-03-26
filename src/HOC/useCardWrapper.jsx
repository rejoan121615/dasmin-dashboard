import React from "react";

const useCardWrapper = (CardContent, className) => {
    return class NewElement extends React.Component {
        render() {
            return (
                <div className={`bg-white p-8 rounded-lg shadow ${className}`}>
                    <CardContent {...this.props} />
                </div>
            );
        }
    };
};

export default useCardWrapper;
