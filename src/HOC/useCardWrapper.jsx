import React from "react";

const useCardWrapper = (CardContent, className) => {
    return class NewElement extends React.Component {
        render() {
            return (
                <div className={`bg-white p-4 rounded-lg shadow sm:p-6 lg:p-8 ${className}`}>
                    <CardContent {...this.props} />
                </div>
            );
        }
    };
};

export default useCardWrapper;
