import React from "react";

const useCardWrapper = (CardContent) => {
    return class NewComponent extends React.Component {
        // render method
        render() {
            return (
                <div>
                    <CardContent {...props} />
                </div>
            );
        }
    };
};

export default useCardWrapper;
